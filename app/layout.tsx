import Link from "next/link";
import "./globals.css";
import localFont from "next/font/local";
import Image from "next/image";
import { Analytics } from "@/components/analytics";

const novela = localFont({
  src: [
    {
      path: "../public/fonts/novela/novela-displayregular-webfont.ttf",
      weight: "100",
    },
    {
      path: "../public/fonts/novela/novela-regular-webfont.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/novela/novela-semibold-webfont.ttf",
      weight: "500",
    },
  ],
  variable: "--font-novela",
});

const helvetica = localFont({
  src: [
    {
      path: "../public/fonts/helvetica/HelveticaNeue-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/helvetica/HelveticaNeue-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/helvetica/HelveticaNeue-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/helvetica/HelveticaNeue-Italic.ttf",
      style: "italic",
      weight: "400",
    },
    {
      path: "../public/fonts/helvetica/HelveticaNeue-MediumItalic.ttf",
      style: "italic",
      weight: "500",
    },
    {
      path: "../public/fonts/helvetica/HelveticaNeue-BoldItalic.ttf",
      style: "italic",
      weight: "700",
    },
  ],
  variable: "--font-helvetica",
});

const bricolage = localFont({
  src: [
    {
      path: "../public/fonts/bricolage/BricolageGrotesque-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/bricolage/BricolageGrotesque-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/bricolage/BricolageGrotesque-Bold.ttf",
      weight: "700",
    },
  ],
  variable: "--font-bricolage",
});

export const metadata = {
  title: "Christian Varisco | Fractional CTO | CTO as a Service | Italy",
  description:
    "Hi, I'm Christian Varisco, your go-to Fractional CTO. Together, we'll turn your groundbreaking ideas into market-ready successes.",
};

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="en">
      <body
        className={`antialiased bg-black text-zinc-50 ${helvetica.variable}  ${bricolage.variable} ${novela.variable} font-sans`}
      >
        <div className="flex flex-col h-screen">
          <header className="px-6 sm:px-12 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center h-11 space-x-2">
                <Image
                  src="/images/Logo.svg"
                  alt="my-logo"
                  width={60}
                  height={60}
                />
              </div>
              <nav className="hidden sm:flex items-center text-sm space-x-4 sm:space-x-10">
                <Link
                  className="text-lg  leading-6 hover:underline"
                  href="/newsletter"
                >
                  About
                </Link>
                <Link
                  className="text-lg  leading-6 hover:underline"
                  href="/newsletter"
                >
                  Services
                </Link>
                <Link
                  className="text-lg  leading-6 hover:underline"
                  href="/newsletter"
                >
                  Testimonials
                </Link>
                <Link
                  className="text-lg  leading-6 hover:underline"
                  href="/newsletter"
                >
                  FAQ
                </Link>
              </nav>
              <a
                className="bg-black text-white py-2 px-4 sm:py-4 sm:px-6 rounded-full cursor-pointer min-w-[100px] text-center border-white border-2"
                href="mailto:info@christianvarisco.com"
                target="_blank"
              >
                Get in touch
              </a>
            </div>
          </header>

          <main className="mx-auto grow">{children}</main>
          <footer className="w-full bg-lime rounded-t-full grid grid-cols-1 sm:grid-cols-2 gap-6 px-7 py-7">
            <span className="text-2xl text-black font-serif font-semibold">
              © 2024 Christian Varisco
            </span>
            <a href="mailto:info@christianvarisco.com" className="">
              Contact me
            </a>
          </footer>
        </div>
        <Analytics />
      </body>
    </html>
  );
}
