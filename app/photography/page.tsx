import { ParallaxScroll } from '@/components/custom/parallax-scroll'
import { SimpleLayout } from '@/components/tailwind/simple-layout'
import { getAllPhotos } from '@/lib/photos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photography',
  description: 'Here’s my camera roll.',
}

export default async function PhotographyPage() {
  const photos = await getAllPhotos()

  const imageUrls = photos.map((image) => {
    return `https://bretts.dev/drone/${image}`
  })

  return (
    <SimpleLayout
      title="Here's my camera roll."
      intro="Most of these are from my DJI Mavic Pro. "
    >
      <div className="-mt-5">
        <ParallaxScroll images={imageUrls} />
      </div>
    </SimpleLayout>
  )
}
