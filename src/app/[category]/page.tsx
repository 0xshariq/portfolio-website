import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft } from "lucide-react"
import { PortfolioProjectCard } from "@/components/portfolio-project-card"
import { categoryLabels, projectsForCategory, type PortfolioCategory } from "@/data/portfolio"

export function generateStaticParams() { return Object.keys(categoryLabels).map((category) => ({ category })) }
export async function generateMetadata({ params }: { params: Promise<{ category: string }> }) { const category = (await params).category as PortfolioCategory; return categoryLabels[category] ? { title: categoryLabels[category], description: `Selected ${categoryLabels[category].toLowerCase()} engineering work by Sharique Chaudhary.` } : {} }
export default async function CategoryPage({ params }: { params: Promise<{ category: string }> }) { const category = (await params).category as PortfolioCategory; if (!categoryLabels[category]) notFound(); const projects = projectsForCategory(category); return <main className="mx-auto flex w-full max-w-5xl flex-col gap-12 pb-24 pt-8 sm:pt-16"><Link href="/" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"><ArrowLeft className="size-4" /> Back home</Link><header><p className="eyebrow">Project index / {categoryLabels[category]}</p><h1 className="mt-6 text-5xl font-semibold tracking-[-0.06em] sm:text-7xl">{categoryLabels[category]} work.</h1><p className="mt-6 max-w-2xl text-lg leading-8 text-muted-foreground">A curated view of the interfaces, services, and systems I have built in this area.</p></header><div className="grid gap-5 md:grid-cols-2">{projects.map((project) => <PortfolioProjectCard key={project.slug} project={project} />)}</div></main> }
