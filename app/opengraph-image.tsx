import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt =
  "DirectRxGuide — Every direct-to-patient drug program, in one place.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
          height: "100%",
          background: "linear-gradient(135deg, #f0fdfa 0%, #ffffff 50%, #f0fdfa 100%)",
          padding: "60px",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            border: "2px solid #ccfbf1",
            borderRadius: "32px",
            padding: "60px 80px",
            background: "white",
            boxShadow: "0 4px 24px rgba(13, 158, 128, 0.08)",
            width: "100%",
            height: "100%",
          }}
        >
          <div
            style={{
              display: "flex",
              fontSize: "42px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            Direct
            <span style={{ color: "#0D9E80" }}>Rx</span>
            Guide
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#374151",
              textAlign: "center",
              lineHeight: 1.4,
              marginTop: "20px",
              maxWidth: "800px",
            }}
          >
            Every direct-to-patient drug program,
          </div>
          <div
            style={{
              fontSize: "28px",
              color: "#0D9E80",
              fontStyle: "italic",
              textAlign: "center",
              lineHeight: 1.4,
            }}
          >
            in one place.
          </div>
          <div
            style={{
              display: "flex",
              gap: "24px",
              marginTop: "40px",
              fontSize: "16px",
              color: "#6b7280",
            }}
          >
            <span>Independent</span>
            <span>·</span>
            <span>No Pharma Funding</span>
            <span>·</span>
            <span>Pharmacist-Built</span>
            <span>·</span>
            <span>Updated Daily</span>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
