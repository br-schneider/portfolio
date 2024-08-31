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
              <motion.div
                style={{ y: translateFirst }} // Apply the translateY motion value here
                key={'grid-1' + idx}
              >
                <Image
                  onClick={() => {
                    setSelectedImage(el)
                  }}
                  src={el}
                  className="!m-0 h-80 w-full cursor-pointer rounded-lg object-cover object-center !p-0 shadow-lg sm:h-96"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4 sm:gap-10">
            {secondPart.map((el, idx) => (
              <motion.div style={{ y: translateSecond }} key={'grid-2' + idx}>
                <Image
                  onClick={() => {
                    setSelectedImage(el)
                  }}
                  src={el}
                  className="!m-0 h-80 w-full cursor-pointer rounded-lg object-cover object-left-top !p-0 shadow-lg sm:h-96"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </motion.div>
            ))}
          </div>
          <div className="grid gap-4 sm:gap-10">
            {thirdPart.map((el, idx) => (
              <motion.div style={{ y: translateThird }} key={'grid-3' + idx}>
                <Image
                  onClick={() => {
                    setSelectedImage(el)
                  }}
                  src={el}
                  className="!m-0 h-80 w-full cursor-pointer rounded-lg object-cover object-left-top !p-0 shadow-lg sm:h-96"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </motion.div>
            ))}
          </div>

          <div className="grid gap-4 sm:hidden sm:gap-10">
            {images.map((el, idx) => (
              <div key={'grid-4' + idx}>
                <Image
                  onClick={() => {
                    setSelectedImage(el)
                  }}
                  src={el}
                  className="!m-0 h-full w-full cursor-pointer rounded-lg object-cover object-left-top !p-0 shadow-lg"
                  height="400"
                  width="400"
                  alt="thumbnail"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
