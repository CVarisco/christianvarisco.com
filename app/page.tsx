"use client";

import ConvertkitSignupForm from "@/components/convertKitSignupForm";
import { useIsVisible } from "@/lib/useIsVisible";
import Image from "next/image";
import Script from "next/script";
import { useRef } from "react";

export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  return (
    <div className="mx-auto lg:px-8 mt-10 space-y-16">
      <section className="flex flex-col justify-center items-center isolate lg:px-8 min-h-[70vh]">
        <div className="text-center">
          <h1 className="text-4xl sm:text-7xl sm:leading-hero font-serif">
            Avoid expensive mistakes.
            <br />
            Let&apos;s <span className="text-lime">
              build your startup
            </span>{" "}
            together.
          </h1>
          <p className="mt-6 text-xl text-zinc-400">
            Are you looking for a{" "}
            <span className="text-lime">Fractional CTO</span> with more than{" "}
            <span className="text-lime">10 years of experience</span> in
            building startups? Here I am.
          </p>
          <div className="mt-10 flex flex-col space-y-2 items-center justify-center gap-x-6">
            <span className="text-sm px-4 text-gray-500">
              Build-in-public Fractional CTO business, how to build startups,
              teams and digital products (Italian language only 🇮🇹)
            </span>
            <ConvertkitSignupForm />
          </div>
        </div>
      </section>
      <section className="flex flex-col items-center min-h-screen space-y-10 pb-4 md:pb-12">
        <div className="relative items-center px-4">
          <Image
            className="rounded-full border-4 border-lime"
            src="/images/me.jpg"
            alt="me"
            width={200}
            height={90}
          />
        </div>
        <div className="max-w-2xl px-4 space-y-12">
          <h2 className="text-3xl md:text-5xl font-semibold">
            Hi, I&apos;m Christian and I help startups through their tech
            challenges.
          </h2>
          <p className="mt-4 text-md md:text-xl text-blueGray-500 leading-8 md:leading-8">
            I am a passionate tech startup enthusiast with a decade of
            experience in the field. Over the years, I have had the privilege of
            working in various startups, both{" "}
            <span className="font-bold">
              as a developer and as a manager/founder.
            </span>
            <br />
            <br /> I also had a significant role in a{" "}
            <span className="font-bold">venture builder</span>, where I was
            tasked with crafting the technical aspects of new startups.
            Throughout this ten-year journey, I&apos;ve honed my skills in
            building tech startups.
            <br />
            <br /> <span className="font-bold">The value I bring</span> month by
            month is
            <span className="text-lime font-medium">
              {" "}
              shielding you from expensive mistakes
            </span>{" "}
            that can derail your startup. Together, we&apos;ll{" "}
            <span className="text-lime font-medium">
              speed up your time to market
            </span>
            , bringing your vision into the hands of your users.{" "}
            <span className="text-lime font-medium">
              I&apos;ll onboard and grow your talent
            </span>{" "}
            on the right path, nurturing their potential for long-term success.{" "}
            <br />
            <br />
            My expertise guarantees a{" "}
            <span className="text-lime font-medium">
              rock-solid technical strategy
            </span>
            , transforming your startup into a robust and competitive reality.
          </p>
        </div>
      </section>
      <section className="grid grid-cols-1 md:grid-cols-2 sticky py-8 md:py-12">
        <div>
          <h2 className="mt-10 mb-8 sm:mb-0 text-3xl md:text-5xl font-bold sticky top-10">
            How can I help your Startup?
          </h2>
        </div>
        <div className="flex space-y-4 flex-col gap-12 relative">
          <div
            ref={ref1}
            className={`bg-[#1e1e1e] p-8 rounded-2xl transition-opacity ease-in duration-700 ${
              isVisible1 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="mb-5 text-xl font-bold">
              Building your first product version
            </h3>
            <p className="leading-8 text-zinc-300">
              As your dedicated CTO, I specialize in transforming your
              groundbreaking ideas into tangible products. I&apos;ll work
              closely with your startup to develop a robust and scalable initial
              product version that sets the foundation for your success.
            </p>
          </div>
          <div
            ref={ref2}
            className={`bg-[#1e1e1e] p-8 rounded-2xl transition-opacity ease-in duration-700 ${
              isVisible2 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="mb-5 text-xl font-bold">
              Guiding with technical strategy and hiring the perfect tech team
            </h3>
            <p className="leading-8 text-zinc-300">
              Crafting a strong technical strategy is crucial for startups.
              I&apos;ll help you make informed decisions about technologies,
              architecture, and development processes, while also guiding you
              through the process of recruiting, evaluating, and onboarding the
              right technical talent.
            </p>
          </div>
          <div
            ref={ref3}
            className={`bg-[#1e1e1e] p-8 rounded-2xl transition-opacity ease-in duration-700 ${
              isVisible3 ? "opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="mb-5 text-xl font-bold">
              Helping to scale your product and growing your user base
            </h3>
            <p className="leading-8 text-zinc-300">
              Scaling can be challenging, but I&apos;ve got you covered.
              I&apos;ll devise a scaling plan that ensures your product can
              handle increased demand, while also optimizing for performance,
              security, and cost-effectiveness to support your startup&apos;s
              growth trajectory.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full py-8">
        <h2 className="mb-12 text-3xl font-bold">Startups I contribute to</h2>
        <div className="flex flex-wrap space-y-3">
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image src="/images/finleap.svg" alt="finleap-logo" fill />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image src="/images/igenius.svg" alt="igenius-logo" fill />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image src="/images/nodus.svg" alt="nodus-logo" fill />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image src="/images/qwist.svg" alt="qwist.logo" fill />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image src="/images/BeyondMoney.svg" alt="BeyondMoney-logo" fill />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image src="/images/zerocento.svg" alt="zerocento-logo" fill />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image src="/images/liquinvex.svg" alt="liquinvex-logo" fill />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image src="/images/wedelay.svg" alt="wedelay-logo" fill />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/banca-aidexa.svg"
              alt="banca-aidexa-logo"
              fill
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image src="/images/Flashkey.svg" alt="flashkey-logo" fill />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image src="/images/lendbox.svg" alt="lendbox-logo" fill />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image src="/images/lexroom.svg" alt="lexroom-logo" fill />
          </div>
        </div>
      </section>
    </div>
  );
}
