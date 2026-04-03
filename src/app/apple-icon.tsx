import { ImageResponse } from 'next/og'
 
export const size = {
  width: 180,
  height: 180,
}
export const contentType = 'image/png'
 
export default function AppleIcon() {
  return new ImageResponse(
    (
      <div
        style={{
          fontSize: 48,
          background: 'linear-gradient(135deg, #C9A962 0%, #B89952 100%)',
          width: '100%',
          height: '100%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#0a0a0a',
          fontWeight: 'bold',
          borderRadius: '20px',
          flexDirection: 'column',
        }}
      >
        <div style={{ fontSize: '72px', lineHeight: '1' }}>PGI</div>
        <div style={{ fontSize: '12px', opacity: 0.8 }}>Property Group</div>
      </div>
    ),
    {
      ...size,
    }
  )
}