import { ImageResponse } from "next/og";
import { siteConfig } from "@/lib/site";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: "#0B1220",
          backgroundImage:
            "radial-gradient(circle at 50% 0%, rgba(249,115,22,0.18), transparent 60%)",
        }}
      >
        {/* Network glyph */}
        <svg width="120" height="102" viewBox="0 0 68 58" fill="none">
          <g stroke="#FB923C" strokeOpacity={0.55} strokeWidth={1.6}>
            <line x1={28} y1={28} x2={20} y2={16} />
            <line x1={20} y1={16} x2={11} y2={9} />
            <line x1={20} y1={16} x2={28} y2={8} />
            <line x1={28} y1={28} x2={9} y2={40} />
            <line x1={28} y1={28} x2={46} y2={22} />
            <line x1={46} y1={22} x2={57} y2={12} />
            <line x1={57} y1={12} x2={63} y2={6} />
            <line x1={28} y1={28} x2={44} y2={42} />
            <line x1={44} y1={42} x2={54} y2={52} />
          </g>
          <circle cx={28} cy={28} r={7} fill="#F97316" />
          <circle cx={20} cy={16} r={4.5} fill="#FB923C" />
          <circle cx={11} cy={9} r={2.8} fill="#FACC15" />
          <circle cx={28} cy={8} r={2.6} fill="#FBBF24" />
          <circle cx={9} cy={40} r={2.8} fill="#FACC15" />
          <circle cx={46} cy={22} r={5.5} fill="#FB923C" />
          <circle cx={57} cy={12} r={3} fill="#FB923C" />
          <circle cx={63} cy={6} r={2.2} fill="#EA580C" />
          <circle cx={44} cy={42} r={5} fill="#F97316" />
          <circle cx={54} cy={52} r={2.8} fill="#EA580C" />
        </svg>

        <div
          style={{
            marginTop: 28,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              color: "#FFFFFF",
              letterSpacing: "-0.02em",
            }}
          >
            Paravyoma
          </div>
          <div
            style={{
              marginTop: -8,
              fontSize: 30,
              fontWeight: 500,
              color: "#F97316",
            }}
          >
            Technologies
          </div>
        </div>

        <div
          style={{
            marginTop: 24,
            fontSize: 24,
            color: "rgba(255,255,255,0.6)",
          }}
        >
          {siteConfig.tagline}
        </div>
      </div>
    ),
    { ...size }
  );
}
