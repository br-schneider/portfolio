import { getAllArticles } from '@/lib/articles'
import { renderLlmDocument } from '@/lib/llms'

export const dynamic = 'force-static'

export async function GET() {
  return new Response(renderLlmDocument(await getAllArticles(), true), {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  })
}
