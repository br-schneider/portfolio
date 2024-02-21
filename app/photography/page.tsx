import Gallery from '@/components/custom/gallery'
import { SimpleLayout } from '@/components/tailwind/simple-layout'
import { getAllPhotos } from '@/lib/photos'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Photography',
  description: 'Here’s my camera roll.',
}

export default async function PhotographyPage() {
  const photos = await getAllPhotos()

  return (
    <SimpleLayout
      title="Here's my camera roll."
      intro="Most of these are from my DJI Mavic Pro. "
    >
      <div className="-mt-5">
        <Gallery images={photos} />
      </div>
    </SimpleLayout>
  )
}
