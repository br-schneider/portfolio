import Gallery from '@/components/custom/gallery'
import { SimpleLayout } from '@/components/tailwind/simple-layout'
import { getAllPhotos } from '@/lib/photos'
import Head from 'next/head'

export default async function PhotographyPage() {
  const photos = await getAllPhotos()

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
          <Gallery images={photos} />
        </div>
      </SimpleLayout>
    </>
  )
}
