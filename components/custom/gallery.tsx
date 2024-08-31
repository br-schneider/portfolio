'use client'

import { useState } from 'react'
import ImageModal from './image-modal'

export default function Gallery({ images }: { images: string[] }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)

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

      {/* {images.map((image) => {
        if (image) {
          return (
            <li
              onClick={() => {
                setSelectedImage(image)
              }}
              key={image}
              className="relative cursor-pointer"
            >
              <div className=" group block w-full overflow-hidden rounded-lg focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 focus-within:ring-offset-gray-100">
                <Image
                  src={`/drone/${image}`}
                  alt={image}
                  height="200"
                  width="250"
                  className="pointer-events-none object-cover group-hover:opacity-75"
                />
                <button
                  type="button"
                  className="absolute inset-0 focus:outline-none"
                >
                  <span className="sr-only">View details for {image}</span>
                </button>
              </div>
              <p className="pointer-events-none mt-2 block truncate text-sm font-medium text-zinc-800 dark:text-zinc-100">
                {image}
              </p>
            </li>
          )
        } else {
          return null
        }
      })} */}
    </ul>
  )
}
