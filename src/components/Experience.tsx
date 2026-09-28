import { experience } from "@/data/profile";

const roles = experience.flatMap((job) =>
  job.roles.map((role) => ({ ...role, company: job.company, location: job.location })),
);

export function Experience() {
  return (
    <ol className="flex flex-col">
      {roles.map((role, index) => {
        const isLast = index === roles.length - 1;

        return (
          <li
            key={`${role.title}-${role.start}`}
            className={`flex flex-col gap-3 md:flex-row md:gap-10 ${isLast ? "" : "pb-10"}`}
          >
            <div className="flex flex-col gap-1 font-bold md:w-[296px] md:shrink-0">
              <p className="text-xs uppercase text-brand">
                {role.start} – {role.end}
              </p>
              <p className="text-xl text-ink">
                {role.company}
                <span className="font-normal text-muted"> · {role.location}</span>
              </p>
            </div>

            <div aria-hidden="true" className="hidden w-6 shrink-0 flex-col items-center gap-2 self-stretch md:flex">
              <span className="size-4 shrink-0 rounded-full border-2 border-brand bg-surface" />
              {!isLast && <span className="w-[1.5px] flex-1 bg-line" />}
            </div>

            <div className="flex min-w-0 flex-1 flex-col gap-3">
              <h3 className="text-lg font-bold text-ink">{role.title}</h3>
              <ul className="flex flex-col gap-2">
                {role.highlights.map((highlight) => (
                  <li key={highlight} className="flex gap-2">
                    <span aria-hidden="true" className="text-[13px] leading-[21px] text-bullet">
                      &gt;
                    </span>
                    <span className="text-sm leading-normal text-body">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        );
      })}
    </ol>
  );
}
