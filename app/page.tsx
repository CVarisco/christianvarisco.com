import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="mx-auto lg:px-8 mt-10 space-y-18 max-w-2xl lg:max-w-5xl">
      <section>
        <h1 className="hidden md:block text-5xl font-bold sm:text-6xl">
          <span className="text-lime">CTO</span> as a Service
          <span className="text-lime"> for your Startup</span>
        </h1>
        <h1 className="md:hidden text-5xl font-bold sm:text-6xl">
          <span className="text-lime">CTO</span> as a Service<br></br>
          <span className="text-lime"> for your Startup</span>
        </h1>
        <div>
          <p className="my-6 text-zinc-400">
            Having worked for 10 years in the startup environment, I have
            developed a deep understanding of what it takes to build successful
            software products.
          </p>
        </div>
      </section>
      <section>
        <h2 className="mb-5 text-3xl font-bold">
          Ok but, how can I help your Startup?
        </h2>
        <div className="grid md:grid-cols-2 grid-cols-1 gap-8">
          <div>
            <h3 className="mb-5 text-2xl text-zinc-500 font-bold">
              Do you need to build your first product version?
            </h3>
            <p>
              As your dedicated CTO, I specialize in transforming your
              groundbreaking ideas into tangible products. I&apos;ll work
              closely with your startup to develop a robust and scalable initial
              product version that sets the foundation for your success.
            </p>
          </div>
          <div>
            <h3 className="mb-5 text-2xl text-zinc-500 font-bold">
              Struggling with technical strategy and assembling the perfect tech
              team?
            </h3>
            <p>
              Crafting a strong technical strategy is crucial for startups.
              I&apos;ll help you make informed decisions about technologies,
              architecture, and development processes, while also guiding you
              through the process of recruiting, evaluating, and onboarding the
              right technical talent.
            </p>
          </div>
          <div>
            <h3 className="mb-5 text-2xl text-zinc-500 font-bold">
              Ready to scale your product and grow your user base?
            </h3>
            <p>
              Scaling can be challenging, but I&apos;ve got you covered.
              I&apos;ll devise a scaling plan that ensures your product can
              handle increased demand, while also optimizing for performance,
              security, and cost-effectiveness to support your startup&apos;s
              growth trajectory.
            </p>
          </div>
          <div>
            <h3 className="mb-5 text-2xl text-zinc-500 font-bold">
              Need a trusted technology partner to navigate challenges?
            </h3>
            <p>
              I&apos;m more than just an advisor; I&apos;m your dedicated
              technology partner. I&apos;ll be with you every step of the way,
              providing ongoing guidance, troubleshooting, and support to
              address any technical hurdles and keep your startup on the path to
              success.
            </p>
          </div>
        </div>
      </section>
      <section className="w-full">
        <h2 className="mb-5 text-3xl font-bold">Startups I contribute to</h2>
        <div className="flex flex-wrap space-y-3">
          <div className="relative w-1/4 mb-2 h-[100px]">
            <Image
              src="/images/finleap.svg"
              alt="finleap-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/4 mb-2 h-[100px]">
            <Image
              src="/images/igenius.svg"
              alt="igenius-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/4 mb-2 h-[100px]">
            <Image
              src="/images/nodus.svg"
              alt="nodus-logo"
              fill
              objectFit="contain"
            />
          </div>

          <div className="relative w-1/4 mb-2 h-[100px]">
            <Image
              src="/images/qwist.svg"
              alt="qwist.logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/4 mb-2 invert-colors h-[100px]">
            <Image
              src="/images/BeyondMoney.svg"
              alt="BeyondMoney-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/4 mb-2 h-[100px]">
            <Image
              src="/images/zerocento.svg"
              alt="zerocento-logo"
              fill
              objectFit="contain"
            />
          </div>

          <div className="relative w-1/4 mb-2 h-[100px]">
            <Image
              src="/images/lendbox.svg"
              alt="lendbox-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/4 mb-2 h-[100px]">
            <Image
              src="/images/wedelay.svg"
              alt="wedelay-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/4 mb-2 h-[100px]">
            <Image
              src="/images/zebras.svg"
              alt="zebras-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/4 mb-2 h-[100px]">
            <Image
              src="/images/Flashkey.svg"
              alt="flashkey-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/4 mb-2 h-[100px]">
            <Image
              src="/images/linsen.svg"
              alt="linsen-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/4 mb-2 h-[100px]">
            <Image
              src="/images/ypath.svg"
              alt="ypath-logo"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
