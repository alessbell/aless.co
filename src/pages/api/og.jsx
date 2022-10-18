import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'experimental-edge',
}

// Make sure the font exists in the specified path:
const font = fetch(
  new URL('../../fonts/GT-Pressura-Mono-Regular.ttf', import.meta.url)
).then((res) => res.arrayBuffer())

export default async function handler(req) {
  const fontData = await font
  const { searchParams } = req.nextUrl
  const title = searchParams.get('title')

  return new ImageResponse(
    (
      <div
        style={{
          background: 'linear-gradient(to right, #c6ffdd, #fbd786, #f7797d)',
          height: '100%',
          width: '100%',
          fontSize: 85,
          fontFamily: '"GT Pressura Mono"',
          color: '#000080',
          paddingTop: '50px',
          paddingBottom: '50px',
          paddingLeft: '75px',
          paddingRight: '75px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'flex-start',
        }}
      >
        <p>{title}</p>
        <p style={{ fontSize: 70 }}>Alessia Bellisario</p>
      </div>
    ),
    {
      width: 1200,
      height: 630,
      fonts: [
        {
          name: 'GT Pressura Mono',
          data: fontData,
          style: 'normal',
        },
      ],
    }
  )
}
