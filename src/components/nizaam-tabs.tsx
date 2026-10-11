"use client"

import Link from "next/link"
import { ArrowUpRight, CheckCircle2 } from "lucide-react"
import { useState } from "react"
import type { CaseStudyTab } from "@/data/portfolio"

export function NizaamTabs({ tabs }: { tabs: CaseStudyTab[] }) {
  const [activeId, setActiveId] = useState(tabs[0]?.id ?? "")
  const activeTab = tabs.find((tab) => tab.id === activeId) ?? tabs[0]
  if (!activeTab) return null

  return (
    <section className="flex flex-col gap-8" aria-label="Nizaam systems">
      <div className="border-b border-border pb-3">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">Explore the architecture</p>
        <div className="mt-4 flex flex-wrap gap-2" role="tablist" aria-label="Nizaam engines">
          {tabs.map((tab) => <button key={tab.id} type="button" role="tab" aria-selected={tab.id === activeId} aria-controls={`panel-${tab.id}`} className={`rounded-lg border px-4 py-3 text-sm transition-colors hover:bg-muted ${tab.id === activeId ? "border-accent/60 bg-muted text-foreground" : "border-border text-muted-foreground"}`} onClick={() => setActiveId(tab.id)}>{tab.label}</button>)}
        </div>
      </div>
      <article id={`panel-${activeTab.id}`} role="tabpanel" aria-labelledby={activeTab.id} className="scroll-mt-24 rounded-2xl border border-border bg-card p-6 sm:p-10">
        <p className="font-mono text-xs uppercase tracking-[0.16em] text-accent">{activeTab.label}</p>
        <h2 className="mt-3 max-w-3xl text-2xl font-semibold tracking-tight sm:text-3xl">{activeTab.summary}</h2>
        <ul className="mt-7 flex max-w-3xl flex-col gap-4">{activeTab.details.map((detail) => <li key={detail} className="flex items-start gap-3 leading-7 text-muted-foreground"><CheckCircle2 className="mt-1 size-5 shrink-0 text-accent" />{detail}</li>)}</ul>
        <div className="mt-8 flex flex-wrap gap-2 border-t border-border pt-6">{activeTab.links?.map((link) => <Link key={link.href} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-border px-3 py-2 text-sm hover:bg-muted">{link.label}<ArrowUpRight className="size-4" /></Link>)}</div>
      </article>
    </section>
  )
}
