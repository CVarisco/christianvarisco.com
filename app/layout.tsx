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
          <header className="px-6 md:px-12 py-8">
            <div className="flex items-center justify-between">
              <div className="flex items-center h-11 space-x-2">
                <Image
                  src="/images/Logo.svg"
                  alt="my-logo"
                  width={60}
                  height={60}
                />
              </div>
              <nav className="flex items-center text-sm space-x-4 md:space-x-10">
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
                className="bg-black text-white py-4 px-6 rounded-full cursor-pointer min-w-[100px] text-center border-white border-2"
                // href="https://cal.com/christian-varisco/discovery-call"
                href="mailto:info@christianvarisco.com"
                target="_blank"
              >
                Get in touch
              </a>
            </div>
          </header>

          <main className="mx-auto grow">{children}</main>
          <footer className="w-full flex gap-6 justify-center py-4 mt-10 text-sm font-semibold leading-6 text-zinc-400">
            <p className="">© 2024 Christian Varisco</p>
            <a href="mailto:info@christianvarisco.com" className="">
              Contact me
            </a>
            <a
              className="group -m-1 p-1"
              aria-label="Follow on GitHub"
              href="https://github.com/CVarisco"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M12 2C6.475 2 2 6.588 2 12.253c0 4.537 2.862 8.369 6.838 9.727.5.09.687-.218.687-.487 0-.243-.013-1.05-.013-1.91C7 20.059 6.35 18.957 6.15 18.38c-.113-.295-.6-1.205-1.025-1.448-.35-.192-.85-.667-.013-.68.788-.012 1.35.744 1.538 1.051.9 1.551 2.338 1.116 2.912.846.088-.666.35-1.115.638-1.371-2.225-.256-4.55-1.14-4.55-5.062 0-1.115.387-2.038 1.025-2.756-.1-.256-.45-1.307.1-2.717 0 0 .837-.269 2.75 1.051.8-.23 1.65-.346 2.5-.346.85 0 1.7.115 2.5.346 1.912-1.333 2.75-1.05 2.75-1.05.55 1.409.2 2.46.1 2.716.637.718 1.025 1.628 1.025 2.756 0 3.934-2.337 4.806-4.562 5.062.362.32.675.936.675 1.897 0 1.371-.013 2.473-.013 2.82 0 .268.188.589.688.486a10.039 10.039 0 0 0 4.932-3.74A10.447 10.447 0 0 0 22 12.253C22 6.588 17.525 2 12 2Z"
                ></path>
              </svg>
            </a>
            <a
              className="group -m-1 p-1"
              aria-label="Follow on LinkedIn"
              href="https://www.linkedin.com/in/christianvarisco/"
            >
              <svg
                viewBox="0 0 24 24"
                aria-hidden="true"
                className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300"
              >
                <path d="M18.335 18.339H15.67v-4.177c0-.996-.02-2.278-1.39-2.278-1.389 0-1.601 1.084-1.601 2.205v4.25h-2.666V9.75h2.56v1.17h.035c.358-.674 1.228-1.387 2.528-1.387 2.7 0 3.2 1.778 3.2 4.091v4.715zM7.003 8.575a1.546 1.546 0 01-1.548-1.549 1.548 1.548 0 111.547 1.549zm1.336 9.764H5.666V9.75H8.34v8.589zM19.67 3H4.329C3.593 3 3 3.58 3 4.297v15.406C3 20.42 3.594 21 4.328 21h15.338C20.4 21 21 20.42 21 19.703V4.297C21 3.58 20.4 3 19.666 3h.003z"></path>
              </svg>
            </a>
          </footer>
        </div>

        <Analytics />
      </body>
    </html>
  );
}
