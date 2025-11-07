import { ImageResponse } from "next/og"
export const runtime = "edge"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url)
  const title = searchParams.get("title") || "Maru — AI Automation & Consulting"
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: 80,
          background: "#0A0A0A",
          color: "white",
          fontSize: 64,
          fontFamily: "Inter, sans-serif",
        }}
      >
        <div style={{ color: "rgb(61,184,198)" }}>MARU</div>
        <div style={{ marginTop: 24, lineHeight: 1.1 }}>{title}</div>
      </div>
    ),
    { ...size }
  )
}
