import ConvertkitSignupForm from "@/components/convertKitSignupForm";
import Image from "next/image";

export default function Newsletter() {
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
          <div className="mt-10 flex items-center justify-center gap-x-6">
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
    </div>
  );
}
