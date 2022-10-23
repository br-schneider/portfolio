import Head from 'next/head'
import Image from 'next/future/image'
import { SimpleLayout } from '@/components/SimpleLayout'
import { useState } from 'react'
import { XMarkIcon } from '@heroicons/react/24/solid'

function importAll(r) {
  let images = {}
  r.keys().forEach((item, index) => {
    images[item.replace('./', '')] = r(item)
  })
  return images
}
const imagesObject = importAll(
  require.context('/public/pics', false, /\.(png|jpe?g|svg|JPG|jpg)$/)
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

function ImageModal({ image, onClose }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={() => {
          onClose()
        }}
        className="fixed inset-0 overflow-hidden bg-black opacity-50"
      />
      <div className="absolute flex justify-end mb-3 cursor-pointer top-3 right-3">
        <button
          className="text-white"
          onClick={() => {
            onClose()
          }}
        >
          <XMarkIcon className="h-7 w-7" />
        </button>
      </div>
      <div className="relative z-10 p-5 mx-10 bg-white rounded-lg dark:bg-zinc-800">
        <div className="flex justify-center">
          <Image
            src={image.source}
            alt={image.title}
            width={1000}
            height={500}
            layout="responsive"
            className={' rounded-lg ' + (loaded ? '' : ' hidden')}
            priority={true}
            onLoad={() => {
              setLoaded(true)
            }}
          />
        </div>
        {loaded ? null : (
          <div className="flex h-[calc(100vw-10rem)] w-[calc(100vw-10rem)] animate-pulse justify-center rounded-lg bg-zinc-200 dark:bg-zinc-700 sm:h-[calc(100vw-20rem)]" />
        )}
      </div>
    </div>
  )
}

function Gallery() {
  const [selectedImage, setSelectedImage] = useState(null)

  return (
    <ul
      role="list"
      className="grid grid-cols-2 gap-x-4 gap-y-8 sm:grid-cols-3 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8"
    >
      {selectedImage ? (
        <ImageModal
          image={selectedImage}
          onClose={() => {
            setSelectedImage(null)
          }}
        />
      ) : null}

      {images.map((image) => {
        if (image) {
          return (
            <li
              onClick={() => {
                setSelectedImage(image)
              }}
              key={image.source}
              className="relative cursor-pointer"
            >
              <div className="block w-full overflow-hidden rounded-lg group aspect-w-10 aspect-h-7 focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
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
              {/* <p className="block text-sm font-medium text-gray-500 pointer-events-none">
                {image.width} × {image.height} px
              </p> */}
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
        intro="Most of these are from my DJI Mavic Pro. "
      >
        <div className="-mt-5">
          <Gallery />
        </div>
      </SimpleLayout>
    </>
  )
}
