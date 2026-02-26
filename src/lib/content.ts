export type Locale = "en" | "am";

type LocalizedText = {
  en: string;
  am: string;
};

export type Project = {
  title: string;
  description: LocalizedText;
  tags: string[];
  image: string;
  github: string;
  live: string;
};

export const content = {
  nav: {
    home: { en: "Home", am: "መነሻ" },
    about: { en: "About", am: "ስለ እኔ" },
    skills: { en: "Skills", am: "ክህሎቶች" },
    projects: { en: "Projects", am: "ፕሮጀክቶች" },
    blog: { en: "Blog", am: "ብሎግ" },
    contact: { en: "Contact", am: "ግንኙነት" },
  },
  hero: {
    name: "Samuel Abera Mekonn",
    tagline: {
      en: "Software Engineering Student | AI & Software Engineer in training",
      am: "የሶፍትዌር ምህንድስና ተማሪ | በAI እና በሶፍትዌር ምህንድስና ልምምድ ላይ",
    },
    description: {
      en: "I build meaningful systems, algorithm tools, and AI demos.",
      am: "ትርጉም ያላቸው ሲስተሞችን፣ የአልጎርይዝም መሳሪያዎችን እና AI ሙከራዎችን እገነባለሁ።",
    },
    ctaProjects: { en: "View Projects", am: "ፕሮጀክቶችን ይመልከቱ" },
    ctaResume: { en: "Download Resume", am: "የስራ ማስታወቂያ ያውርዱ" },
  },
  about: {
    title: { en: "About Me", am: "ስለ እኔ" },
    summary: {
      en: "I am a Software Engineering student who enjoys turning ideas into practical, user-focused software. I am currently deepening my skills in full-stack development, backend architecture, and machine learning workflows. My long-term goal is to become an AI-focused software engineer who builds reliable products that solve real-world problems in Ethiopia and beyond.",
      am: "እኔ የሶፍትዌር ምህንድስና ተማሪ ነኝ፤ ሀሳቦችን ወደ ተጠቃሚ ተመራ የሆነ ተግባራዊ ሶፍትዌር መቀየርን እወዳለሁ። አሁን በፉል-ስታክ ልማት፣ በባክኤንድ አርክቴክቸር እና በማሽን ለርኒንግ የሥራ ፍሰቶች ላይ ክህሎቴን እያጠናከርኩ ነው። ረጅም ጊዜ ግቤ በኢትዮጵያና ከዚያ በላይ ለእውነተኛ ችግኝ መፍትሄ የሚሰጡ የAI ምርቶችን የሚገነባ ሶፍትዌር ምህንድስ መሆን ነው።",
    },
    achievements: {
      en: [
        "Built multiple production-ready web apps using React and Next.js",
        "Designed API-driven features and database-backed systems",
        "Created AI and data projects using Python and yfinance datasets",
      ],
      am: [
        "React እና Next.js በመጠቀም ብዙ ተግባራዊ ዌብ መተግበሪያዎችን ገነባሁ",
        "API ተመራ ባህሪያትን እና ዳታቤዝ የተደገፉ ሲስተሞችን አዘጋጀሁ",
        "Python እና yfinance ዳታ በመጠቀም AI እና ዳታ ፕሮጀክቶችን ሠራሁ",
      ],
    },
    languages: {
      en: "Languages: English (Professional), Amharic (Native)",
      am: "ቋንቋዎች: እንግሊዝኛ (ፕሮፌሽናል), አማርኛ (የእናት ቋንቋ)",
    },
  },
  skills: {
    title: { en: "Skills", am: "ክህሎቶች" },
    groups: {
      programming: { en: "Programming", am: "ፕሮግራሚንግ" },
      web: { en: "Web Development", am: "ዌብ ልማት" },
      ai: { en: "AI / Machine Learning", am: "AI / ማሽን ለርኒንግ" },
      tools: { en: "Tools", am: "መሳሪያዎች" },
    },
  },
  projectsTitle: { en: "Featured Projects", am: "የተመረጡ ፕሮጀክቶች" },
  blogTitle: { en: "Latest Blog Posts", am: "የቅርብ ጊዜ ብሎጎች" },
  contactTitle: { en: "Contact Me", am: "አግኙኝ" },
};

export const skills = [
  {
    key: "programming",
    items: ["Python", "C++", "Java", "JavaScript"],
  },
  {
    key: "web",
    items: ["Next.js", "Tailwind CSS", "REST APIs", "Git + GitHub"],
  },
  {
    key: "ai",
    items: ["NumPy", "Pandas", "scikit-learn", "ML fundamentals", "yfinance"],
  },
  {
    key: "tools",
    items: ["Vercel", "Supabase", "VS Code"],
  },
] as const;

export const projects: Project[] = [
  {
    title: "Online job finder application",
    description: {
      en: "allow to any one who wants to employe or find works .",
      am: "ለመቅጠር ወይም ስራ ለመፈለግ ለሚፈልጉ ሁሉ የሚያገለግል መተግበሪያ።",
    },
    tags: ["React", "Node.js", "Socket.io", "MongoDB"],
    image: "/sra.png",
    github: "https://github.com/samuelabera21",
    live: "https://resplendent-starship-9acec3.netlify.app/",
  },
  {
    title: "Skillhub online Learning Platform",
    description: {
      en: "A modern, full-featured online learning platform frontend built with Next.js 15, featuring course browsing, shopping cart, user authentication, and a student dashboard.",
      am: "በNext.js 15 የተሰራ ዘመናዊ የኦንላይን መማሪያ ፕላትፎርም፣ የኮርስ ፍለጋ፣ ግዢ ካርት፣ ማረጋገጫ እና የተማሪ ዳሽቦርድ ያካትታል።",
    },
    tags: [
      "Next.js 15 (App Router)",
      "Tailwind CSS v4",
      "TypeScript",
      "Lucide React",
      "Framer Motion",
      "shadcn/ui",
      "React Hooks + localStorage",
    ],
    image: "/Skillhub_online_learning.png",
    github: "https://github.com/samuelabera21",
    live: "https://skill-hub-online-le-git-48b5a4-sami21goodbad-gmailcoms-projects.vercel.app",
  },
  {
    title: "Resume-generator",
    description: {
      en: "DevResumeMagic 🚀 A modern web app that generates professional developer resumes from GitHub profiles. Features Instant Resume Generation - Enter any GitHub username",
      am: "DevResumeMagic 🚀 ከGitHub ፕሮፋይሎች የፕሮፌሽናል ዴቨሎፐር ሪዙሜ የሚፈጥር ዘመናዊ መተግበሪያ።",
    },
    tags: ["JavaScript (Vanilla)", "GitHub API", "Browser Print to PDF", "HTML5 + Tailwind CSS"],
    image: "/Generate_resume.png",
    github: "https://github.com/samuelabera21",
    live: "https://lighthearted-truffle-2fb80e.netlify.app",
  },
  {
    title: "Snake Game",
    description: {
      en: "Just for fun",
      am: "ለመዝናናት ብቻ።",
    },
    tags: ["Vite", "TypeScript", "React", "shadcn-ui", "Tailwind CSS"],
    image: "/snake_game.png",
    github: "https://github.com/samuelabera21",
    live: "https://samuelabera21-git-main-sami21goodbad-gmailcoms-projects.vercel.app",
  },
  {
    title: "Ethio_travel",
    description: {
      en: "Frontend travel website just for train.",
      am: "ለልምምድ የተሰራ የፊት-ገጽ ጉዞ ድህረ ገጽ።",
    },
    tags: ["html", "css", "Javascript"],
    image: "/travel.jpg",
    github: "https://github.com/samuelabera21",
    live: "https://ethio-travel-git-main-sami21goodbad-gmailcoms-projects.vercel.app",
  },
  {
    title: "TypeMaster",
    description: {
      en: "TypeMaster is a simple yet elegant web application that helps users test and improve their typing speed and accuracy.It supports both English and Amharic languages, providing instant feedback and performance analysis.",
      am: "TypeMaster ቀላል እና ውብ የሆነ የዌብ መተግበሪያ ሲሆን የታይፒንግ ፍጥነትን እና ትክክለኛነትን ለማሻሻል ያግዛል።",
    },
    tags: ["HTML5", "CSS3", "JavaScript (ES6)", "jQuery 3.6.0"],
    image: "/master.png",
    github: "https://github.com/samuelabera21",
    live: "https://type-testing-game-git-main-sami21goodbad-gmailcoms-projects.vercel.app",
  },
  {
    title: "Stock Agent 🚀",
    description: {
      en: "AI Stock Agent with a Flask backend and React frontend. This dataset-driven project fetches market data from Yahoo Finance (yfinance), engineers features, trains ML models, and predicts prices/decisions from that data.",
      am: "Flask backend እና React frontend ያለው AI Stock Agent። ይህ ፕሮጀክት ከYahoo Finance (yfinance) የገበያ ዳታ ይሰበስባል፣ ፊቸሮችን ያበረታታል፣ ML ሞዴሎችን ያሰለጥናል እና በመረጃው ላይ የዋጋ/ውሳኔ ትንበያ ያደርጋል።",
    },
    tags: ["Flask", "React", "yfinance", "scikit-learn"],
    image: "/project-stock-agent.svg",
    github: "https://github.com/samuelabera21",
    live: "https://stock-agent-bn3k.vercel.app/",
  },
];
