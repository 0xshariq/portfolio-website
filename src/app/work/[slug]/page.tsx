import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { NizaamTabs } from "@/components/nizaam-tabs"
import { getProject, portfolioProjects } from "@/data/portfolio"

export function generateStaticParams() {
  return portfolioProjects.map((project) => ({ slug: project.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug)
  return project ? { title: project.title, description: project.summary } : {}
}

function CaseStudyDiagram({ title, description, nodes }: { title: string; description?: string; nodes: { label: string; detail: string }[] }) {
  return (
    <div className="mt-8 rounded-2xl border border-border bg-background/70 p-5 sm:p-6" aria-label={title}>
      <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{title}</p>
      {description ? <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{description}</p> : null}
      <div className="mt-6 grid gap-3 sm:grid-cols-3">
        {nodes.map((node, index) => (
          <div key={node.label} className="architecture-node relative rounded-xl border border-border bg-card p-4">
            <span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span>
            <h3 className="mt-3 font-medium">{node.label}</h3>
            <p className="mt-2 text-sm leading-6 text-muted-foreground">{node.detail}</p>
            {index < nodes.length - 1 ? <span className="architecture-arrow hidden sm:block" aria-hidden="true">→</span> : null}
          </div>
        ))}
      </div>
    </div>
  )
}

export default async function WorkPage({ params }: { params: Promise<{ slug: string }> }) {
  const project = getProject((await params).slug)
  if (!project) notFound()

  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-16 pb-24 pt-8 sm:pt-16">
      <Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> Back home</Link>
      <header className="max-w-4xl">
        <p className="eyebrow">{project.eyebrow}</p>
        <h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">{project.title}</h1>
        <div className="mt-6 flex flex-wrap gap-2">{project.tags.map((tag) => <Badge key={tag} variant="secondary">{tag}</Badge>)}</div>
        <p className="mt-6 max-w-3xl text-xl leading-8 text-muted-foreground">{project.summary}</p>
        <div className="mt-8 flex flex-wrap gap-3">{project.links.map((link) => <Link key={link.href + link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm hover:bg-muted">{link.label}<ArrowUpRight className="size-4" /></Link>)}</div>
      </header>

      {project.slug === "nizaam" && project.tabs ? <NizaamTabs tabs={project.tabs} /> : project.tabs ? (
        <section className="flex flex-col gap-8">
          <div className="border-b border-border pb-3">
            <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Explore the architecture</p>
            <nav className="mt-4 flex flex-wrap gap-2" aria-label={`${project.title} systems`}>
              {project.tabs.map((tab, index) => <a key={tab.id} href={`#${tab.id}`} className={`rounded-lg border px-4 py-3 text-sm transition-colors hover:bg-muted ${index === 0 ? "border-accent/60 bg-muted" : "border-border"}`} aria-label={`Jump to ${tab.label}`}>{tab.label}</a>)}
            </nav>
          </div>
          {project.tabs.map((tab, index) => (
            <article id={tab.id} key={tab.id} className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 sm:p-10">
              <div className="flex flex-col gap-8">
                <div className="max-w-3xl">
                  <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{String(index + 1).padStart(2, "0")} · {tab.label}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">{tab.summary}</h2>
                  <ul className="mt-7 flex flex-col gap-4">{tab.details.map((detail) => <li key={detail} className="flex items-start gap-3 leading-7 text-muted-foreground"><CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />{detail}</li>)}</ul>
                </div>
                {tab.diagram ? <CaseStudyDiagram {...tab.diagram} /> : null}
                {tab.sections?.length ? <div className="grid gap-6 border-t border-border pt-8 md:grid-cols-2">{tab.sections.map((section) => <section key={section.title}><h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{section.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{section.body}</p>{section.bullets?.length ? <ul className="mt-4 flex flex-col gap-3">{section.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />{bullet}</li>)}</ul> : null}</section>)}</div> : null}
                <div className="flex flex-wrap gap-2 border-t border-border pt-6">{tab.links?.map((link) => <Link key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm hover:bg-muted">{link.label}<ArrowUpRight className="size-4" /></Link>)}</div>
              </div>
            </article>
          ))}
        </section>
      ) : (
        <div className="grid gap-6 border-y border-border py-10 sm:grid-cols-2">{[["The problem", project.problem], ["The approach", project.solution]].map(([heading, body]) => <section key={heading}><h2 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{heading}</h2><p className="mt-4 max-w-lg leading-7">{body}</p></section>)}</div>
      )}

      <section className="grid gap-10 border-t border-border pt-10 lg:grid-cols-[1fr_0.8fr]"><div><h2 className="text-2xl font-semibold tracking-tight">Engineering evidence</h2><ul className="mt-6 flex flex-col gap-4">{project.metrics.map((metric) => <li key={metric} className="flex items-start gap-3 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-5 text-foreground" />{metric}</li>)}</ul></div><div><h2 className="text-2xl font-semibold tracking-tight">Stack</h2><div className="mt-6 flex flex-wrap gap-2">{project.stack.map((item) => <Badge key={item} variant="outline">{item}</Badge>)}</div></div></section>
    </main>
  )
}
