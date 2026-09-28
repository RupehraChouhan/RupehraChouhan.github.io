import Image from "next/image";
import { education, highlights, profile, skills } from "@/data/profile";
import { ContactForm } from "@/components/ContactForm";
import { Experience } from "@/components/Experience";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { SiteHeader } from "@/components/SiteHeader";

const container = "mx-auto max-w-[1440px] px-4 sm:px-8 lg:px-20";
const section = "scroll-mt-20 py-16 sm:py-[100px]";

const skillIcons: Record<string, string> = {
  "Front-End": "/icons/layout-grid.svg",
  "Web Platform": "/icons/chart-network.svg",
  "Build & Testing": "/icons/database.svg",
  Practices: "/icons/chart-network.svg",
};

const contactLinks = [
  { label: "email", value: profile.email, href: `mailto:${profile.email}`, icon: "/icons/mail.svg" },
  {
    label: "linkedin",
    value: profile.linkedin.replace("https://", ""),
    href: profile.linkedin,
    icon: "/icons/linkedin.svg",
    external: true,
  },
];

export default function Home() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-3 focus:z-20 focus:rounded focus:bg-ink focus:px-3 focus:py-2 focus:text-sm focus:text-white"
      >
        Skip to content
      </a>
      <SiteHeader />

      <main id="main" className="flex-1">
        <Hero />

        <section id="about" aria-labelledby="about-heading" className={`border-y border-line bg-surface ${section}`}>
          <div className={`${container} flex flex-col gap-8`}>
            <SectionHeading id="about-heading" eyebrow="Biography" title="Front-end architecture that moves the numbers" />
            <p className="text-base leading-[1.6] text-body">{profile.summary}</p>
            <dl className="grid gap-6 sm:grid-cols-3">
              {highlights.map((item) => (
                <div key={item.label} className="flex flex-col-reverse gap-2 rounded-lg border border-line bg-subtle p-6">
                  <dt className="text-[13px] text-muted">{item.label}</dt>
                  <dd className="font-display text-4xl font-bold text-ink">{item.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section id="skills" aria-labelledby="skills-heading" className={section}>
          <div className={`${container} flex flex-col gap-12`}>
            <SectionHeading
              id="skills-heading"
              eyebrow="Stack"
              title="Technical Toolkit"
              description="The tools and practices I use to ship accessible, fast, well-tested interfaces at scale."
              align="center"
            />
            <div className="grid gap-6 sm:grid-cols-2 xl:grid-cols-4">
              {skills.map((group) => (
                <div key={group.group} className="flex flex-col gap-5 rounded-lg border border-line bg-surface p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex size-9 items-center justify-center rounded-md bg-brand-tint">
                      <Image src={skillIcons[group.group]} alt="" width={18} height={18} />
                    </span>
                    <h3 className="text-lg font-bold text-ink">{group.group}</h3>
                  </div>
                  <ul className="flex flex-wrap gap-2">
                    {group.items.map((item) => (
                      <li key={item} className="rounded border border-line bg-chip px-2.5 py-1.5 text-xs text-body">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="experience" aria-labelledby="experience-heading" className={`border-y border-line bg-surface ${section}`}>
          <div className={`${container} flex flex-col gap-12`}>
            <SectionHeading
              id="experience-heading"
              eyebrow="Experience"
              title="Experience"
              description="A chronology of production roles, growth experiments, and technical leadership."
            />
            <Experience />
          </div>
        </section>

        <section id="education" aria-labelledby="education-heading" className={section}>
          <div className={`${container} grid gap-12 lg:grid-cols-2`}>
            <div className="flex flex-col gap-8">
              <SectionHeading id="education-heading" eyebrow="Academia" title="Education" />
              <div className="flex flex-col gap-3 rounded-lg border border-line bg-surface p-6">
                <p className="self-start rounded border border-brand bg-brand-tint px-2.5 py-1 text-[11px] font-medium text-brand">
                  Class of {education.year}
                </p>
                <h3 className="text-xl font-bold text-ink">{education.degree}</h3>
                <p className="text-sm text-body">{education.school}</p>
              </div>
            </div>
          </div>
        </section>

        <section id="contact" aria-labelledby="contact-heading" className={`border-t border-line bg-surface ${section}`}>
          <div className={`${container} grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20`}>
            <div className="flex flex-col gap-8">
              <SectionHeading
                id="contact-heading"
                eyebrow="Contact"
                title="Initiate a Technical Collaboration"
                description="Interested in discussing a role? Let's connect. Tell me about your product, your team, and the problems you're solving."
              />
              <ul className="flex flex-col gap-4">
                {contactLinks.map((link) => (
                  <li key={link.label} className="flex items-center gap-3">
                    <span className="flex size-8 items-center justify-center rounded-md border border-line bg-subtle">
                      <Image src={link.icon} alt="" width={16} height={16} />
                    </span>
                    <span className="flex flex-col">
                      <span className="text-[11px] text-muted">{link.label}</span>
                      <a
                        href={link.href}
                        className="text-sm font-medium text-ink hover:text-brand"
                        {...(link.external && { target: "_blank", rel: "noopener noreferrer" })}
                      >
                        {link.value}
                        {link.external && <span className="sr-only"> (opens in a new tab)</span>}
                      </a>
                    </span>
                  </li>
                ))}
              </ul>
            </div>
            <ContactForm email={profile.email} />
          </div>
        </section>
      </main>

      <footer className="border-t border-line bg-surface">
        <div className={`${container} flex flex-col gap-2 py-8 text-xs sm:flex-row sm:justify-between`}>
          <p className="text-muted">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js.
          </p>
          <p className="text-brand">[status: listening_for_connections]</p>
        </div>
      </footer>
    </>
  );
}
