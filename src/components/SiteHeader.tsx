import { profile } from "@/data/profile";

const links = [
  { href: "#about", label: "about" },
  { href: "#skills", label: "skills" },
  { href: "#projects", label: "projects" },
  { href: "#experience", label: "experience" },
  { href: "#education", label: "education" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-10 border-b border-line bg-surface">
      <div className="mx-auto flex h-20 max-w-[1440px] items-center justify-between gap-6 px-4 sm:px-8 lg:px-20">
        <a href="#top" className="font-display text-lg font-semibold text-ink">
          {profile.name}
        </a>
        <nav aria-label="Primary" className="hidden md:block">
          <ul className="flex gap-8 text-[13px] text-muted">
            {links.map((link) => (
              <li key={link.href}>
                <a href={link.href} className="transition-colors hover:text-ink">
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <a
          href="#contact"
          className="rounded-md border border-brand bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          Say Hello
        </a>
      </div>
    </header>
  );
}
