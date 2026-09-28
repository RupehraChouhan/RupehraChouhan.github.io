import Image from "next/image";
import { projects, type Project } from "@/data/profile";

export function Projects() {
  return (
    <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
      {projects.map((project) => (
        <li key={project.name}>
          <ProjectCard project={project} />
        </li>
      ))}
    </ul>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="group/card flex h-full flex-col overflow-hidden rounded-xl border border-line bg-surface transition-shadow hover:shadow-[0px_10px_32px_4px_rgba(77,89,128,0.15)]">
      <ProjectPreview project={project} />

      <div className="flex flex-1 flex-col gap-4 p-6">
        <div className="flex flex-col gap-2">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <h3 className="text-lg font-bold text-ink">{project.name}</h3>
            {project.status && (
              <p className="flex items-center gap-1.5 rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[11px] font-medium text-amber-800">
                <span aria-hidden="true" className="size-1.5 rounded-full bg-amber-500" />
                {project.status}
              </p>
            )}
          </div>
          <p className="text-sm leading-normal text-body">{project.description}</p>
        </div>
        <ul className="flex flex-wrap gap-1.5" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded border border-brand bg-brand-tint px-2.5 py-1 text-[11px] font-medium text-brand">
              {tag}
            </li>
          ))}
        </ul>
      </div>

      <div className="flex items-center justify-between border-t border-[#e8d8d0] px-6 py-4 text-[13px] font-bold text-brand">
        <ProjectLink href={project.liveUrl} label="View Live Site" projectName={project.name} />
        <ProjectLink href={project.sourceUrl} label="View Code" projectName={project.name} />
      </div>
    </article>
  );
}

function ProjectLink({ href, label, projectName }: { href: string; label: string; projectName: string }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex items-center gap-1.5 hover:underline hover:underline-offset-4"
    >
      {label}
      <span className="sr-only">
        {" "}
        for {projectName} (opens in a new tab)
      </span>
      <Image
        src="/icons/arrow-right.svg"
        alt=""
        width={14}
        height={14}
        className="transition-transform group-hover:translate-x-0.5"
      />
    </a>
  );
}

const previewStories = [
  { section: "US", photo: "from-amber-300 via-orange-400 to-rose-500" },
  { section: "World", photo: "from-sky-300 via-cyan-500 to-indigo-600" },
];

// Drawn from the app's own branding rather than a screenshot, so the card doesn't
// republish third-party news photos and headlines.
function ProjectPreview({ project }: { project: Project }) {
  const host = new URL(project.liveUrl).host;

  return (
    <div
      aria-hidden="true"
      className="relative h-[227px] overflow-hidden bg-[radial-gradient(circle_at_20%_10%,#60a5fa_0%,transparent_45%),radial-gradient(circle_at_90%_80%,#a855f7_0%,transparent_50%),linear-gradient(135deg,#1e3a8a,#2563eb_55%,#7c3aed)]"
    >
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.18)_1px,transparent_1px)] bg-size-[16px_16px]" />

      <div className="absolute inset-x-9 top-8 rounded-lg bg-surface shadow-[0_18px_40px_-8px_rgba(15,23,42,0.55)] transition-transform duration-300 motion-safe:group-hover/card:-translate-y-1.5">
        <div className="flex items-center gap-3 rounded-t-lg border-b border-line bg-chip px-3 py-2">
          <Image src="/icons/window-controls.svg" alt="" width={36} height={9} />
          <span className="flex-1 truncate rounded bg-surface px-2 py-0.5 text-center text-[9px] text-muted">{host}</span>
          <span className="w-9" />
        </div>

        <div className="flex items-center justify-between gap-3 border-b border-line px-4 py-2">
          <span className="shrink-0 font-display text-base font-bold text-ink">{project.preview.wordmark}</span>
          <span className="flex gap-2 overflow-hidden text-[7px] uppercase tracking-wide text-body">
            {project.preview.sections.slice(0, 5).map((section) => (
              <span key={section}>{section}</span>
            ))}
          </span>
        </div>

        <div className="grid grid-cols-2 gap-3 bg-page p-3">
          {previewStories.map((story) => (
            <div key={story.section} className="overflow-hidden rounded-md border border-line bg-surface">
              <div className={`h-12 bg-linear-to-br ${story.photo}`} />
              <div className="flex flex-col gap-1.5 p-2">
                <span className="self-start rounded bg-sky-100 px-1.5 text-[7px] font-bold uppercase text-sky-700">
                  {story.section}
                </span>
                <span className="h-1.5 w-11/12 rounded-full bg-ink/80" />
                <span className="h-1.5 w-2/3 rounded-full bg-ink/80" />
                <span className="h-1 w-full rounded-full bg-line" />
                <span className="self-end text-[7px] font-bold text-red-600">Read on NYT</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
