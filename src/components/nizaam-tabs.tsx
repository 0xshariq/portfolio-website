"use client"

import Link from "next/link"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { useRef, useState } from "react"
import type { CaseStudyTab } from "@/data/portfolio"

export function NizaamTabs({ tabs }: { tabs: CaseStudyTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "")
  const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({})
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0]
  if (!activeTab) return null
  const diagram = activeTab.diagram

  return (
    <section className="flex flex-col gap-8" aria-label="Nizaam systems">
      <div className="border-b border-border pb-3">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Explore the architecture</p>
        <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Nizaam engines">
          {tabs.map((tab, index) => {
            const tabId = `tab-${tab.id}`
            const panelId = `panel-${tab.id}`
            return (
              <button
                key={tab.id}
                ref={(element) => { tabRefs.current[tab.id] = element }}
                id={tabId}
                type="button"
                role="tab"
                aria-selected={tab.id === activeId}
                aria-controls={panelId}
                tabIndex={tab.id === activeId ? 0 : -1}
                className={`rounded-lg border px-4 py-3 text-sm transition-colors hover:bg-muted ${tab.id === activeId ? "border-accent/60 bg-muted text-foreground" : "border-border text-muted-foreground"}`}
                onClick={() => setActiveId(tab.id)}
                onKeyDown={(event) => {
                  if (event.key === "ArrowRight" || event.key === "ArrowDown" || event.key === "ArrowLeft" || event.key === "ArrowUp") {
                    event.preventDefault()
                    const direction = event.key === "ArrowRight" || event.key === "ArrowDown" ? 1 : -1
                    const nextIndex = (index + direction + tabs.length) % tabs.length
                    tabRefs.current[tabs[nextIndex].id]?.focus()
                  } else if (event.key === "Enter" || event.key === " ") {
                    event.preventDefault()
                    setActiveId(tab.id)
                  }
                }}
              >
                {tab.label}
              </button>
            )
          })}
        </div>
      </div>
      <article id={`panel-${activeTab.id}`} role="tabpanel" aria-labelledby={`tab-${activeTab.id}`} className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{activeTab.label}</p>
        <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{activeTab.summary}</h2>
        <ul className="mt-7 flex max-w-3xl flex-col gap-4">{activeTab.details.map((detail) => <li key={detail} className="flex items-start gap-3 leading-7 text-muted-foreground"><CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />{detail}</li>)}</ul>
        {diagram ? <div className="mt-8 rounded-2xl border border-border bg-background/70 p-5 sm:p-6" aria-label={diagram.title}><p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{diagram.title}</p>{diagram.description ? <p className="mt-3 max-w-2xl text-sm leading-6 text-muted-foreground">{diagram.description}</p> : null}<div className="mt-6 grid gap-3 sm:grid-cols-3">{diagram.nodes.map((node, index) => <div key={node.label} className="architecture-node relative rounded-xl border border-border bg-card p-4"><span className="font-mono text-xs text-accent">{String(index + 1).padStart(2, "0")}</span><h3 className="mt-3 font-medium">{node.label}</h3><p className="mt-2 text-sm leading-6 text-muted-foreground">{node.detail}</p>{index < diagram.nodes.length - 1 ? <span className="architecture-arrow hidden sm:block" aria-hidden="true">→</span> : null}</div>)}</div></div> : null}
        {activeTab.sections?.length ? <div className="mt-8 grid gap-6 border-t border-border pt-8 md:grid-cols-2">{activeTab.sections.map((section) => <section key={section.title}><h3 className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{section.title}</h3><p className="mt-3 leading-7 text-muted-foreground">{section.body}</p>{section.bullets?.length ? <ul className="mt-4 flex flex-col gap-3">{section.bullets.map((bullet) => <li key={bullet} className="flex items-start gap-3 text-sm leading-6 text-muted-foreground"><CheckCircle2 className="mt-0.5 size-4 shrink-0 text-accent" />{bullet}</li>)}</ul> : null}</section>)}</div> : null}
        <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">{activeTab.links?.map((link) => <Link key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm hover:bg-muted">{link.label}<ArrowUpRight className="size-4" /></Link>)}</div>
      </article>
    </section>
  )
}
