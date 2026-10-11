export type PortfolioCategory = "frontend" | "backend" | "full-stack"

export type CaseStudyLink = { label: string; href: string }

export type CaseStudySection = {
  title: string
  body: string
  bullets?: string[]
}

export type CaseStudyDiagram = {
  title: string
  description?: string
  nodes: { label: string; detail: string }[]
}

export type CaseStudyTab = {
  id: string
  label: string
  summary: string
  details: string[]
  sections?: CaseStudySection[]
  diagram?: CaseStudyDiagram
  links?: CaseStudyLink[]
}

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
    categories: ["backend"], tags: ["Rust", "Systems", "Islamic technology"], metrics: ["2 public repositories", "Published Rust crates", "Core + Indexing + Knowledge Graph"], stack: ["Rust", "Cargo", "Typed contracts", "Durable execution", "Indexing"], current: true, featured: true,
    links: [{ label: "Nizaam organization", href: "https://github.com/nizaam-islamic-ecosystem" }, { label: "Core crate", href: "https://crates.io/crates/nizaam-core" }, { label: "Indexing crate", href: "https://crates.io/crates/nizaam-indexing" }],
    tabs: [
      {
        id: "core", label: "Core", summary: "The domain-agnostic platform layer that lets Nizaam engines cooperate safely.",
        details: ["Nizaam Core is the shared runtime contract: engines can focus on their own domain while using consistent identity, execution context, capabilities, messages, artifacts, health, observability, retries, and idempotency.", "Its Control Plane is responsible for registration, membership, routing, lifecycle coordination, and engine-to-engine boundaries. It provides the infrastructure for cooperation without deciding what Islamic knowledge means.", "The separation is intentional: Quran, Hadith, Arabic, Fiqh, search, and graph semantics belong to specialist engines, not to the shared platform."],
        sections: [
          { title: "Purpose", body: "Create a stable foundation for a long-lived ecosystem of cooperating Rust services. Shared concerns should be implemented once, tested centrally, and reused by every engine." },
          { title: "Architecture", body: "Callers and specialist engines communicate through typed contracts and a controlled runtime boundary. Core owns identity, lifecycle, transport, and operational guarantees; each engine owns its domain model." },
          { title: "How it works", body: "An engine registers with the Control Plane, receives an execution context, advertises capabilities, and exchanges structured messages. Health, retries, routing, and idempotency remain visible operational concepts rather than hidden side effects.", bullets: ["Typed engine and instance identity", "Capability-aware routing and lifecycle", "Explicit artifacts, events, health, and recovery"] },
          { title: "Design decisions", body: "Keep the core domain-agnostic, make boundaries explicit, and prefer evidence-driven evolution through unit and integration coverage. This lets specialist engines change without destabilizing the platform." },
        ],
        diagram: { title: "Core execution flow", description: "Shared infrastructure surrounds domain engines instead of absorbing their meaning.", nodes: [{ label: "Caller", detail: "Submits a capability request or domain operation." }, { label: "Control Plane", detail: "Resolves identity, capability, route, lifecycle, and execution context." }, { label: "Specialist engine", detail: "Executes domain logic and returns typed results or artifacts." }] },
        links: [{ label: "GitHub", href: "https://github.com/nizaam-islamic-ecosystem/core" }, { label: "crates.io", href: "https://crates.io/crates/nizaam-core" }, { label: "docs.rs", href: "https://docs.rs/nizaam-core" }]
      },
      {
        id: "indexing", label: "Indexing Engine", summary: "A domain-focused engine for building, publishing, and querying durable indexes.",
        details: ["The Indexing Engine owns indexing meaning: index definitions, families, keys, entries, versions, similarity metadata, query planning, retrieval, and index events.", "It treats build, update, rebuild, publication, consistency, integrity, capacity, configuration, and recovery as explicit workflows that can be observed, tested, and resumed.", "Nizaam Core supplies the shared execution and communication substrate; Indexing decides how data becomes searchable and how retrieval behaves."],
        sections: [
          { title: "Purpose", body: "Provide a dependable indexing boundary for Islamic data and future retrieval systems, where correctness and provenance matter as much as query speed." },
          { title: "Architecture", body: "Index definitions describe what is being built; entries and versions capture the indexed state; query planning and retrieval expose that state to callers. Core handles coordination while the engine owns index semantics." },
          { title: "How it works", body: "A build or update request enters an explicit workflow, produces versioned index state, emits operational events, and can be validated before publication. Queries resolve against a known index version instead of an implicit mutable cache.", bullets: ["Version-aware index lifecycle", "Explicit publication and consistency boundaries", "Recovery and integrity checks as first-class operations"] },
          { title: "Evidence", body: "The repository's test surface includes hundreds of Indexing Engine test functions, giving the long-term system work a concrete correctness feedback loop." },
        ],
        diagram: { title: "Index lifecycle", description: "Indexing is modeled as a controlled lifecycle rather than a single write function.", nodes: [{ label: "Define", detail: "Describe fields, keys, families, and retrieval semantics." }, { label: "Build and validate", detail: "Process data, check integrity, and create a versioned state." }, { label: "Publish and query", detail: "Expose an approved version for dependable retrieval." }] },
        links: [{ label: "GitHub", href: "https://github.com/nizaam-islamic-ecosystem/indexing-engine" }, { label: "crates.io", href: "https://crates.io/crates/nizaam-indexing-engine" }, { label: "docs.rs", href: "https://docs.rs/nizaam-indexing-engine" }]
      },
      {
        id: "knowledge-graph", label: "Knowledge Graph Engine", summary: "An active-development engine for connecting entities, relationships, and provenance.",
        details: ["The Knowledge Graph Engine is the next specialist boundary in the Nizaam ecosystem, focused on connected knowledge rather than flat documents or isolated records.", "Its purpose is to represent entities, typed relationships, provenance, and graph-oriented retrieval in a way that can cooperate with Core and later domain engines.", "The repository is still under active development, so the case study presents the current architectural direction rather than claiming a finished public API."],
        sections: [
          { title: "Purpose", body: "Make relationships and provenance first-class so future Islamic knowledge products can explain how concepts, sources, people, works, and interpretations connect." },
          { title: "Architecture", body: "Graph semantics remain inside the specialist engine. Core remains responsible for shared identity, transport, lifecycle, observability, and execution boundaries, allowing the graph model to evolve independently." },
          { title: "How it works", body: "The expected flow is ingestion of entities and relationships, validation of provenance and types, persistence of graph state, and graph-aware retrieval for downstream engines. The implementation is intentionally evolving as the data model becomes clearer." },
          { title: "Development status", body: "This is an active long-term build. The important engineering constraint is preserving a clean boundary now so graph capabilities can grow without coupling every other Nizaam engine to an unfinished model." },
        ],
        diagram: { title: "Knowledge graph direction", description: "A graph engine turns sourced entities and relationships into reusable knowledge primitives.", nodes: [{ label: "Sources", detail: "Collect referenced works, entities, and provenance." }, { label: "Graph model", detail: "Validate typed nodes, relationships, and lineage." }, { label: "Graph retrieval", detail: "Serve connected context to future domain workflows." }] },
        links: [{ label: "GitHub", href: "https://github.com/nizaam-islamic-ecosystem/knowledge-graph-engine" }]
      },
    ],
  },
  {
    slug: "ghost-ai", title: "Ghost AI", eyebrow: "Collaborative system design workspace", summary: "A collaborative workspace that turns plain-English ideas into editable architecture diagrams and technical specifications.", problem: "System design tools often separate the visual model from the conversation, collaboration, and execution around it.", solution: "Ghost AI combines authenticated projects, invite-based access, a shared React Flow canvas, Liveblocks presence and state, durable Trigger.dev generation tasks, Gemini through the Vercel AI SDK, Prisma/Postgres metadata, and Vercel Blob artifacts.", categories: ["frontend", "full-stack"], tags: ["AI", "Real-time", "React Flow"], metrics: ["Shared canvas", "Durable AI tasks", "Markdown specifications"],     stack: ["Next.js 16", "React 19", "TypeScript", "Clerk", "Prisma", "Liveblocks", "Trigger.dev", "Gemini", "Vercel Blob"], featured: true, links: [{ label: "GitHub", href: "https://github.com/0xshariq/ghost-ai" }],
    tabs: [
      { id: "workspace", label: "Workspace", summary: "A shared canvas where product ideas become editable system models.", details: ["Ghost AI combines a collaborative React Flow canvas with project access control, presence, and persistent workspace state.", "Users can move from a plain-English idea to a visual architecture that remains editable instead of receiving a static generated image."], sections: [{ title: "Purpose", body: "Reduce the gap between discussing a system and communicating its structure to a team." }, { title: "How it works", body: "Authenticated users open a project, collaborate on the canvas, and persist the evolving model as shared state." }], diagram: { title: "Collaboration flow", nodes: [{ label: "Idea", detail: "Describe a product or system in natural language." }, { label: "Shared canvas", detail: "Edit nodes and relationships together in real time." }, { label: "Specification", detail: "Generate a durable technical artifact from the model." }] }, links: [{ label: "GitHub", href: "https://github.com/0xshariq/ghost-ai" }] },
      { id: "realtime", label: "Real-time layer", summary: "Presence and shared state keep every collaborator aligned.", details: ["Liveblocks provides collaborative presence and shared workspace state around the React Flow editor.", "The application separates transient collaboration concerns from durable project metadata and generated artifacts."], sections: [{ title: "Architecture", body: "The browser renders the graph while Liveblocks coordinates presence and shared state. Prisma/Postgres stores application metadata and Vercel Blob stores generated files." }, { title: "Reliability", body: "Keeping collaboration state, database metadata, and artifacts in explicit layers makes the product easier to recover and reason about." }] },
      { id: "ai-workflows", label: "AI workflows", summary: "Durable generation turns a canvas into useful engineering output.", details: ["Trigger.dev runs long-lived generation tasks so AI work can retry and complete outside a single request lifecycle.", "Gemini is accessed through the Vercel AI SDK to turn system context into markdown specifications and related technical output."], sections: [{ title: "Working model", body: "A user action starts a durable task, the task assembles the current project context, and the result is persisted as an inspectable artifact." }, { title: "Design decision", body: "Durable background execution avoids tying generation to a browser tab or short-lived HTTP request." }] },
    ],
  },
  {
    slug: "coinpulse", title: "CoinPulse", eyebrow: "Real-time market data product", summary: "A lightweight cryptocurrency dashboard with live Binance prices, CoinGecko data, interactive charts, and bounded client state.", problem: "Streaming dashboards become expensive and unreliable when every view opens its own connection or keeps unbounded state.", solution: "CoinPulse combines Binance WebSocket updates with CoinGecko metadata, shared connection management, chart-oriented data, and resilient client-side streaming behavior.", categories: ["frontend", "backend", "full-stack"], tags: ["Real-time", "WebSockets", "Performance"], metrics: ["Live price tracking", "Interactive charts", "Binance + CoinGecko"], stack: ["TypeScript", "Next.js", "Binance WebSocket", "CoinGecko", "Charts"], featured: true, links: [{ label: "GitHub", href: "https://github.com/0xshariq/coinpulse" }], tabs: [{ id: "pipeline", label: "Data pipeline", summary: "Shared market-data plumbing for live prices and metadata.", details: ["CoinPulse combines Binance WebSocket updates with CoinGecko metadata in one dashboard workflow.", "A shared connection manager prevents each view from opening its own stream."], sections: [{ title: "Purpose", body: "Make live market data useful without turning every component into a connection manager." }, { title: "Reliability", body: "Bounded client state, reconnect behavior, and shared subscriptions keep streaming behavior predictable." }], diagram: { title: "Market data flow", nodes: [{ label: "Providers", detail: "Binance streams prices; CoinGecko supplies metadata." }, { label: "Shared client", detail: "Pools subscriptions and handles reconnect behavior." }, { label: "Dashboard", detail: "Feeds charts and current market views." }] } }] },
  {
    slug: "mediaproc", title: "MediaProc", eyebrow: "Open-source developer tooling", summary: "A universal media-processing CLI with built-in and installable plugins for images, video, audio, documents, and automation.", problem: "Media workflows are fragmented across one-off tools and inconsistent interfaces.", solution: "MediaProc gives media workflows one composable CLI surface with plugin management, built-in command families, and an architecture designed for community extensions.", categories: ["backend", "full-stack"], tags: ["TypeScript", "CLI", "Open Source"], metrics: ["47 image commands", "8 video commands", "6 audio commands"], stack: ["TypeScript", "Node.js", "CLI", "Plugin architecture"], featured: true, links: [{ label: "Docs", href: "https://docs-mediaproc.vercel.app/" }, { label: "GitHub", href: "https://github.com/0xshariq/mediaproc" }], tabs: [{ id: "cli", label: "CLI architecture", summary: "One composable command surface for media workflows.", details: ["MediaProc groups image, video, audio, and document operations behind a consistent CLI experience.", "Built-in commands cover common workflows while plugins allow the ecosystem to grow without bloating the core."], sections: [{ title: "Purpose", body: "Replace fragmented one-off scripts with a discoverable, extensible tool that can serve local workflows and community extensions." }, { title: "Working model", body: "The CLI resolves a command, loads the relevant built-in or installed plugin, validates input, and runs the media operation through a shared interface." }], diagram: { title: "Plugin flow", nodes: [{ label: "Command", detail: "User selects a media operation and options." }, { label: "Resolver", detail: "MediaProc finds the built-in command or installed plugin." }, { label: "Processor", detail: "The selected implementation transforms the input." }] } }] },
  {
    slug: "skew-news", title: "Skew News", eyebrow: "Automated ingestion and analysis", summary: "A full-stack AI news platform that scrapes articles, analyzes sentiment and political framing, and surfaces a bias breakdown.", problem: "News intelligence needs reliable source ingestion and analysis context before a reader opens the story.", solution: "Skew turns article collection into a traceable pipeline that extracts real sources, applies AI analysis, and presents framing and sentiment signals alongside the article.", categories: ["backend", "full-stack"], tags: ["AI", "Pipelines", "News"], metrics: ["Multi-source scraping", "Sentiment analysis", "Political framing"], stack: ["Next.js", "TypeScript", "Gemini", "Web scraping"], featured: true, links: [{ label: "GitHub", href: "https://github.com/0xshariq/skew-news" }], tabs: [{ id: "pipeline", label: "Analysis pipeline", summary: "A traceable ingestion and analysis workflow for news context.", details: ["Skew News collects articles from multiple sources, extracts content, persists results, and applies Gemini analysis.", "Scheduled processing keeps ingestion separate from the reader-facing experience."], sections: [{ title: "Purpose", body: "Give readers source context, sentiment signals, and political framing alongside the article instead of hiding analysis behind a black box." }, { title: "Working model", body: "Source ingestion produces durable article records; extraction normalizes content; analysis attaches interpretable signals to the stored result." }], diagram: { title: "News pipeline", nodes: [{ label: "Sources", detail: "Scrape and ingest articles from multiple publishers." }, { label: "Processing", detail: "Extract content and run scheduled Gemini analysis." }, { label: "Reader", detail: "Present article context and framing signals." }] } }] },
  {
    slug: "bookified", title: "Bookified", eyebrow: "Full-stack reading workflow", summary: "An AI-powered reading platform that turns PDFs into interactive books with real-time voice conversations.", problem: "Reading tools usually treat a document as a file instead of a living, searchable, conversational experience.", solution: "Bookified connects authenticated uploads, PDF parsing, MongoDB persistence, Blob-backed assets, and Vapi voice interaction into one reading workflow.", categories: ["frontend", "full-stack"], tags: ["PDF", "Voice", "Full Stack"], metrics: ["Voice conversations", "PDF ingestion", "Authenticated workflows"], stack: ["Next.js 16", "Vapi", "MongoDB", "Vercel Blob"], featured: true, links: [{ label: "GitHub", href: "https://github.com/0xshariq/bookified" }], tabs: [{ id: "reading", label: "Reading workflow", summary: "A document pipeline that turns uploaded PDFs into conversational reading sessions.", details: ["Bookified connects authenticated uploads, PDF parsing, MongoDB persistence, Blob-backed assets, and Vapi voice interaction.", "The workflow keeps the original document, parsed representation, and conversation experience connected to the user's account."], sections: [{ title: "Purpose", body: "Treat a PDF as an interactive reading surface rather than a file that users can only open and scroll." }, { title: "Working model", body: "An authenticated upload is stored, parsed into usable reading content, persisted with metadata, and made available to voice-driven interaction." }], diagram: { title: "Document flow", nodes: [{ label: "Upload", detail: "Authenticated user adds a PDF and its metadata." }, { label: "Parse and store", detail: "Content is extracted while assets remain in Blob storage." }, { label: "Read and talk", detail: "The app presents the book and connects Vapi conversation." }] } }] },
]

export const categoryLabels: Record<PortfolioCategory, string> = { frontend: "Frontend", backend: "Backend", "full-stack": "Full Stack" }
export const featuredProjects = portfolioProjects.filter((project) => project.featured)
export const currentProject = portfolioProjects.find((project) => project.current)
export const getProject = (slug: string) => portfolioProjects.find((project) => project.slug === slug)
export const projectsForCategory = (category: PortfolioCategory) => portfolioProjects.filter((project) => project.categories.includes(category))
export const resumeUrl = "/resume.pdf"
