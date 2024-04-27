"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import {
  Carousel,
  type CarouselApi,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";

const STARTUPS = [
  {
    name: "talentware",
    image: "/images/talentware.svg",
    title: (
      <span className="text-2xl font-serif">
        Empower your talent, <strong>elevate your business</strong>
      </span>
    ),
    description: (
      <p className="text-xl">
        Talentware is the talent management platform designed to help businesses
        effectively engage, develop, and retain talent through a skill-based
        approach
      </p>
    ),
    achievements: [
      {
        image: "/images/hiring.svg",
        description: (
          <p className="text-xl">
            Assembled a robust team,{" "}
            <strong className="text-lime">
              ensuring agility and innovation
            </strong>
            .
          </p>
        ),
      },
      {
        image: "/images/money.svg",
        description: (
          <p className="text-xl">
            In just three months, we&apos;ve already got customers signing up
            and managed to bag{" "}
            <strong className="text-lime">€800K in pre-seed</strong> funds.
          </p>
        ),
      },
      {
        image: "/images/grow.svg",
        description: (
          <p className="text-xl">
            Formulated a strategic product and{" "}
            <strong className="text-lime">technical roadmap</strong>, targeting
            short-to-medium-term goals.
          </p>
        ),
      },
    ],
  },
  {
    name: "liquinvex",
    image: "/images/liquinvex.svg",
    title: (
      <span className="text-2xl">
        Making wine investing <strong>easy for everyone</strong>
      </span>
    ),
    description: (
      <p className="text-lg">
        Liquinvex is a mobile app that democratizes the investment in fine
        wines, offering users a virtual cellar to buy, store, and manage wine
        investments without the hassles of physical storage
      </p>
    ),
    achievements: [
      {
        image: "/images/hiring.svg",
        description: (
          <p className="text-lg sm:text-xl">
            Built a top-notch team in{" "}
            <strong className="text-lime">just a week.</strong>
          </p>
        ),
      },
      {
        image: "/images/money.svg",
        description: (
          <p className="text-lg sm:text-xl">
            Liquinvex quickly got into{" "}
            <strong className="text-lime">
              Nana Bianca accelerator program
            </strong>
            , showing how fast they&apos;re growing!
          </p>
        ),
      },

      {
        image: "/images/grow.svg",
        description: (
          <p className="text-lg sm:text-xl">
            New app features on a weekly basis and the user base saw a{" "}
            <strong className="text-lime">100% increase</strong>
          </p>
        ),
      },
    ],
  },
  {
    name: "lexroom",
    image: "/images/lexroom.svg",
    title: (
      <span className="text-2xl">
        A startup that <strong>uses AI to simplify legal tasks</strong>
      </span>
    ),
    description: (
      <p className="text-lg">
        Liquinvex is a mobile app that democratizes the investment in fine
        wines, offering users a virtual cellar to buy, store, and manage wine
        investments without the hassles of physical storage
      </p>
    ),
    achievements: [
      {
        image: "/images/hiring.svg",
        description: (
          <p className="text-lg sm:text-xl">
            Assembled a{" "}
            <strong className="text-lime">talented team quickly</strong>,
            setting the stage for rapid progress.
          </p>
        ),
      },
      {
        image: "/images/money.svg",
        description: (
          <p className="text-lg sm:text-xl">
            Significant early achievements, including a successful{" "}
            <strong className="text-lime">€500k pre-seed funding round</strong>{" "}
            in January 2024.
          </p>
        ),
      },

      {
        image: "/images/grow.svg",
        description: (
          <p className="text-lg sm:text-xl">
            Led the development of the MVP, preparing for{" "}
            <strong className="text-lime">future growth.</strong>
          </p>
        ),
      },
    ],
  },
];

export default function StartupCarousel() {
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });
  }, [api]);

  return (
    <>
      <Carousel setApi={setApi}>
        <CarouselContent className="max-w-[90vw] sm:max-w-none">
          {STARTUPS.map((startup) => (
            <CarouselItem key={startup.name}>
              <div
                className={`flex flex-col bg-[#111111] p-12 rounded-2xl space-y-28`}
              >
                <div className="grid sm:grid-cols-2 space-y-12 sm:space-y-0">
                  <div className="flex flex-col space-y-7">
                    <Image
                      src={startup.image}
                      width={240}
                      height={120}
                      alt={"talentware"}
                    />
                    {startup.title}
                  </div>
                  <div>{startup.description}</div>
                </div>
                <div className="grid sm:grid-cols-3 gap-12 space-y-12 sm:space-y-0">
                  {startup.achievements.map((achievement) => (
                    <div
                      className="flex flex-col space-y-6"
                      key={`${startup.name}${achievement.image}`}
                    >
                      <div className="w-full min-h-[140px] relative">
                        <Image
                          src={achievement.image}
                          fill
                          alt={`${startup.name}${achievement.image}`}
                        />
                      </div>
                      {achievement.description}
                    </div>
                  ))}
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

      <div className="flex gap-2 w-full justify-center items-center">
        {new Array(count).fill("").map((_, i) => (
          <span
            key={i}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              current === i + 1 ? "w-12 bg-lime" : "w-8 bg-white/50"
            }`}
            onClick={() => api?.scrollTo(i)}
          />
        ))}
      </div>
    </>
  );
}
