import type { Metadata } from "next";
import "./globals.css";
import { Footer, Header } from "./components/Common";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookF,
  faTelegramPlane,
  faTiktok,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export const metadata: Metadata = {
  title: "iGlobal Visa Consultancy | Your Trusted Visa Partner",
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
        <div className="left-0 top-1/2 transform -translate-y-1/2 z-50 bg-[#090610dc] px-1 py-2 rounded-sm hidden md:block fixed">
          <ul className="space-y-4 px-1">
            <li>
              <a
                href="https://facebook.com/IGlobalVisa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9eaf2b] hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faFacebookF} size="lg" />
              </a>
            </li>
            <li>
              <a
                href="https://www.tiktok.com/@iglobalvisa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9eaf2b] hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faTiktok} size="lg" />
              </a>
            </li>
            <li>
              <a
                href="https://chat.whatsapp.com/C5DM6uw0m29ABO3zAZjLjR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9eaf2b] hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faWhatsapp} size="lg" />
              </a>
            </li>
            <li>
              <a
                href="https://t.me/Iglobal_visa"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9eaf2b] hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faTelegramPlane} size="lg" />
              </a>
            </li>
            <li>
              <a
                href="mailto:study@iglobalvisa.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#9eaf2b] hover:text-blue-500"
              >
                <FontAwesomeIcon icon={faEnvelope} size="lg" />
              </a>
            </li>
          </ul>
        </div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
