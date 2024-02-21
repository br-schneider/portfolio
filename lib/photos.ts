import { glob } from 'fast-glob'

export interface Photo {
  title: string
  description: string
  source: string
  width: number
  height: number
}

export interface PhotoWithSlug extends Photo {
  slug: string
}

// async function importPhoto(photoFilename: string): Promise<PhotoWithSlug> {
//   const { photo } = (await import(`../images/drone/${photoFilename}`)) as {
//     default: React.ComponentType
//     photo: Photo
//   }

//   return {
//     slug: photoFilename.replace(/\.jpg$/, ''),
//     ...photo,
//   }
// }

export async function getAllPhotos() {
  const photoFilenames = await glob('*', {
    cwd: './public/drone',
  })

  // const photos = await Promise.all(photoFilenames.map(importPhoto))

  return photoFilenames
}
