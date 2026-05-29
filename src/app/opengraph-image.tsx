import { ImageResponse } from "next/og";

// Generate the OG image at build time (required for `output: export`).
export const dynamic = "force-static";

export const alt = "Ashara Mubaraka 1448H — SF Bay Area Relay Center";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          background: "#7A1F1F",
          color: "#FAF8F3",
          textAlign: "center",
          padding: "64px",
        }}
      >
        <div style={{ width: 64, height: 4, background: "#D4A23A", marginBottom: 40 }} />
        <div style={{ fontSize: 68, fontWeight: 600, lineHeight: 1.1 }}>
          Ashara Mubaraka 1448H
        </div>
        <div style={{ fontSize: 38, marginTop: 18, opacity: 0.92 }}>
          SF Bay Area Relay Center
        </div>
        <div style={{ fontSize: 24, marginTop: 36, opacity: 0.75 }}>
          Al Masjid Al Mohammedi · Fremont
        </div>
      </div>
    ),
    { ...size },
  );
}
