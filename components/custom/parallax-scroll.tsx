'use client'

import { cn } from '@/lib/utils'
import { motion, useScroll, useTransform } from 'framer-motion'
import Image from 'next/image'
import { useRef, useState } from 'react'

const LoaderOverlay = () => (
  <div className="bg-background absolute inset-0 flex items-center justify-center rounded-lg">
    <div className="flex h-8 w-8 items-center justify-center">
      <div className="border-muted-foreground/25 border-t-muted-foreground h-4 w-4 animate-spin rounded-full border-[2.5px]" />
    </div>
  </div>
)

export const ParallaxScroll = ({
  images,
  className,
}: {
  images: string[]
  className?: string
}) => {
  const gridRef = useRef<any>(null)
  const { scrollYProgress } = useScroll({})
  const [loadingImages, setLoadingImages] = useState<Record<string, boolean>>(
    images.reduce((acc, img) => ({ ...acc, [img]: true }), {}),
  )

  const handleImageLoad = (img: string) => {
    setLoadingImages((prev) => ({ ...prev, [img]: false }))
  }

  const translateFirst = useTransform(scrollYProgress, [0, 1], [0, -200])
  const translateSecond = useTransform(scrollYProgress, [0, 1], [0, 200])

  const half = Math.ceil(images.length / 2)

  const firstPart = images.slice(0, half)
  const secondPart = images.slice(half)

  return (
    <div className={cn('w-full items-start', className)} ref={gridRef}>
      <div className="mx-auto grid max-w-5xl grid-cols-1 items-start gap-4 sm:grid-cols-2 sm:gap-6">
        <div className="grid gap-4 sm:gap-6">
          {firstPart.map((el, idx) => (
            <div className="relative" key={'grid-1' + idx}>
              {loadingImages[el] && (
                <div className="aspect-[3/2]">
                  <LoaderOverlay />
                </div>
              )}
              <motion.div style={{ y: translateFirst }}>
                <Image
                  src={el}
                  className={cn(
                    'm-0! w-full rounded-lg object-cover p-0!',
                    loadingImages[el] && 'opacity-0',
                  )}
                  height="600"
                  width="900"
                  alt="thumbnail"
                  onLoad={() => handleImageLoad(el)}
                />
              </motion.div>
            </div>
          ))}
        </div>
        <div className="grid gap-4 sm:gap-6">
          {secondPart.map((el, idx) => (
            <div className="relative" key={'grid-2' + idx}>
              {loadingImages[el] && (
                <div className="aspect-[3/2]">
                  <LoaderOverlay />
                </div>
              )}
              <motion.div style={{ y: translateSecond }}>
                <Image
                  src={el}
                  className={cn(
                    'm-0! w-full rounded-lg object-cover p-0!',
                    loadingImages[el] && 'opacity-0',
                  )}
                  height="600"
                  width="900"
                  alt="thumbnail"
                  onLoad={() => handleImageLoad(el)}
                />
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
