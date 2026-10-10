export type PortfolioCategory = "frontend" | "backend" | "full-stack"

export type PortfolioProject = {
  slug: string
  title: string
  eyebrow: string
  summary: string
  problem: string
  solution: string
  categories: PortfolioCategory[]
  tags: string[]
  metrics: string[]
  stack: string[]
  links: { label: string; href: string }[]
  featured?: boolean
  current?: boolean
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "nizaam",
    title: "Nizaam Core",
    eyebrow: "Currently building · indexing engine",
    summary: "A Rust indexing engine built around correctness, predictable performance, and a test suite that makes systems work visible.",
    problem: "Search and indexing infrastructure is easy to make fast in the happy path and difficult to make trustworthy under change.",
    solution: "Nizaam focuses on explicit indexing primitives, durable boundaries, and evidence-driven iteration through unit and integration coverage.",
    categories: ["backend"], tags: ["Rust", "Systems", "Infrastructure"], metrics: ["2,311 passing tests", "1,576 unit tests", "735 integration tests", "Published crates"], stack: ["Rust", "Cargo", "Indexing", "Systems design"], current: true, featured: true,
    links: [{ label: "GitHub", href: "https://github.com/0xshariq" }],
  },
  {
    slug: "ghost-ai",
    title: "Ghost AI",
    eyebrow: "Collaborative system design workspace",
    summary: "A real-time canvas for designing systems together, with collaborative state and durable AI workflows.",
    problem: "System design tools often separate the visual model from the conversation and execution around it.",
    solution: "Ghost AI brings React Flow diagrams, Liveblocks collaboration, and Trigger.dev/Gemini workflows into one shared workspace.",
    categories: ["frontend", "full-stack"], tags: ["AI", "Real-time", "React Flow"], metrics: ["Shared collaborative canvas", "Durable workflows"], stack: ["Next.js", "React Flow", "Liveblocks", "Trigger.dev", "Gemini"], featured: true,
    links: [{ label: "GitHub", href: "https://github.com/0xshariq" }],
  },
  {
    slug: "coinpulse",
    title: "CoinPulse",
    eyebrow: "Real-time market data product",
    summary: "A market dashboard designed around shared Binance WebSocket connections, bounded caching, and resilient reconnects.",
    problem: "Streaming dashboards become expensive and unreliable when every view opens its own connection or keeps unbounded state.",
    solution: "CoinPulse pools subscriptions, deduplicates symbols, backs off on reconnect, and keeps client state bounded.",
    categories: ["frontend", "backend", "full-stack"], tags: ["Real-time", "WebSockets", "Performance"], metrics: ["Shared connection management", "Bounded client cache"], stack: ["TypeScript", "Next.js", "Binance WebSocket", "State management"], featured: true,
    links: [{ label: "GitHub", href: "https://github.com/0xshariq" }],
  },
  {
    slug: "mediaproc",
    title: "MediaProc",
    eyebrow: "Open-source developer tooling",
    summary: "A universal media-processing CLI with an extensible plugin architecture for images, video, audio, and documents.",
    problem: "Media workflows are fragmented across one-off tools and inconsistent interfaces.",
    solution: "MediaProc gives those workflows one composable CLI surface and a plugin model that can grow with the ecosystem.",
    categories: ["backend", "full-stack"], tags: ["TypeScript", "CLI", "Open Source"], metrics: ["Published package", "Extensible plugins"], stack: ["TypeScript", "Node.js", "CLI", "Plugin architecture"], featured: true,
    links: [{ label: "Docs", href: "https://docs-mediaproc.vercel.app/" }, { label: "GitHub", href: "https://github.com/0xshariq/mediaproc" }],
  },
  {
    slug: "skew-news",
    title: "Skew News",
    eyebrow: "Automated ingestion and analysis",
    summary: "A news pipeline that ingests sources, extracts content, persists results, and applies Gemini analysis on a schedule.",
    problem: "Useful news intelligence requires more than fetching headlines: it needs reliable extraction, persistence, and repeatable analysis.",
    solution: "Skew News turns scheduled ingestion into a traceable pipeline with database-backed processing stages.",
    categories: ["backend", "full-stack"], tags: ["AI", "Pipelines", "Automation"], metrics: ["Scheduled processing", "Database persistence"], stack: ["Next.js", "TypeScript", "Gemini", "Database"], featured: true,
    links: [{ label: "GitHub", href: "https://github.com/0xshariq" }],
  },
  {
    slug: "bookified",
    title: "Bookified",
    eyebrow: "Full-stack reading workflow",
    summary: "An authenticated reading product with PDF ingestion, parsing, Blob storage, MongoDB workflows, and Vapi voice interaction.",
    problem: "Reading tools usually treat a document as a file instead of a living, searchable, conversational experience.",
    solution: "Bookified connects upload, parsing, persistence, and voice interaction into a single authenticated workflow.",
    categories: ["frontend", "full-stack"], tags: ["PDF", "Voice", "Full Stack"], metrics: ["Authenticated workflows", "Document ingestion"], stack: ["Next.js", "MongoDB", "Vercel Blob", "Vapi"], featured: true,
    links: [{ label: "GitHub", href: "https://github.com/0xshariq" }],
  },
]

export const categoryLabels: Record<PortfolioCategory, string> = { frontend: "Frontend", backend: "Backend", "full-stack": "Full Stack" }
export const featuredProjects = portfolioProjects.filter((project) => project.featured)
export const currentProject = portfolioProjects.find((project) => project.current)
export const getProject = (slug: string) => portfolioProjects.find((project) => project.slug === slug)
export const projectsForCategory = (category: PortfolioCategory) => portfolioProjects.filter((project) => project.categories.includes(category))
export const resumeUrl = "/resume.pdf"
