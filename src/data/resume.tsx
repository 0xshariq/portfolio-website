import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sharique Chaudhary",
  initials: "SC",
  url: "https://portfolio-sigma-rose-22.vercel.app/",
  location: "Mumbai , India",
  locationLink: "https://www.google.com/maps/place/mumbai",
  description: "Full Stack Developer",
  summary:
    "Passionate full stack developer skilled in React, Next.js, Tailwind CSS, Node.js, Express, MongoDB, CLI tool development, and the Rust, Go, and JavaScript ecosystems. Focused on building clean, scalable, user-friendly applications. B.Tech CSE student seeking internships, eager to learn, explore AI/ML, collaborate with teams, and solve real-world problems with impactful technology.",
  avatarUrl: "/me.jpeg",
  skills: [
    "ReactJS",
    "NextJS",
    "Typescript",
    "NodeJS",
    "ExpressJS",
    "TailwindCSS",
    "MongoDB",
    "Docker",
    "React Native",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "khanshariq92213@gmail.com",
    tel: "+91 72081 79779",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/0xshariq",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/0xshariq/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/Sharique_Ch",
        icon: Icons.x,

        navbar: true,
      },
      Instagram: {
        name: "Instagram",
        url: "https://www.instagram.com/sharique1303",
        icon: Icons.instagram,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "mailto:khanshariq92213@gmail.com",
        icon: Icons.email,

        navbar: false,
      },
    },
  },
  education: [
    {
      school: "New Horizon Institute of Technology and Management",
      href: "https://nhitm.ac.in/",
      degree: "B.Tech in Computer Science",
      logoUrl:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeouDbHMu8ovm9X5GL_fISE-g2xFHLvbsi6A&s",
      start: "2023",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "MediaProc - One CLI to Process All Your Media",
      href: "https://github.com/0xshariq/mediaproc",
      dates: "Jan 2026 - Present",
      active: true,
      description: "Universal media processing CLI with an extensible plugin architecture. One tool to process all your media - images, videos, audio, documents, and more.",
      technologies: ["TypeScript", "NodeJS", "CLI"],
      links: [
        {
          type: "Website",
          href: "https://docs-mediaproc.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/mediaproc",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/mediaproc-docs",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mediaproc.png",
      video: "",
    },
    {
      title: "Totion - Note Taking App",
      href: "https://github.com/0xshariq/totion",
      dates: "Nov 2025",
      active: true,
      description: "A powerful, fast, and lightweight note-taking application for your terminal, built with Go and Bubble Tea.",
      technologies: ["Go", "Bubble Tea"],
      links: [
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/totion",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "https://github.com/0xshariq/totion/raw/main/totion-demo/totion-homepage.png",
      video: "",
    },
    {
      title: "EduLearn - Learning Management System",
      href: "https://learning-management-system-taupe-eta.vercel.app/",
      dates: "May 2024 - Present",
      active: true,
      description:
        "EduLearn is a comprehensive Learning Management System (LMS) designed to facilitate online education. It offers features such as course management, user authentication, and a responsive design for seamless learning experiences.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://learning-management-system-taupe-eta.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/edulearn-lms",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/edulearn-lms.png",
      video: "",
    },
    {
      title: "Github MCP Server",
      href: "https://github.com/0xshariq/github-mcp-server",
      dates: "July 2024",
      active: true,
      description:
        "A server that provides a MCP server.In which, we can perform git operations through LLMs.",
      technologies: ["NodeJS", "MCP"],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xshariq/github-mcp-server",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/gmcp.png",
      video: "",
    },
    {
      title: "Package Installer CLI Tool",
      href: "https://github.com/0xshariq/package-installer-cli",
      dates: "July 2024",
      active: true,
      description:
        "A command-line tool for installing pre-configured templates for nextjs,reactjs and many more.",
      technologies: ["NodeJS", "CLI"],
      links: [
        {
          type: "Source",
          href: "https://github.com/0xshariq/package-installer-cli",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "https://package-installer-website.vercel.app/",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/@0xshariq/package-installer",
          icon: <Icons.npm className="size-3" />
        },
        {
          type: "PYPI",
          href: "https://pypi.org/project/package-installer-cli/",
          icon: null
        },
        {
          type: "RUBYGEM",
          href: "https://rubygems.org/gems/package-installer-cli",
          icon: null
        },
        {
          type: "RUST CRATE",
          href: "https://crates.io/crates/package-installer-cli",
          icon: null
        }
      ],
      image: "/package.png",
      video: "",
    },
    {
      title: "Quran App",
      href: "https://quran-next-app.vercel.app/",
      dates: "Oct - 2024",
      active: true,
      description:
        "Developed a Quran app with a beautiful UI and a lot of features.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://quran-next-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/quran-next-app",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/quran.png",
      video: "",
    },
    {
      title: "Amanah Banking System",
      href: "https://amanah-website.vercel.app/",
      dates: "April 2025",
      active: true,
      description: "A Halal banking system.",
      technologies: ["NextJS", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://amanah-website.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/amanah.png",
      video: "",
    },
    {
      title: "Extra Care Medical Center",
      href: "https://hospital-website-ashy-eight.vercel.app",
      dates: "Sept 2024",
      active: true,
      description: "Developed a website for a medical center.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://hospital-website-ashy-eight.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/extra-care-medical-center",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/medical-center.png",
      video: "",
    },
    {
      title: "Service Website",
      href: "https://service-website-cyan.vercel.app",
      dates: "April 2023 - September 2023",
      active: true,
      description: "Service website for a company.",
      technologies: ["Next.js", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://service-website-cyan.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/service-website",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/service.png",
      video: "",
    },
    {
      title: "Music School Website",
      href: "https://music-school-app-two.vercel.app",
      dates: "Oct 2024",
      active: true,
      description: "Music school website.",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Aceternity UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://music-school-app-two.vercel.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/Music_School_App",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/music-school.png",
      video: "",
    },
    {
      title: "Sample WordPress Website",
      href: "https://samplewebsite1943.wordpress.com/",
      dates: "Dec 2024",
      active: true,
      description: "Video Maker",
      technologies: ["WordPress"],
      links: [
        {
          type: "Website",
          href: "https://samplewebsite1943.wordpress.com/",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/wordpress.png",
      video: "",
    },
    {
      title: "SaaS Landing Page",
      href: "https://saas-landing-page-app.vercel.app/",
      dates: "Dec 2024",
      active: true,
      description: "SaaS landing page.",
      technologies: ["ReactJS", "Vite", "TailwindCSS"],
      links: [
        {
          type: "Website",
          href: "https://saas-landing-page-app.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/saas-landing-page-app.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/saas.png",
      video: "",
    },
    {
      title: "API Documentation",
      href: "https://api-docs-gilt.vercel.app//",
      dates: "Feb 2025",
      active: true,
      description: "All API documentation in one place.",
      technologies: ["NextJS", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://api-docs-gilt.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/api-docs.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/api-docs.png",
      video: "",
    },
    {
      title: "Profession Predictor",
      href: "https://profession-predictor.vercel.app/",
      dates: "Feb 2025",
      active: true,
      description: "Predict your profession.",
      technologies: [
        "NextJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Next Auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://profession-predictor.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/Profession-Predictor.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/profession.png",
      video: "",
    },
    {
      title: "Custom AI Chatbot",
      href: "https://ai-powered-chatbot-sage.vercel.app",
      dates: "Feb 2025",
      active: true,
      description: "AI Integrate to generate text,images and videos.",
      technologies: [
        "NextJS",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Next Auth",
      ],
      links: [
        {
          type: "Website",
          href: "https://ai-powered-chatbot-sage.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/ai-powered-chatbot.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/ai-chatbot.png",
      video: "",
    },
    {
      title: "Typing Speed Tester",
      href: "https://typing-speed-tester-omega.vercel.app/",
      dates: "March 2025",
      active: true,
      description: "Test your typing speed.",
      technologies: ["NextJS", "Typescript", "TailwindCSS", "Shadcn UI"],
      links: [
        {
          type: "Website",
          href: "https://typing-speed-tester-omega.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/0xshariq/typing-speed-tester.git",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/typing.png",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Appwrite Hackathon",
      dates: "Oct 1st - 31st, 2025",
      location: "Mumbai, India",
      description:
        "Developed a CLI tool for modern development workflows. Create projects, manage dependencies, analyze codebases, and streamline your development process with intelligent automation.",
      image:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Dlcc0ciMZTNJPVlLqDUVbIHgd3veGgFlrw&s",
      mlh: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0Dlcc0ciMZTNJPVlLqDUVbIHgd3veGgFlrw&s",
      links: ["https://hacktoberfest.appwrite.network/?dub_id=NJbax4it54iqaqLe"],
    },
    {
      title: "Devfolio Hackathon",
      dates: "Nov 1st - 30th, 2025",
      location: "Mumbai, India",
      description:
        "A powerful, fast, and lightweight note-taking application for your terminal, built with Go and Bubble Tea.A powerful, fast, and lightweight note-taking application for your terminal, built with Go and Bubble Tea.",
      image:
        "https://hackthisfall.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F976fa65248ec49729382aebd38de94ab%2Fassets%2Fcover%2F719.png&w=1440&q=100",
      mlh: "https://hackthisfall.devfolio.co/_next/image?url=https%3A%2F%2Fassets.devfolio.co%2Fhackathons%2F976fa65248ec49729382aebd38de94ab%2Fassets%2Fcover%2F719.png&w=1440&q=100",
      links: ["https://devfolio.co/projects/note-taking-terminal-app-b017", "https://hackthisfall.devfolio.co/overview"],
    },
    {
      title: "Lingo.Dev Hackathon",
      dates: "Nov 13th - 16th, 2025",
      location: "Mumbai, India",
      description:
        "A powerful, fast, and lightweight note-taking application for your terminal, built with Go and Bubble Tea.A powerful, fast, and lightweight note-taking application for your terminal, built with Go and Bubble Tea.",
      image:
        "https://www.wemakedevs.org/_next/static/media/logo.b39bc0f0.svg",
      mlh: "https://www.wemakedevs.org/_next/static/media/logo.b39bc0f0.svg",
      links: ["https://www.wemakedevs.org/hackathons/lingohack25"],
    },
  ]
} as const;