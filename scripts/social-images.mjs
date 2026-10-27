import { spawn } from 'node:child_process'
import { mkdir, writeFile } from 'node:fs/promises'
import { homedir } from 'node:os'
import { dirname, join } from 'node:path'
import { fileURLToPath } from 'node:url'
import { parseArgs } from 'node:util'
import { setTimeout as delay } from 'node:timers/promises'
import { chromium } from 'playwright'

const root = dirname(dirname(fileURLToPath(import.meta.url)))
const { values } = parseArgs({
  options: {
    url: { type: 'string' },
  },
})
const url = new URL(values.url ?? 'http://localhost:3000')

if (!['http:', 'https:'].includes(url.protocol)) {
  throw new Error('Use an http or https URL.')
}

let server
let browser

async function isReady() {
  try {
    const response = await fetch(url, { signal: AbortSignal.timeout(2000) })
    await response.body?.cancel()
    return response.ok
  } catch {
    return false
  }
}

async function cleanup() {
  await browser?.close()
  if (server && server.exitCode === null) {
    server.kill('SIGTERM')
    await Promise.race([
      new Promise((resolve) => server.once('exit', resolve)),
      delay(3000).then(() => {
        if (server.exitCode === null) server.kill('SIGKILL')
      }),
    ])
  }
}

for (const signal of ['SIGINT', 'SIGTERM']) {
  process.once(signal, async () => {
    await cleanup()
    process.exit(signal === 'SIGINT' ? 130 : 143)
  })
}

try {
  if (!(await isReady())) {
    if (values.url) throw new Error(`Could not reach ${url}.`)
    console.log('Starting a temporary local preview...')
    server = spawn(
      process.execPath,
      [join(root, 'node_modules/next/dist/bin/next'), 'dev', '--port', '3000'],
      { cwd: root, stdio: 'inherit' },
    )
    const deadline = Date.now() + 60000
    while (!(await isReady())) {
      if (server.exitCode !== null || Date.now() > deadline) {
        throw new Error('Could not start the preview. Run pnpm dev and retry.')
      }
      await delay(250)
    }
  }

  browser = await chromium.launch()
  const page = await browser.newPage({
    viewport: { width: 800, height: 420 },
    deviceScaleFactor: 3,
    colorScheme: 'light',
    reducedMotion: 'reduce',
  })
  await page.route('**/react-grab/**', (route) => route.abort())
  await page.addInitScript(() => {
    localStorage.setItem('theme', 'light')
  })
  const response = await page.goto(url.href, { waitUntil: 'networkidle' })
  if (!response?.ok())
    throw new Error('The homepage did not load successfully.')
  await page.getByRole('heading', { level: 1 }).waitFor()
  await page.evaluate(() => document.fonts.ready)
  await page.addStyleTag({
    content: 'nextjs-portal { display: none !important; }',
  })
  const image = await page.screenshot({ animations: 'disabled' })
  const desktop = join(homedir(), 'Desktop')
  await mkdir(desktop, { recursive: true })
  const outputs = [
    join(root, 'app/opengraph-image.png'),
    join(root, 'app/twitter-image.png'),
    join(desktop, 'portfolio-linkedin.png'),
  ]
  for (const output of outputs) {
    await writeFile(output, image)
    console.log(`Saved ${output}`)
  }
} catch (error) {
  console.error(error.message)
  if (error.message.includes("Executable doesn't exist")) {
    console.error(
      'Install the screenshot browser with: pnpm exec playwright install chromium',
    )
  }
  process.exitCode = 1
} finally {
  await cleanup()
}
