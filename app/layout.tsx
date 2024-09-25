import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "./components/Common";

export const metadata: Metadata = {
  title: "IGlobal Visa Consultancy | Your Trusted Visa Partner",
  description:
    "Providing top-notch immigration and educational visa consultancy services worldwide. Let us help you achieve your dreams with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        {/* Additional Meta Tags */}
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* <meta name="description" content={metadata.description} /> */}
        {/* <meta property="og:title" content={metadata.title} /> */}
        {/* <meta property="og:description" content={metadata.description} /> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://iglobalvisa.com" />
        <meta property="og:image" content="/favicon.ico" />
        <meta name="twitter:card" content="summary_large_image" />
        {/* <meta name="twitter:title" content={metadata.title} /> */}
        {/* <meta name="twitter:description" content={metadata.description} /> */}
        <meta name="twitter:image" content="/path-to-your-image.jpg" />
        <link
          href="https://fonts.googleapis.com/css2?family=Lobster&family=Montserrat:wght@400;700&family=Merriweather:wght@400;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Lora:wght@400;700&family=Oswald:wght@400;700&family=Raleway:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
