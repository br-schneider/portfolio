export const dynamic = 'force-dynamic' // defaults to auto
export async function GET(request: Request) {
  const today = new Date().toISOString().split('T')[0]

  //get slug from query params
  const url = new URL(request.url)
  const slug = url.searchParams.get('slug')

  if (!slug) {
    // return 400 if no slug is provided
    return Response.json(
      {
        error: 'No slug provided',
      },
      {
        status: 400,
      },
    )
  }

  const res = await fetch(
    `https://plausible.io/api/v1/stats/aggregate?site_id=bretts.dev&period=custom&date=2020-01-01,${today}&filters=event:page%3D%3D%2Farticles%2F${slug}`,
    {
      headers: {
        Authorization: `Bearer ${process.env.PLAUSIBLE_API_KEY}`,
      },
    },
  )
    .then((response) => response.json())
    .catch((error) => console.error(error))

  const views = res?.results?.visitors?.value || 0

  // there were 17 views from the old URL
  if (slug === 'unleashing-your-ecommerce-potential') {
    return Response.json({
      views: views + 17 ?? 0,
    })
  }

  return Response.json({
    views: views ?? 0,
  })
}
