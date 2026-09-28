import Image from "next/image";
import { profile } from "@/data/profile";

const statusLines = [
  ` "role": "${profile.title}",`,
  ` "focus": "front-end_architecture_&_ui",`,
  ` "current_stack": ["React", "TypeScript", "Next.js", "Tailwind CSS"],`,
  ` "location": "${profile.location}"`,
];

export function Hero() {
  return (
    <div
      id="top"
      className="mx-auto flex max-w-[1440px] scroll-mt-20 flex-col gap-12 px-4 pb-20 pt-16 sm:px-8 sm:pt-24 lg:flex-row lg:items-center lg:gap-8 lg:px-20 lg:pb-[120px] lg:pt-[100px]"
    >
      <div className="flex flex-col gap-8 lg:w-[733px] lg:shrink-0">
        <div className="flex flex-col gap-3">
          <p className="flex items-center gap-2 text-sm text-muted">
            <span aria-hidden="true" className="size-2 rounded-sm bg-brand" />
            Available for Hire
          </p>
          <h1 className="flex flex-col gap-3">
            <span className="font-display text-5xl font-bold leading-[1.05] text-ink sm:text-[64px]">
              {profile.name}
            </span>
            <span className="text-[32px] font-bold leading-[1.1] text-muted sm:text-[44px]">
              {profile.title}
            </span>
          </h1>
        </div>
        <p className="text-lg leading-[1.6] text-body">{profile.intro}</p>
        <div className="flex flex-wrap gap-4">
          <a
            href="#experience"
            className="rounded-md bg-brand px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="rounded-md border border-line bg-surface px-6 py-3 text-sm font-semibold text-body transition-colors hover:border-muted"
          >
            Get in Touch
          </a>
        </div>
      </div>

      <div
        aria-hidden="true"
        className="w-full overflow-hidden rounded-xl border border-line bg-surface shadow-[0px_10px_32px_4px_rgba(77,89,128,0.15)] lg:h-[380px] lg:w-[515px] lg:shrink-0"
      >
        <div className="flex items-center justify-between border-b border-line bg-chip px-4 py-3">
          <Image src="/icons/window-controls.svg" alt="" width={48} height={12} />
          <p className="text-[13px] text-muted">Developer Profile</p>
          <span className="w-12" />
        </div>
        <div className="flex flex-col gap-3 overflow-x-auto p-6 text-[13px] leading-normal text-body">
          <p>Status overview</p>
          <p className="text-muted">{"{"}</p>
          {statusLines.map((line) => (
            <p key={line} className="whitespace-pre">
              {line}
            </p>
          ))}
          <p className="text-muted">{"}"}</p>
          <p className="flex items-center gap-1 text-muted">
            ${" "}
            <span className="h-[15px] w-2 animate-pulse bg-muted motion-reduce:animate-none" />
          </p>
        </div>
      </div>
    </div>
  );
}
