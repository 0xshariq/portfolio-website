"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowUpRight, ExternalLink } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import type { PortfolioProject } from "@/data/portfolio"

export function PortfolioProjectCard({ project }: { project: PortfolioProject }) {
  return <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, amount: 0.15 }} transition={{ duration: 0.55, ease: "easeOut" }} className="h-full"><Card className="card-lift group flex h-full flex-col border-border/70 bg-card/60"><CardHeader className="gap-4"><div className="flex items-start justify-between gap-4"><p className="font-mono text-xs uppercase tracking-[0.16em] text-muted-foreground">{project.eyebrow}</p><ArrowUpRight className="size-4 shrink-0 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" /></div><CardTitle className="text-xl tracking-tight">{project.title}</CardTitle><p className="text-sm leading-6 text-muted-foreground">{project.summary}</p></CardHeader><CardContent className="flex flex-1 flex-col gap-5"><div className="flex flex-wrap gap-2">{project.metrics.slice(0, 2).map((metric) => <Badge key={metric} variant="secondary" className="font-mono text-[10px]">{metric}</Badge>)}</div><div className="mt-auto flex flex-wrap gap-2">{project.tags.map((tag) => <span key={tag} className="font-mono text-xs text-muted-foreground">#{tag}</span>)}</div></CardContent><CardFooter className="gap-3 border-t border-border/60 pt-4"><Link href={`/work/${project.slug}`} className="text-sm font-medium hover:underline">Read case study</Link>{project.links.map((link) => <Link key={link.href + link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground">{link.label}<ExternalLink className="size-3" /></Link>)}</CardFooter></Card></motion.div>
}
