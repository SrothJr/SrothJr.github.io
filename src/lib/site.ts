// Single source of truth for personal info. Swap placeholder values here.
export const site = {
  name: "Md Nazim Hossain",
  shortName: "Nazim",
  role: "Software Development Engineer",
  tagline: "CSE Graduate · Brac University · MERN · AI/NLP",
  location: "Dhaka, Bangladesh",
  pitch:
    "CS graduate with hands-on experience in full-stack MERN development, AI, and Natural Language Processing. I apply transformer models and software engineering principles to build real-world solutions — always looking for opportunities to work at the architectural level.",
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
  award?: {
    title: string;
    link: string;
  };
  featured?: boolean;
};

export const projects: Project[] = [
  {
    name: "NLP-Based Mental Health Detection",
    description:
      "Undergraduate thesis at Brac University. Engineered a low-resource Bangla NLP framework achieving 87.20% weighted F1-score for depression severity classification. Designed a decoupled LLM synthetic augmentation scheme (Qwen3-32B) during DAPT/TAPT, built a SigLIP cross-attention multimodal extension, and validated with LIME/SHAP explainability.",
    tools: ["Python", "PyTorch", "Hugging Face", "Qwen3-32B", "SigLIP", "DAPT/TAPT", "LIME", "SHAP"],
    link: "https://github.com/SrothJr",
    demo: "https://huggingface.co/spaces/SrothJr/bangla-depression-severity-classifier",
    featured: true,
  },
  {
    name: "GardeniAR",
    description:
      "A cross-platform AI-enriched gardening assistant with integrated AR features and dual-mode AR Weed Identification (Gemini Multimodal + React-Webcam) for real-time invasive species detection. Awarded 2nd Runners Up at the CSE471 Project Demonstration, Brac University.",
    tools: ["React Native", "Expo", "MERN", "MongoDB", "Gemini Multimodal", "MVC"],
    link: "https://github.com/SrothJr/gardeniAR",
    award: {
      title: "2nd Runners Up — CSE471 Project Demonstration",
      link: "https://www.bracu.ac.bd/news/brac-university-hosts-cse471-project-showcase-fall-2025",
    },
    featured: true,
  },
  {
    name: "Meal Sync",
    description:
      "A dynamic meal subscription platform connecting conscious consumers and bachelors with talented home chefs for regular homemade meals, providing skilled cooks a platform to turn their craft into secure earnings.",
    tools: ["MERN", "MongoDB", "Express.js", "React", "Node.js", "MVC"],
    link: "https://github.com/SrothJr/meal-sync",
    featured: true,
  },
  {
    name: "Student Help Desk",
    description:
      "A university help-desk platform for students — academic resources, course reviews, and peer Q&A. Led the development team for this university project.",
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
    featured: true,
  },
  {
    name: "hyprGesture",
    description:
      "A touchless gesture control system integrating an Arduino UNO and PAJ7620 sensor to seamlessly control a Linux desktop environment (Hyprland) across 3 operational modes. Built a continuous Python daemon running asynchronous shell subprocesses.",
    tools: ["Python", "C++", "Arduino", "PAJ7620", "PySerial", "Hyprland", "Linux"],
    link: "https://github.com/SrothJr/hyprGesture",
    featured: true,
  },
  {
    name: "Drive Scraper",
    description:
      "Software to scrape a selected Google Drive folder for file updates in real time and automatically dispatch alerts to a Discord channel.",
    tools: ["JavaScript", "Google Drive API v3", "Discord Bot"],
    link: "https://github.com/SrothJr/Drive-Scraper",
  },
  {
    name: "Another NoteApp",
    description:
      "A sleek note-taking web application with a clean UI, fully deployed on Render. Built as a focused implementation of the MERN stack and MVC architecture.",
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
  cgpa: "3.78 / 4.00",
  majorCgpa: "3.90 / 4.00",
  status: "Graduated: Summer 2026",
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

export const priorEducation = [
  {
    school: "Birshreshtha Munshi Abdur Rouf Public College",
    degree: "Higher Secondary Certificate (HSC)",
    period: "2019 — 2021",
    gpa: "5.00 / 5.00",
    group: "Science",
    location: "Peelkhana, Dhaka",
  },
  {
    school: "Willes Little Flower School And College",
    degree: "Secondary School Certificate (SSC)",
    period: "2017 — 2019",
    gpa: "5.00 / 5.00",
    group: "Science",
    location: "Kakrail, Dhaka",
  },
];

export const awards = [
  {
    title: "2nd Runners Up — CSE471 Project Demonstration",
    organization: "Brac University",
    date: "Fall 2025",
    description:
      "Awarded for 'GardeniAR', an AI-enriched cross-platform gardening assistant featuring dual-mode AR Weed Identification using Gemini Multimodal.",
    link: "https://www.bracu.ac.bd/news/brac-university-hosts-cse471-project-showcase-fall-2025",
  },
];

