"use client";

import LogoCarousel from "@/components/LogoCarousel";
import { useIsVisible } from "@/lib/useIsVisible";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Accordion from "@/components/Accordion";
import StartupCarousel from "@/components/Carousel";
import { cn } from "@/lib/utils";

const sectionClassName =
  "flex flex-col justify-center items-center container mx-auto sm:min-h-[100vh] py-20  px-6 sm:px-10";

export default function Home() {
  const ref1 = useRef<HTMLDivElement>(null);
  const isVisible1 = useIsVisible(ref1);

  const ref2 = useRef<HTMLDivElement>(null);
  const isVisible2 = useIsVisible(ref2);

  const ref3 = useRef<HTMLDivElement>(null);
  const isVisible3 = useIsVisible(ref3);

  return (
    <>
      <section id="hero" className="flex flex-col justify-between">
        <div className="text-left flex flex-col justify-center h-full px-6 sm:px-10">
          <h1 className="text-4xl sm:text-7xl sm:leading-hero font-serif font-semibold">
            Avoid expensive mistakes.
            <br />
            Let&apos;s <span className="text-lime">
              build your startup
            </span>{" "}
            together.
          </h1>
          <p className="mt-8 sm:mt-10 text-xl sm:text-2xl text-white">
            Hi, I&apos;m <strong>Christian Varisco</strong>, your go-to
            Fractional CTO 🇮🇹.
            <br /> Together, we&apos;ll turn your groundbreaking ideas into
            market-ready successes.
          </p>
          <div className="mt-6 sm:mt-8 flex">
            <a
              className="bg-lime py-4 px-6 sm:px-10 sm:py-4 text-black text-xl rounded-full font-serif font-semibold cursor-pointer flex gap-4"
              href="https://cal.com/christian-varisco/discovery-call"
              target="_blank"
            >
              Book a FREE call{" "}
              <Image
                src="/images/arrow-black.svg"
                width={30}
                height={14}
                alt={"arrow"}
                className="color-black"
              />
            </a>
          </div>
        </div>
        <div className="w-full">
          <LogoCarousel />
        </div>
      </section>
      <section
        id="services"
        className={cn(sectionClassName, "space-y-12", "sm:space-y-20")}
      >
        <h2 className="text-3xl sm:text-4xl self-start">
          Is your{" "}
          <span className=" font-semibold">
            startup&apos;s product development on the right track?
          </span>
        </h2>
        <div
          ref={ref1}
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 transition-opacity ease-in duration-700 ${
            isVisible1 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div>
            <div className="w-[90%] border-2 border-[#1a1a1a] rounded-xl -mb-4">
              <h3 className="text-xl sm:text-2xl text-lime p-8 sm:p-10 font-semibold">
                Are you navigating without a map?
              </h3>
            </div>
            <div className="w-full bg-[#111111] p-8 rounded-xl sm:min-h-[190px]">
              <p className="text-lg sm:text-xl">
                How often do you find yourself chasing innovation without a
                clear direction, leading to wasted resources and missed
                opportunities?
              </p>
            </div>
          </div>
          <div>
            <div className="w-[90%] border-2 border-[#1a1a1a] rounded-xl -mb-4">
              <h3 className="text-xl sm:text-2xl text-lime p-8 sm:p-10 font-semibold">
                Are your processes holding you back?
              </h3>
            </div>
            <div className="w-full bg-[#111111] p-8 rounded-xl sm:min-h-[190px]">
              <p className="text-lg sm:text-xl">
                Do you lack a cohesive plan, causing your development to lag and
                pushing your market entry further away?
              </p>
            </div>
          </div>
          <div>
            <div className="w-[90%] border-2 border-[#1a1a1a] rounded-xl -mb-4">
              <h3 className="text-xl sm:text-2xl text-lime p-8 sm:p-10 font-semibold">
                Do you have the right team in place?
              </h3>
            </div>
            <div className="w-full bg-[#111111] p-8 rounded-xl sm:min-h-[190px]">
              <p className="text-lg sm:text-xl">
                Are you struggling to find and integrate the tech talent you
                need, slowing your progress and affecting your product&apos;s
                potential?
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className={cn(sectionClassName, "space-y-12", "sm:space-y-24")}>
        <h2 className="text-3xl sm:text-4xl font-regular self-start mb-6 sm:mb-8">
          <span className="font-semibold">
            Turn obstacles into opportunities
          </span>{" "}
          with an expert who understands your journey. Team up with me to:
        </h2>
        <div
          ref={ref2}
          className={`grid grid-cols-1 sm:grid-cols-3 gap-8 space-y-10 sm:space-y-0 transition-opacity ease-in duration-700 ${
            isVisible2 ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex flex-col -mb-4 space-y-6">
            <div className="w-full min-h-[200px] relative">
              <Image src="/images/Isometric.svg" fill alt="service-1" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold pt-8">
              Launch First Product
            </h3>
            <p className="text-lg sm:text-xl">
              How often do you find yourself chasing innovation without a clear
              direction, leading to wasted resources and missed opportunities?
            </p>
          </div>
          <div className="flex flex-col -mb-4 space-y-6">
            <div className="w-full min-h-[200px] relative">
              <Image src="/images/Isometric1.svg" fill alt="service-2" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold pt-8">
              Navigate Technical Strategy
            </h3>
            <p className="text-lg sm:text-xl">
              Navigate the complexities of technology, architecture, and
              development processes with expert guidance.
            </p>
          </div>
          <div className="flex flex-col -mb-4 space-y-6">
            <div className="w-full min-h-[200px] relative">
              <Image src="/images/Isometric2.svg" fill alt="service-3" />
            </div>
            <h3 className="text-xl sm:text-2xl font-semibold pt-8">
              Build Dream Team
            </h3>
            <p className="text-lg sm:text-xl">
              Identify and integrate the right technical skills, streamlining
              your path to innovation and growth.
            </p>
          </div>
        </div>
        <div className="flex">
          <a
            className="bg-black py-4 px-6 sm:px-10 sm:py-4 border-white border text-white text-xl rounded-full font-serif cursor-pointer flex gap-3"
            href="https://cal.com/christian-varisco/discovery-call"
            target="_blank"
          >
            Let&apos;s get to work{" "}
            <Image
              src="/images/arrow.svg"
              width={30}
              height={14}
              alt={"arrow"}
            />
          </a>
        </div>
      </section>
      <section
        id="testimonials"
        className={cn(sectionClassName, "space-y-6 sm:space-y-12")}
      >
        <h2 className="text-3xl sm:text-4xl font-regular self-start mb-6 sm:mb-8">
          Work with me to achieve <span className="font-semibold">results</span>
        </h2>
        <StartupCarousel />
      </section>
      <section
        className={`flex justify-center items-center container mx-auto space-y-12 sm:space-y-0 sm:min-h-[80vh] py-20 sm:py-0 px-6 sm:px-10`}
      >
        <div className="sm:flex space-y-12 sm:space-y-0">
          <div>
            <h2 className="text-3xl sm:text-4xl self-start">
              3 steps to{" "}
              <span className=" font-semibold">transform your startup</span>
            </h2>
          </div>
          <div
            className={`flex flex-col gap-8 transition-opacity ease-in duration-700`}
          >
            <div className="flex">
              <div className="border-2 border-[#1a1a1a] rounded-[32px] rounded-r-lg px-6 pt-6 border-r-0 h-24 min-w-[130px] -mr-8">
                <div className="bg-lime rounded-full w-12 h-12 flex justify-center items-center">
                  <span className="text-2xl sm:text-3xl text-black font-serif font-semibold">
                    1
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#111111] p-8 rounded-[32px] space-y-6 sm:min-h-[170px]">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Book a call
                </h3>
                <p className="text-lg sm:text-xl">
                  Schedule a free discovery session with me through my link,
                  fitting your timetable.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="border-2 border-[#1a1a1a] rounded-[32px] rounded-r-lg px-6 pt-6 border-r-0 h-24 min-w-[130px] -mr-8">
                <div className="bg-lime rounded-full w-12 h-12 flex justify-center items-center">
                  <span className="text-2xl sm:text-3xl text-black font-serif font-semibold">
                    2
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#111111] p-8 rounded-[32px] space-y-6 sm:min-h-[170px]">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Discuss Goals
                </h3>
                <p className="text-lg sm:text-xl">
                  Let&apos;s Talk about your startup&apos;s and technical
                  challenges with me during the call.
                </p>
              </div>
            </div>
            <div className="flex">
              <div className="border-2 border-[#1a1a1a] rounded-[32px] rounded-r-lg px-6 pt-6 border-r-0 h-24 min-w-[130px] -mr-8">
                <div className="bg-lime rounded-full w-12 h-12 flex justify-center items-center">
                  <span className="text-2xl sm:text-3xl text-black font-serif font-semibold">
                    3
                  </span>
                </div>
              </div>
              <div className="w-full bg-[#111111] p-8 rounded-[32px] space-y-6 sm:min-h-[170px]">
                <h3 className="text-xl sm:text-2xl font-semibold">
                  Execute & Launch
                </h3>
                <p className="text-lg sm:text-xl">
                  Receive a tailor made offer to move your startup forward
                  effectively.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section
        id="about"
        className={cn(sectionClassName, "space-y-12 sm:space-y-20 pb-4")}
      >
        <div
          className={`grid grid-cols-1 sm:grid-cols-5 gap-8 transition-opacity ease-in duration-700`}
        >
          <div className="sm:col-span-2 mx-auto rounded-xl relative">
            <Image
              src="/images/me.jpg"
              width={400}
              height={400}
              alt="me"
              className="rounded-xl"
            />
          </div>
          <div className="sm:col-span-3">
            <div className="w-[80%] sm:w-[70%] border-2 border-[#1a1a1a] rounded-xl -mb-4 px-6 py-8">
              <h2 className="text-3xl md:text-4xl self-start text-lime font-semibold">
                About me
              </h2>
            </div>
            <div className="w-full sm:w-[80%] bg-[#111111] p-8 rounded-xl space-y-6 md:min-h-[170px]">
              <p className="text-lg md:text-xl">
                Hi, I&apos;m Christian and I help{" "}
                <strong>startups through their tech challenges.</strong>
                <br />
                <br /> I am a passionate tech startup enthusiast with a{" "}
                <strong>decade of experience</strong> in the field. Over the
                years, I have had the privilege of working in various startups,
                both as a developer and as a manager/founder.
                <br />
                <br />I also had a significant role in a venture builder, where
                I was tasked with crafting the technical aspects of new
                startups. Throughout this ten-year journey, I&apos;ve honed my
                skills in building tech startups. <br />
                <br />
                The value I bring month by month is{" "}
                <strong>shielding you from expensive mistakes</strong> that can
                derail your startup. Together, we&apos;ll{" "}
                <strong>speed up your time to market</strong>, bringing your
                vision into the hands of your users. I&apos;ll{" "}
                <strong>onboard and grow your talent</strong> on the right path,
                nurturing their potential for long-term success.
                <br />
                <br />
                My expertise guarantees a{" "}
                <strong>rock-solid technical strategy</strong>, transforming
                your startup into a robust and competitive reality.
              </p>
            </div>
          </div>
        </div>
      </section>
      <section
        id="faq"
        className={`flex flex-col justify-center items-center container mx-auto space-y-8 pt-12 pb-24 px-6 sm:px-10`}
      >
        <h2 className="text-3xl sm:text-4xl font-semibold">
          Frequently asked questions
        </h2>
        <div>
          <Accordion title="What services does Christian offer to startups?">
            I solve problems in three key areas: Product, Tech, and Team. For
            Product, I help you define which features need to be developed and
            when. For Tech, I lead on what technology to use, how to implement
            it, and when to roll it out. For Team, I assist in finding and
            leading the best people to work in your startup, whether they are
            freelancers or part of an internally hired team.
          </Accordion>
          <Accordion title="How many startup do you work with in parallel?">
            I work with a maximum of three startups in parallel. This allows me
            to focus on delivering quality results for each project.
          </Accordion>
          <Accordion title="Do you write code too?">
            If needed, yes. However, my primary goal is to leverage my
            experience to guide you on how to build a successful startup, rather
            than just writing software.
          </Accordion>
          <Accordion title="Do you have a team?">
            Yes, I have a network of collaborators that includes developers,
            designers, product managers, and various other professionals. They
            can step in to assist both me and your startup whenever necessary.
          </Accordion>
          <Accordion title="What stage startups do you typically work with?">
            I typically work with early-stage startups that have at least a $20k
            budget to invest in technology (not for me, but for the rest of the
            team). These startups may or may not have a CTO to collaborate with,
            and they can either have an internal team or rely on my network of
            professionals.
          </Accordion>
          <Accordion title="What is the typical duration of your engagements with startups?">
            Generally, my engagements last between 3 to 9 months to ensure we
            build a solid foundation in terms of product, technology, and team.
            However, if needed, I can also provide advisory services for as
            little as one hour a week, with engagements lasting just one month.
          </Accordion>
          <Accordion title=" How do you handle confidentiality and data security?">
            Before we start working together, it&apos;s up to you. I can sign an
            NDA and term sheet if needed (and if they make sense) to ensure your
            confidentiality and data security.
          </Accordion>
        </div>
      </section>
    </>
  );
}
