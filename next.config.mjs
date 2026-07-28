/** @type {import('next').NextConfig} */
const nextConfig = {
  // Reine statische Ausgabe (Ordner "out/"), ohne Node.js-Server – Voraussetzung
  // für GitHub Pages, das ausschließlich fertige Dateien ausliefert.
  output: "export",
  // Trailing Slashes sorgen dafür, dass jede Route als "<route>/index.html"
  // exportiert wird – das lässt sich auf statischen Hosts wie GitHub Pages
  // zuverlässig ohne Server-seitige Rewrite-Regeln aufrufen.
  trailingSlash: true,
  images: {
    formats: ["image/avif", "image/webp"],
    // Der automatische Bild-Optimierer läuft nur auf einem Node.js-Server
    // (Endpunkt "/_next/image") – bei statischem Export nicht verfügbar,
    // next/image liefert die Originalbilder dann unverändert aus.
    unoptimized: true,
  },
};

export default nextConfig;
