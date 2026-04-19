// Single source of truth for personal info. Swap placeholder values here.
export const site = {
  name: "Md Nazim Hossain",
  shortName: "Nazim",
  role: "Software Development Engineer",
  tagline: "CSE @ Brac University · MERN · MVC",
  location: "Dhaka, Bangladesh",
  pitch:
    "I'm extremely passionate about computer science. I love learning something new every day, applying it, and then teaching it to someone else in an easier way.",
  resumeUrl: "/Md_Nazim_Hossain_CV.pdf",
  url: "https://SrothJr.github.io",
  email: "nazimhossain14602@gmail.com",
  phone: "+8801878912707",
  socials: {
    github: "https://github.com/SrothJr",
    linkedin: "https://www.linkedin.com/in/md-nazim-hossain/",
  },
} as const;

export type Project = {
  name: string;
  description: string;
  tools: string[];
  link?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "GardeniAR",
    description:
      "A cross-platform AI-enriched gardening assistant with integrated AR features. Handles task management, care instructions, and weather-based precautions so gardeners can focus on the art.",
    tools: ["React Native", "Expo", "MERN", "MongoDB", "MVC"],
    link: "https://github.com/SrothJr/gardeniAR",
    featured: true,
  },
  {
    name: "Meal Sync",
    description:
      "A subscription-based meal solution connecting conscious consumers with talented home chefs. A platform for skilled cooks to turn their craft into secure earnings.",
    tools: ["MERN", "MongoDB", "MVC"],
    link: "https://github.com/SrothJr/meal-sync",
    featured: true,
  },
  {
    name: "Student Help Desk",
    description:
      "A university help-desk site for students — resources, course reviews, and Q&A. I led the team for this group project.",
    tools: ["HTML", "CSS", "PHP", "MySQL"],
    link: "https://github.com/SrothJr/student-help-desk",
    featured: true,
  },
  {
    name: "Drive Scraper",
    description:
      "Scrapes a selected Google Drive folder for updates and pushes notifications to a Discord channel in real time.",
    tools: ["JavaScript", "Google Drive API v3", "Discord Bot"],
    link: "https://github.com/SrothJr/Drive-Scraper",
  },
  {
    name: "Another NoteApp",
    description:
      "Yet another note app — but with a clean UI and full deployment via Render. Built as a learning project for the MERN stack and MVC architecture.",
    tools: ["MERN", "TailwindCSS", "MVC"],
    link: "https://github.com/SrothJr/another-noteApp",
  },
  {
    name: "Pig Game",
    description:
      "A small dice game built while learning JavaScript. Followed a tutorial and applied my own optimizations afterward.",
    tools: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/SrothJr/Pig-Game",
  },
  {
    name: "My First Website",
    description:
      "The personal site I built for myself back in 2020 using raw HTML and CSS — where it all started.",
    tools: ["HTML", "CSS"],
    link: "https://github.com/SrothJr/My-Website",
  },
];

export const skills = [
  {
    title: "Web Development",
    body: "Full-stack MERN with MySQL and MongoDB, following MVC architecture.",
  },
  {
    title: "Python",
    body: "OOP, data structures, and algorithm implementations. Data analysis, visualization, and computing with libraries.",
  },
  {
    title: "JavaScript",
    body: "ReactJS, DOM manipulation, web applications, and small software tools.",
  },
  {
    title: "Media",
    body: "Advanced photography and cinematography with professional photo and video editing experience.",
  },
];

export const technologies = [
  "Java",
  "C++",
  "C",
  "Python",
  "JavaScript",
  "MySQL",
  "MongoDB",
  "MERN",
  "React Native",
  "Expo",
];

export const experience = [
  {
    role: "Software Development Engineer Intern",
    org: "uSavior",
    location: "Dhaka, BD",
    period: "Jun 2024 — Now",
    points: [
      "Exploring frameworks for advanced web apps and software development.",
      "Recognizing problems solvable through known/modified algorithms and building scratch solutions.",
    ],
  },
  {
    role: "General Secretary",
    org: "Revolution — Youth Development",
    location: "Bangladesh",
    period: "Oct 2022 — Now",
    points: [
      "Encouraging youth to participate in social work to develop their personality and mindset.",
      "Organized programs around the welfare of street children.",
    ],
  },
  {
    role: "Advisor (S-5), General Secretary (S-4)",
    org: "Photography Club of Rouf College",
    location: "Dhaka, BD",
    period: "Nov 2019 — Dec 2022",
    points: [
      "Led a pack of enthusiasts as a photography mentor; managed and hosted many events.",
      "Oversaw club administration and funds; bridged students with college authorities.",
    ],
  },
  {
    role: "Co-Founder",
    org: "Spread Love for Street Children (SLFC)",
    location: "Dhaka, BD",
    period: "Feb 2021 — Jul 2022",
    points: [
      "Founded an organization with college friends to reach unprivileged street children and families in Bangladesh.",
      "Created a platform for talented youth to engage in non-political social work.",
    ],
  },
];

export const education = {
  school: "Brac University",
  degree: "B.Sc. in Computer Science and Engineering",
  period: "Sept 2022 — Now",
  cgpa: "3.72 / 4.0 (108 credits completed)",
  coursework: [
    "Data Structures",
    "Algorithm Analysis & Design",
    "Computer Architecture",
    "Digital Logic Design",
    "Data Communications",
    "Database Management",
    "Software Engineering",
    "Artificial Intelligence",
  ],
};
