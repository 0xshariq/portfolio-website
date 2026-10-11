export type PortfolioCategory = "frontend" | "backend" | "full-stack"

export type CaseStudyTab = { id: string; label: string; summary: string; details: string[]; links?: { label: string; href: string }[] }

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
  tabs?: CaseStudyTab[]
  featured?: boolean
  current?: boolean
}

export const portfolioProjects: PortfolioProject[] = [
  {
    slug: "nizaam", title: "Nizaam", eyebrow: "Long-term build · Islamic ecosystem infrastructure",
    summary: "An ecosystem of cooperating Rust engines for dependable Islamic data, knowledge, and retrieval infrastructure.",
    problem: "A trustworthy Islamic software ecosystem needs shared contracts, explicit boundaries, durable execution, and domain engines that can evolve without duplicating infrastructure.",
    solution: "Nizaam separates shared platform responsibilities from domain meaning: Core coordinates identities, transport, security, observability, retries, artifacts, and the Control Plane; Indexing owns index semantics and durable build and retrieval workflows; the Knowledge Graph Engine is being developed for connected knowledge representations.",
    categories: ["backend"], tags: ["Rust", "Systems", "Islamic technology"], metrics: ["5 organization repositories", "Published Rust crates", "Core + Indexing + Knowledge Graph"], stack: ["Rust", "Cargo", "Typed contracts", "Durable execution", "Indexing"], current: true, featured: true,
    links: [{ label: "Nizaam organization", href: "https://github.com/nizaam-islamic-ecosystem" }, { label: "Core crate", href: "https://crates.io/crates/nizaam-core" }, { label: "Indexing crate", href: "https://crates.io/crates/nizaam-indexing-engine" }],
    tabs: [
      { id: "core", label: "Core", summary: "The domain-agnostic platform layer used by Nizaam engines.", details: ["Provides universal contracts, engine and instance identity, execution context, transport abstractions, message framing, security boundaries, capabilities, artifacts, internal events, observability, health, retries, and idempotency.", "The Control Plane handles registration, membership, routing, lifecycle coordination, and safe engine-to-engine communication without owning domain meaning.", "Core deliberately stays independent of Quran, Hadith, Arabic, Fiqh, search, and other domain-specific semantics."], links: [{ label: "GitHub", href: "https://github.com/nizaam-islamic-ecosystem/core" }, { label: "crates.io", href: "https://crates.io/crates/nizaam-core" }, { label: "docs.rs", href: "https://docs.rs/nizaam-core" }] },
      { id: "indexing", label: "Indexing Engine", summary: "A domain-focused indexing and retrieval engine built on Nizaam Core.", details: ["Owns index definitions, families, keys, entries, versions, similarity metadata, query planning, retrieval, and index events.", "Build, update, rebuild, publication, consistency, integrity, capacity, configuration, recovery, and durable operation execution are treated as explicit workflows.", "The engine keeps Core and indexing responsibilities separate: Core carries communication and shared infrastructure while Indexing owns indexing meaning."], links: [{ label: "GitHub", href: "https://github.com/nizaam-islamic-ecosystem/indexing-engine" }, { label: "crates.io", href: "https://crates.io/crates/nizaam-indexing-engine" }, { label: "docs.rs", href: "https://docs.rs/nizaam-indexing-engine" }] },
      { id: "knowledge-graph", label: "Knowledge Graph Engine", summary: "An active-development engine for representing and connecting knowledge across the ecosystem.", details: ["The repository is currently an active development surface within the Nizaam organization, following the ecosystem's cooperating-engine model.", "Its purpose is to make entities, relationships, provenance, and graph-oriented retrieval composable with the shared Core platform and future domain engines.", "The boundary keeps graph semantics in the engine while shared transport, lifecycle, observability, and execution infrastructure remain reusable."], links: [{ label: "GitHub", href: "https://github.com/nizaam-islamic-ecosystem/knowledge-graph-engine" }] },
    ],
  },
  {
    slug: "ghost-ai", title: "Ghost AI", eyebrow: "Collaborative system design workspace", summary: "A collaborative workspace that turns plain-English ideas into editable architecture diagrams and technical specifications.", problem: "System design tools often separate the visual model from the conversation, collaboration, and execution around it.", solution: "Ghost AI combines authenticated projects, invite-based access, a shared React Flow canvas, Liveblocks presence and state, durable Trigger.dev generation tasks, Gemini through the Vercel AI SDK, Prisma/Postgres metadata, and Vercel Blob artifacts.", categories: ["frontend", "full-stack"], tags: ["AI", "Real-time", "React Flow"], metrics: ["Shared canvas", "Durable AI tasks", "Markdown specifications"], stack: ["Next.js 16", "React 19", "TypeScript", "Clerk", "Prisma", "Liveblocks", "Trigger.dev", "Gemini", "Vercel Blob"], featured: true, links: [{ label: "GitHub", href: "https://github.com/0xshariq/ghost-ai" }],
  },
  {
    slug: "coinpulse", title: "CoinPulse", eyebrow: "Real-time market data product", summary: "A lightweight cryptocurrency dashboard with live Binance prices, CoinGecko data, interactive charts, and bounded client state.", problem: "Streaming dashboards become expensive and unreliable when every view opens its own connection or keeps unbounded state.", solution: "CoinPulse combines Binance WebSocket updates with CoinGecko metadata, shared connection management, chart-oriented data, and resilient client-side streaming behavior.", categories: ["frontend", "backend", "full-stack"], tags: ["Real-time", "WebSockets", "Performance"], metrics: ["Live price tracking", "Interactive charts", "Binance + CoinGecko"], stack: ["TypeScript", "Next.js", "Binance WebSocket", "CoinGecko", "Charts"], featured: true, links: [{ label: "GitHub", href: "https://github.com/0xshariq/coinpulse" }] },
  {
    slug: "mediaproc", title: "MediaProc", eyebrow: "Open-source developer tooling", summary: "A universal media-processing CLI with built-in and installable plugins for images, video, audio, documents, and automation.", problem: "Media workflows are fragmented across one-off tools and inconsistent interfaces.", solution: "MediaProc gives media workflows one composable CLI surface with plugin management, built-in command families, and an architecture designed for community extensions.", categories: ["backend", "full-stack"], tags: ["TypeScript", "CLI", "Open Source"], metrics: ["47 image commands", "8 video commands", "6 audio commands"], stack: ["TypeScript", "Node.js", "CLI", "Plugin architecture"], featured: true, links: [{ label: "Docs", href: "https://docs-mediaproc.vercel.app/" }, { label: "GitHub", href: "https://github.com/0xshariq/mediaproc" }] },
  {
    slug: "skew-news", title: "Skew News", eyebrow: "Automated ingestion and analysis", summary: "A full-stack AI news platform that scrapes articles, analyzes sentiment and political framing, and surfaces a bias breakdown.", problem: "News intelligence needs reliable source ingestion and analysis context before a reader opens the story.", solution: "Skew turns article collection into a traceable pipeline that extracts real sources, applies AI analysis, and presents framing and sentiment signals alongside the article.", categories: ["backend", "full-stack"], tags: ["AI", "Pipelines", "News"], metrics: ["Multi-source scraping", "Sentiment analysis", "Political framing"], stack: ["Next.js", "TypeScript", "Gemini", "Web scraping"], featured: true, links: [{ label: "GitHub", href: "https://github.com/0xshariq/skew-news" }] },
  {
    slug: "bookified", title: "Bookified", eyebrow: "Full-stack reading workflow", summary: "An AI-powered reading platform that turns PDFs into interactive books with real-time voice conversations.", problem: "Reading tools usually treat a document as a file instead of a living, searchable, conversational experience.", solution: "Bookified connects authenticated uploads, PDF parsing, MongoDB persistence, Blob-backed assets, and Vapi voice interaction into one reading workflow.", categories: ["frontend", "full-stack"], tags: ["PDF", "Voice", "Full Stack"], metrics: ["Voice conversations", "PDF ingestion", "Authenticated workflows"], stack: ["Next.js 16", "Vapi", "MongoDB", "Vercel Blob"], featured: true, links: [{ label: "GitHub", href: "https://github.com/0xshariq/bookified" }] },
]

export const categoryLabels: Record<PortfolioCategory, string> = { frontend: "Frontend", backend: "Backend", "full-stack": "Full Stack" }
export const featuredProjects = portfolioProjects.filter((project) => project.featured)
export const currentProject = portfolioProjects.find((project) => project.current)
export const getProject = (slug: string) => portfolioProjects.find((project) => project.slug === slug)
export const projectsForCategory = (category: PortfolioCategory) => portfolioProjects.filter((project) => project.categories.includes(category))
export const resumeUrl = "/resume.pdf"
