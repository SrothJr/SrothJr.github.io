// Single source of truth for personal info. Swap placeholder values here.
export const site = {
  name: "Md Nazim Hossain",
  shortName: "Nazim",
  role: "Software Development Engineer",
  tagline: "CSE Graduate · Brac University · MERN · AI/NLP",
  location: "Dhaka, Bangladesh",
  pitch:
    "I'm extremely passionate about computer science. I love learning something new every day, applying it, and then teaching it to someone else in an easier way.",
  resumeUrl: "/Reformated_Single_Page_CV_Md_Nazim_Hossain.pdf",
  cvUrl: "/Reformated_Multi_page_CV_Md_Nazim_Hossain.pdf",
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
  demo?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "NLP-Based Mental Health Detection",
    description:
      "Undergraduate thesis at Brac University. Engineered a low-resource Bangla NLP framework achieving 87.20% weighted F1-score for depression severity classification. Used a decoupled LLM synthetic augmentation scheme (Qwen3-32B) during DAPT/TAPT and built a SigLIP cross-attention multimodal extension.",
    tools: ["Python", "PyTorch", "Hugging Face", "Qwen3-32B", "DAPT/TAPT", "LIME", "SHAP"],
    link: "https://github.com/SrothJr",
    demo: "https://huggingface.co/spaces/SrothJr/bangla-depression-severity-classifier",
    featured: true,
  },
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
    name: "Song-Lyrics Genre Classification",
    description:
      "Built a 3-model soft-voting transformer ensemble (BERT, RoBERTa) in PyTorch and Hugging Face to classify 53K+ lyrics across 6 genres. Implemented class-weighted cross-entropy loss, achieving 0.56 Macro F1 at 0.66 accuracy. Deployed a live interactive demo on Hugging Face Spaces.",
    tools: ["Python", "PyTorch", "Hugging Face", "BERT", "RoBERTa", "Scikit-learn"],
    link: "https://github.com/SrothJr/song-lyrics-genre-nlp",
    demo: "https://huggingface.co/spaces/SrothJr/lyrics-genre-predictor",
  },
  {
    name: "hyprGesture",
    description:
      "Touchless Linux desktop controller interfacing an Arduino UNO and PAJ7620 sensor with the Hyprland window manager. Built a Python serial listener with non-blocking cooldown timing and async process management to execute 27 gesture commands across 3 operational modes.",
    tools: ["Python", "C++", "Arduino", "PySerial", "I2C", "Linux"],
    link: "https://github.com/SrothJr/hyprGesture",
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
    title: "AI & Machine Learning",
    body: "NLP, transformer models (BERT, LLMs), DAPT/TAPT pretraining, explainable AI (LIME, SHAP), PyTorch, and Hugging Face.",
  },
  {
    title: "Web Development",
    body: "Full-stack MERN with MySQL and MongoDB, following MVC architecture. React Native and Expo for mobile.",
  },
  {
    title: "Python",
    body: "OOP, data structures, and algorithm implementations. Data analysis, visualization, and computing with libraries.",
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
  "PHP",
  "SQL",
  "MySQL",
  "MongoDB",
  "MERN",
  "React Native",
  "Expo",
  "PyTorch",
  "Hugging Face",
  "Linux",
];

export const experience = [
  {
    role: "Software Engineering Trainee",
    org: "uSavior",
    location: "Dhaka, BD",
    period: "Jun 2024 — Jun 2025",
    points: [
      "Participated in technical discussions evaluating modern web architectures, algorithmic approaches, and full-stack development frameworks.",
      "Analyzed real-world software design problems and collaborated on prototyping algorithmic solutions alongside senior developers.",
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
  period: "Sept 2022 — Oct 2026",
  cgpa: "3.78 / 4.00 overall · 3.90 / 4.00 CSE major (Graduated: Summer 2026)",
  coursework: [
    "Data Structures",
    "Algorithm Analysis & Design",
    "Operating Systems",
    "Computer Architecture",
    "Digital Logic Design",
    "Data Communications",
    "Computer Networks",
    "Database Systems",
    "Software Engineering",
    "Artificial Intelligence",
    "Natural Language Processing II",
    "Compiler Design",
    "VLSI Design",
    "Computer Interfacing",
    "Introduction to Robotics",
  ],
};
