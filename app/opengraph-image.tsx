import { ImageResponse } from "next/og";

export const alt = "ApplyLoop - Spend less time applying. More time living.";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          overflow: "hidden",
          padding: "72px 84px",
          color: "white",
          fontFamily: "Arial, sans-serif",
          background:
            "linear-gradient(135deg, #06142b 0%, #0b2450 56%, #173e91 100%)",
        }}
      >
        <div
          style={{
            position: "absolute",
            width: "520px",
            height: "520px",
            borderRadius: "50%",
            right: "-130px",
            top: "-190px",
            background:
              "radial-gradient(circle, rgba(70,115,255,0.65) 0%, rgba(70,115,255,0) 70%)",
          }}
        />

        <div
          style={{
            position: "relative",
            display: "flex",
            width: "100%",
            height: "100%",
            flexDirection: "column",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              fontSize: "30px",
              fontWeight: 700,
            }}
          >
            <div
              style={{
                display: "flex",
                width: "54px",
                height: "54px",
                marginRight: "18px",
                alignItems: "center",
                justifyContent: "center",
                borderRadius: "16px",
                background: "#3b6df6",
                fontSize: "20px",
              }}
            >
              AL
            </div>
            ApplyLoop
          </div>

          <div
            style={{
              display: "flex",
              maxWidth: "870px",
              flexDirection: "column",
            }}
          >
            <div
              style={{
                display: "flex",
                alignSelf: "flex-start",
                marginBottom: "24px",
                padding: "10px 18px",
                border: "1px solid rgba(255,255,255,0.22)",
                borderRadius: "999px",
                background: "rgba(255,255,255,0.08)",
                fontSize: "18px",
              }}
            >
              AI speed. Human precision.
            </div>

            <div
              style={{
                display: "flex",
                flexDirection: "column",
                fontSize: "70px",
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: "-3px",
              }}
            >
              <span>Spend less time applying.</span>
              <span style={{ color: "#74a0ff" }}>More time living.</span>
            </div>

            <div
              style={{
                display: "flex",
                marginTop: "28px",
                maxWidth: "800px",
                color: "rgba(255,255,255,0.76)",
                fontSize: "25px",
                lineHeight: 1.45,
              }}
            >
              Optimized resumes, tailored applications, and smarter job
              matching.
            </div>
          </div>

          <div
            style={{
              display: "flex",
              fontSize: "20px",
              color: "rgba(255,255,255,0.62)",
            }}
          >
            www.weareapplyloop.com
          </div>
        </div>
      </div>
    ),
    size
  );
}
