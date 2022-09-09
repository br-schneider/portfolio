import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import Image from 'next/future/image'
import { SimpleLayout } from '@/components/SimpleLayout'

function importAll(r) {
  let images = {}
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}
const imagesObject = importAll(
  require.context('../../public/pics', false, /\.(png|jpe?g|svg|JPG|jpg)$/)
)

const images = Object.keys(imagesObject).map((key) => {
  if (!key.includes('public')) {
    return {
      title: key,
      source: `/pics/${key}`,
      height: imagesObject[key].default.height,
      width: imagesObject[key].default.width,
    }
  }

  return null
})

function Gallery() {
  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {images.map((image) => {
        if (image) {
          return (
            <li key={image.source} className="relative">
              <div className="block w-full overflow-hidden bg-gray-100 rounded-lg group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <Image
                  src={image.source}
                  alt=""
                  height="200"
                  width="200"
                  className="object-cover pointer-events-none group-hover:opacity-75"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">
                    View details for {image.title}
                  </span>
                </button>
              </div>
              <p className="block mt-2 text-sm font-medium truncate pointer-events-none text-zinc-800 dark:text-zinc-100">
                {image.title}
              </p>
              <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                {image.width} × {image.height} px
              </p>
            </li>
          )
        } else {
          return null
        }
      })}
    </ul>
  )
}

export default function Photography() {
  return (
    <>
      <Head>
        <title>Photography - Brett Schneider</title>
        <meta name="description" content="Here's my camera roll." />
      </Head>
      <SimpleLayout
        title="Here's my camera roll."
        intro="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
      >
        <div className="-mt-8">
          <Gallery />
        </div>
      </SimpleLayout>
    </>
  )
}
