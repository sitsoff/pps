import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/sections/Hero";
import { Promise } from "@/components/sections/Promise";
import { OfficialTryouts } from "@/components/sections/OfficialTryouts";
import { Features } from "@/components/sections/Features";
import { Team } from "@/components/sections/Team";
import { Testimonials } from "@/components/sections/Testimonials";
import { Registration } from "@/components/sections/Registration";
import { FAQ } from "@/components/sections/FAQ";
import { landingPageData } from "@/data/landing-page";
import { Reveal } from "@/components/ui/Reveal";
import { FaPhone } from "react-icons/fa";

export default function Home() {
  const { cta, socials } = landingPageData.footer
  return (
    <div className="min-h-screen bg-white font-sans text-black antialiased">
      <Header />

      <main>
        <Hero />
        <Promise />
        <OfficialTryouts />
        <Features />
        <Team />
        <Testimonials />
        <Registration />
        <FAQ />


        <div className="relative min-w-screen">
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{ backgroundImage: `url(${cta.backgroundImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black to-black/70" />

          {/* Content */}
          <div className="relative text-white z-10 w-full mx-auto px-6 py-20 flex flex-col items-center gap-6 text-center">
            <Reveal direction="up" delay={0}>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight">{cta.title}</h2>
            </Reveal>
            <Reveal direction="up" delay={120}>
              <p className="text-zinc-300 text-base max-w-lg leading-relaxed">{cta.subtitle}</p>
            </Reveal>


            <div className="hidden lg:block absolute  left-24 top-1/2">
              <div className="  flex flex-col gap-2 w-full max-w-xl self-start mt-2">
                {cta.phones.map((p) => (
                  <div key={p.label} className="flex items-center gap-2 text-sm text-white">
                    <FaPhone className="w-3 h-3 text-white" />
                    <a href={`tel:${p.number.replace(/-/g, "")}`} className="hover:underline">
                      {p.label}: {p.number}
                    </a>
                  </div>
                ))}
              </div>

              <div className="flex gap-4 self-start">
                {socials.map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex mt-5 items-center justify-center hover:border-white transition-colors"
                  >
                    <Icon className="text-3xl  text-white" />
                  </a>
                ))}
              </div>
            </div>

            <Reveal direction="up" delay={240}>
              <a href="/pending" className="bg-red-600 hover:bg-red-700 transition-colors text-white font-semibold px-8 py-3 text-sm rounded-sm mt-2">
                {cta.ctaLabel}
              </a>
            </Reveal>
            <div className="flex flex-col sm:flex-row space-x-10 lg:hidden">
              <div className="  flex flex-col gap-2 w-full max-w-xl self-start mt-2">
                {cta.phones.map((p) => (
                  <div key={p.label} className="flex items-center gap-2 text-sm text-white">
                    <FaPhone className="w-3 h-3 text-white" />
                    <a href={`tel:${p.number.replace(/-/g, "")}`} className="hover:underline">
                      {p.label}: {p.number}
                    </a>
                  </div>
                ))}
              </div>
              <div className="flex gap-4 self-start">
                {socials.map(({ icon: Icon, href }, i) => (
                  <a
                    key={i}
                    href={href}
                    className="flex mt-5 items-center justify-center hover:border-white transition-colors"
                  >
                    <Icon className="text-3xl  text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

      </main>

    </div>
  );
}
