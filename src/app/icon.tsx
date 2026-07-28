import { ImageResponse } from "next/og";

export const size = { width: 32, height: 32 };
export const contentType = "image/png";
// Erforderlich für "output: export" (statischer Export, siehe next.config.mjs):
// das Favicon wird dann einmalig zur Build-Zeit als Datei erzeugt statt bei
// jeder Anfrage neu gerendert.
export const dynamic = "force-static";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: "#f59e0b",
          borderRadius: 6,
          color: "#12161d",
          fontSize: 15,
          fontWeight: 700,
          fontFamily: "sans-serif",
        }}
      >
        MT
      </div>
    ),
    size
  );
}
