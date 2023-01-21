import { ImageResponse } from '@vercel/og'

export const config = {
  runtime: 'edge',
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
          background: 'linear-gradient(to right, #a5b4fc, #f9a8d4, #a5b4fc)',
          height: '100%',
          width: '100%',
          textAlign: 'left',
          fontSize: 100,
          fontFamily: '"GT Pressura Mono"',
          color: '#312e81',
          paddingTop: '70px',
          paddingBottom: '50px',
          paddingLeft: '100px',
          paddingRight: '100px',
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
