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
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => {
            setSelectedImage(null)
          }}
        />
      )}
    </ul>
  )
}
