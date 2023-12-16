import Image from "next/image";

export default function Home() {
  return (
    <div className="mx-auto lg:px-8 mt-10 space-y-16 max-w-2xl lg:max-w-7xl">
      <section className="relative isolate px-6 py-14 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl font-bold leading-10 tracking-tight sm:text-6xl">
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
            <a
              className="bg-lime text-black font-bold py-1 px-2 md:py-2 md:px-4 rounded-xl cursor-pointer min-w-[100px] text-center"
              href="https://cal.com/christian-varisco/discovery-call"
              target="_blank"
            >
              Book a call
            </a>
            <a
              href="mailto:info@christianvarisco.com"
              className="text-sm font-semibold leading-6 "
            >
              Contact me <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>
      </section>
      <section className="py-4">
        <h2 className="mb-12 text-2xl md:text-3xl font-bold">
          How can I help your Startup?
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-12">
          <div className="bg-[#1e1e1e] p-8 rounded-2xl">
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
          <div className="bg-[#1e1e1e] p-8 rounded-2xl">
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
          <div className="bg-[#1e1e1e] p-8 rounded-2xl">
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
            <Image
              src="/images/finleap.svg"
              alt="finleap-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/igenius.svg"
              alt="igenius-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/nodus.svg"
              alt="nodus-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/qwist.svg"
              alt="qwist.logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/BeyondMoney.svg"
              alt="BeyondMoney-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/zerocento.svg"
              alt="zerocento-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/liquinvex.svg"
              alt="liquinvex-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/wedelay.svg"
              alt="wedelay-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/banca-aidexa.svg"
              alt="banca-aidexa-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/Flashkey.svg"
              alt="flashkey-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/lendbox.svg"
              alt="lendbox-logo"
              fill
              objectFit="contain"
            />
          </div>
          <div className="relative w-1/2 md:w-1/4 mb-2 h-[120px]">
            <Image
              src="/images/lexroom.svg"
              alt="lexroom-logo"
              fill
              objectFit="contain"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
