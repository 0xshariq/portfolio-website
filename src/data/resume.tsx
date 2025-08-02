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
    "I am a passionate Full Stack Developer with a keen interest in building innovative web applications. I have experience in developing responsive and user-friendly interfaces using ReactJS, NextJS, and TailwindCSS. I am also proficient in backend development with NodeJS and ExpressJS, and I have a strong understanding of database management with MongoDB. I am always eager to learn new technologies and improve my skills. I believe in writing clean, maintainable code and following best practices in software development. I am currently pursuing a B.Tech in Computer Science and looking for internship opportunities to gain practical experience in the industry. I am excited to contribute to projects that make a difference and help solve real-world problems. I am also interested in exploring AI and machine learning technologies to enhance my web applications. I am a team player and enjoy collaborating with others to achieve common goals. I am committed to continuous learning and professional growth in the field of web development. I am looking forward to connecting with like-minded individuals and organizations that share my passion for technology and innovation. I am open to new opportunities and challenges that will help me grow as a developer and make a positive impact in the tech community.",
  avatarUrl: "/me.jpeg",
  skills: [
    "ReactJS",
    "NextJS",
    "Typescript",
    "NodeJS",
    "ExpressJS",
    "TailwindCSS",
    "MongoDB",
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
      email: {
        name: "Send Email",
        url: "#",
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
          href: "https://github.com/0xshariq/",
          icon: <Icons.github className="size-3" />,
        },
        {
          type: "Website",
          href: "",
          icon: <Icons.globe className="size-3" />
        },
        {
          type: "NPM",
          href: "https://www.npmjs.com/package/package-installer-cli",
          icon: <Icons.npm className="size-3" />
        }
      ],
      image: "/gmcp.png",
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
} as const;
