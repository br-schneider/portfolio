'use client'

import { XMarkIcon } from '@heroicons/react/24/solid'
import Image from 'next/image'
import { useState } from 'react'

export default function ImageModal({
  image,
  onClose,
}: {
  image: string
  onClose: () => void
}) {
  const [loaded, setLoaded] = useState(false)

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div
        onClick={() => {
          onClose()
        }}
        className="fixed inset-0 overflow-hidden bg-black opacity-50"
      />
      <div className="absolute right-3 top-3 mb-3 flex cursor-pointer justify-end">
        <button
          className="text-white"
          onClick={() => {
            onClose()
          }}
        >
          <XMarkIcon className="h-7 w-7" />
        </button>
      </div>
      <div className="relative z-10 bg-white sm:mx-10 sm:rounded-lg sm:p-5 dark:bg-zinc-800">
        <div className="flex justify-center">
          <Image
            src={image}
            alt={image}
            width={1000}
            height={500}
            className={
              ' sm:rounded-lg ' +
              (loaded ? '' : ' animate-pulse bg-zinc-200 dark:bg-zinc-700 ')
            }
            priority={true}
            onLoad={() => {
              setLoaded(true)
            }}
          />
        </div>
      </div>
    </div>
  )
}
