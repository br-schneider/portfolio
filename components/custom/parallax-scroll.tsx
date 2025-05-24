'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

import { ClassValue, clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'
import ImageModal from './image-modal'

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[]
  className?: string
}) => {
  const gridRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({
    // container: gridRef, // remove this if your container is not fixed height
    // offset: ['start start', 'end start'], // remove this if your container is not fixed height
  })
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>(
    images.reduce((acc, img) => ({ ...acc, [img]: true }), {}),
  )

  const handleImageLoad = (img: string) => {
    setLoadingImages((prev) => ({ ...prev, [img]: false }))
  }

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])
  const translateThird = useTransform(scrollYProgress, [0, 1], [0, -200])

  const third = Math.ceil(images.length / 3)

  const firstPart = images.slice(0, third)
  const secondPart = images.slice(third, 2 * third)
  const thirdPart = images.slice(2 * third)

  return (
    <>
      {selectedImage && (
        <ImageModal
          image={selectedImage}
          onClose={() => {
            setSelectedImage(null)
          }}
        />
      )}
      <div
        className={cn(' w-full items-start sm:pb-24', className)}
        ref={gridRef}
      >
        <div
          className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-4 sm:gap-10 lg:grid-cols-3"
          ref={gridRef}
        >
          <div className="grid gap-4 sm:gap-10">
            {firstPart.map((el, idx) => (
              <div className="relative h-80 sm:h-96" key={'grid-1' + idx}>
                {loadingImages[el] && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
                  </div>
                )}
                <motion.div
                  style={{ y: translateFirst }} // Apply the translateY motion value here
                >
                  <Image
                    onClick={() => {
                      setSelectedImage(el)
                    }}
                    src={el}
                    className={cn(
                      '!m-0 h-80 w-full cursor-pointer rounded-lg object-cover object-center !p-0 shadow-lg sm:h-96',
                      loadingImages[el] && 'opacity-0',
                    )}
                    height="400"
                    width="400"
                    alt="thumbnail"
                    onLoadingComplete={() => handleImageLoad(el)}
                  />
                </motion.div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:gap-10">
            {secondPart.map((el, idx) => (
              <div className="relative h-80 sm:h-96" key={'grid-2' + idx}>
                {loadingImages[el] && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
                  </div>
                )}
                <motion.div style={{ y: translateSecond }}>
                  <Image
                    onClick={() => {
                      setSelectedImage(el)
                    }}
                    src={el}
                    className={cn(
                      '!m-0 h-80 w-full cursor-pointer rounded-lg object-cover object-left-top !p-0 shadow-lg sm:h-96',
                      loadingImages[el] && 'opacity-0',
                    )}
                    height="400"
                    width="400"
                    alt="thumbnail"
                    onLoadingComplete={() => handleImageLoad(el)}
                  />
                </motion.div>
              </div>
            ))}
          </div>
          <div className="grid gap-4 sm:gap-10">
            {thirdPart.map((el, idx) => (
              <div className="relative h-80 sm:h-96" key={'grid-3' + idx}>
                {loadingImages[el] && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
                  </div>
                )}
                <motion.div style={{ y: translateThird }}>
                  <Image
                    onClick={() => {
                      setSelectedImage(el)
                    }}
                    src={el}
                    className={cn(
                      '!m-0 h-80 w-full cursor-pointer rounded-lg object-cover object-left-top !p-0 shadow-lg sm:h-96',
                      loadingImages[el] && 'opacity-0',
                    )}
                    height="400"
                    width="400"
                    alt="thumbnail"
                    onLoadingComplete={() => handleImageLoad(el)}
                  />
                </motion.div>
              </div>
            ))}
          </div>

          <div className="grid gap-4 sm:hidden sm:gap-10">
            {images.map((el, idx) => (
              <div key={'grid-4' + idx} className="relative h-80">
                {loadingImages[el] && (
                  <div className="absolute inset-0 flex items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                    <div className="h-8 w-8 animate-spin rounded-full border-4 border-gray-300 border-t-blue-600"></div>
                  </div>
                )}
                <Image
                  onClick={() => {
                    setSelectedImage(el)
                  }}
                  src={el}
                  className={cn(
                    '!m-0 h-full w-full cursor-pointer rounded-lg object-cover object-left-top !p-0 shadow-lg',
                    loadingImages[el] && 'opacity-0',
                  )}
                  height="400"
                  width="400"
                  alt="thumbnail"
                  onLoadingComplete={() => handleImageLoad(el)}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
