// The global <head>
// Replaces _document.tsx in Next.js 12

export default function Head() {
  return (
    <>
      <title>Open-source at Hikium</title>
      <meta property="og:title" content="Open-source at Hikium" />
      <meta name="description" content="At Hikium, we love open-source." />
      <meta
        property="og:description"
        content="At Hikium, we love open-source"
      />
    </>
  );
}
