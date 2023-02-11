// The global "root" layout
// Replaces _app.tsx in Next.js 12

// Global styles
import "@fontsource/dosis/700.css";
import "@fontsource/public-sans/400.css";
import "@fontsource/public-sans/600.css";

// Global providers
import GeistProvider from "../components/design/GeistProvider";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      {/* <head /> contains the nearest parent head.tsx. https://beta.nextjs.org/docs/api-reference/file-conventions/head */}
      <head />

      <GeistProvider>
        <body>{children}</body>
      </GeistProvider>
    </html>
  );
}
