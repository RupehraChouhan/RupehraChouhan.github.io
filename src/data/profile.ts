export type Role = {
  title: string;
  start: string;
  end: string;
  highlights: string[];
};

export type Job = {
  company: string;
  location: string;
  roles: Role[];
};

export const profile = {
  name: "Rupehra Chouhan",
  title: "Senior Software Engineer",
  tagline: "Front-End & UI Engineering",
  location: "Canada",
  email: "rupehra1@gmail.com",
  linkedin: "https://linkedin.com/in/rupehrachouhan",
  intro:
    "Senior front-end engineer with 9+ years of experience building large-scale web applications in React, TypeScript, and JavaScript. Specializes in front-end architecture, reusable UI components, accessibility, and web performance.",
  summary:
    "Senior front-end engineer with 9+ years of experience building large-scale web applications in React, TypeScript, and JavaScript. Specializes in front-end architecture, reusable UI components, accessibility, and web performance, with a track record of shipping experiments that turn trial users into paying customers. Experienced in mentoring engineers, setting testing and experimentation practices, and partnering with Design, Product, and QA across regular release cycles.",
};

export const highlights = [
  { value: "20,000", label: "net new paid subscribers from trial-conversion experiments" },
  { value: "9+", label: "years building large-scale web apps" },
  { value: "5%", label: "customer growth from funnel experiments" },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Front-End",
    items: ["JavaScript (ES6+)", "TypeScript", "React", "Redux", "Next.js", "HTML5", "CSS3", "Styled Components", "Tailwind CSS", "Storybook"],
  },
  {
    group: "Web Platform",
    items: ["Accessibility (WCAG, Keyboard Navigation)", "Web Performance", "Responsive Layouts", "Browser APIs", "Localization"],
  },
  {
    group: "Build & Testing",
    items: ["Webpack", "Module Federation", "Babel", "NPM", "Node.js", "RESTful APIs", "Git", "CI/CD (Jenkins)", "Jest", "React Testing Library", "Cypress", "Playwright", "Applitools"],
  },
  {
    group: "Practices",
    items: ["Code Reviews", "Mentoring", "Technical Design", "A/B Testing", "RUM", "Splunk", "Figma"],
  },
];

export const experience: Job[] = [
  {
    company: "Intuit",
    location: "USA",
    roles: [
      {
        title: "Senior Software Engineer",
        start: "Jan 2023",
        end: "May 2026",
        highlights: [
          "Led the QuickBooks Product Growth team's trial-conversion experiments, adding 20,000 net new paid subscribers by replacing zero-state pages with sample data and an AI agent.",
          "Architected the Trial Sandbox front end; its first experiment drove 4,000 net new subscribers, and it became the foundation for follow-up experiments that global teams scaled to other regions.",
          "Built reusable React components shared across apps with Webpack Module Federation, documented in Storybook and published to NPM.",
          "Unified accountant and client navigation into One Left Navigation in React and TypeScript, adding localStorage persistence and cmd/shift-click new-tab support across QuickBooks Online (QBO).",
          "Fixed keyboard navigation and focus order (WCAG 2.1.1, 2.4.3) across Left Navigation and bookmarks, and added unit tests covering tab behavior.",
          "Improved web performance by deferring non-critical widgets until page ready, and designed RUM and failed-interaction monitoring that gave teams production visibility into page performance.",
          "Scoped web-funnel tracking events with data science, surfacing experiments that increased customer growth by 5%, and introduced Applitools visual regression testing for pixel-accurate UI.",
          "Mentored engineers on experiment setup and PR quality, led weekly AI learning sessions, and started a shared AI-skills repo used across the org.",
        ],
      },
    ],
  },
  {
    company: "Intuit",
    location: "Canada",
    roles: [
      {
        title: "Senior Software Engineer",
        start: "Aug 2022",
        end: "Dec 2022",
        highlights: [
          "Migrated left-navigation components to React and Redux, shipped the hub-and-spoke navigation redesign to production, and upgraded shared UI component libraries.",
        ],
      },
      {
        title: "Software Engineer 2",
        start: "Feb 2020",
        end: "Jul 2022",
        highlights: [
          "Rebuilt QBO's skyscraper navigation as multi-level navigation, and added drag-and-drop reordering and bookmarks for faster access to frequently used pages.",
          "Served as the go-to engineer for a company-wide CSRF security fix: built front-end token handling, wrote the playbook plugin teams followed, and unblocked teams across business units.",
          "Wrote automated WebPageTest scripts integrated into shell builds, with dashboards that kept a converged app shell within performance targets during rollout.",
          "Integrated a marketing tag manager through an iframe and custom browser events, benchmarking analytics performance with and without event batching.",
        ],
      },
      {
        title: "Software Engineer 1",
        start: "Jun 2018",
        end: "Jan 2020",
        highlights: [
          "Cut 17KB from the shared web shell's JavaScript layer by removing legacy Dojo dependencies from plugins.",
          "Migrated plugin Jenkins jobs to a new build platform, adding Checkmarx and IQ security scans and a release build job, and maintained an internal test automation library.",
        ],
      },
      {
        title: "Software Engineer in Quality (Co-op)",
        start: "Jan 2016",
        end: "Dec 2016",
        highlights: [
          "Found and verified 50%+ of bugs for the QuickBooks homepage launch through mobile and web cross-browser testing, and wrote automated tests in Java and JavaScript.",
        ],
      },
    ],
  },
];

export const education = {
  degree: "BSc in Computing Science, Specialization in Software Practice",
  school: "University of Alberta",
  year: "2018",
};
