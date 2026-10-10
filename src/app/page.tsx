import { ArrowUpRight, Code2, Github, Mail, MapPin, Terminal } from "lucide-react";
import Link from "next/link";
import { ProjectCard } from "@/components/project-card";
import { DATA } from "@/data/resume";

const featuredProjects = DATA.projects.slice(0, 6);
const toolkit = ["Rust", "Go", "TypeScript", "Next.js", "Node.js", "PostgreSQL", "Docker", "AI tooling"];

export default function Page() {
  return (
    <main className="mx-auto flex w-full max-w-5xl flex-col gap-24 pb-24 pt-8 sm:gap-32 sm:pt-16">
      <section id="home" className="grid gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
        <div className="flex flex-col gap-7">
          <div className="eyebrow"><span className="status-dot" /> Available for internships and collaborations</div>
          <div className="flex flex-col gap-5">
            <p className="font-mono text-sm text-muted-foreground">Hi, I'm Sharique.</p>
            <h1 className="max-w-3xl text-5xl font-semibold tracking-[-0.06em] text-balance sm:text-7xl">I build tools that make complex systems feel simple.</h1>
            <p className="max-w-xl text-lg leading-8 text-muted-foreground">Full-stack engineer and computer science student focused on developer tools, real-time products, and thoughtful interfaces. Currently exploring Rust, distributed systems, and AI-native workflows.</p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Link className="inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-transform hover:-translate-y-0.5" href="#projects">See selected work <ArrowUpRight className="size-4" /></Link>
            <Link className="inline-flex items-center gap-2 rounded-full border border-border px-5 py-3 text-sm font-medium transition-colors hover:bg-muted" href={`mailto:${DATA.contact.email}`}>Get in touch <Mail className="size-4" /></Link>
          </div>
        </div>
        <div className="code-panel hidden lg:block">
          <div className="flex items-center justify-between border-b border-border px-5 py-3 text-xs text-muted-foreground"><span>sharique.config</span><span>01</span></div>
          <pre className="overflow-x-auto p-5 text-sm leading-7"><code><span className="code-muted">const</span> engineer = {'{'}{"
"}  name: <span className="code-string">&quot;Sharique Chaudhary&quot;</span>,{'
'}  focus: [<span className="code-string">&quot;systems&quot;</span>, <span className="code-string">&quot;products&quot;</span>],{'
'}  basedIn: <span className="code-string">&quot;Mumbai, India&quot;</span>,{'
'}  learning: <span className="code-string">&quot;Rust + distributed systems&quot;</span>{"
"}{'}'};</code></pre>
        </div>
      </section>

      <section id="about" className="section-grid">
        <div className="section-label"><span>01</span><h2>About</h2></div>
        <div className="flex max-w-2xl flex-col gap-6"><p className="text-2xl leading-relaxed tracking-tight">I care about the layer where engineering quality meets human clarity.</p><p className="leading-7 text-muted-foreground">From a universal media CLI to terminal-native productivity tools, I enjoy working close to the problem. My work spans product engineering, open source, and the infrastructure that makes software dependable.</p><div className="flex items-center gap-2 text-sm text-muted-foreground"><MapPin className="size-4" /> Mumbai, India <span className="mx-1 text-border">/</span> B.Tech CSE, 2023–2027</div></div>
      </section>

      <section id="toolkit" className="section-grid">
        <div className="section-label"><span>02</span><h2>Toolkit</h2></div>
        <div className="flex max-w-2xl flex-wrap gap-2">{toolkit.map((skill) => <span key={skill} className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground transition-colors hover:border-foreground hover:text-foreground">{skill}</span>)}</div>
      </section>

      <section id="projects" className="flex flex-col gap-10">
        <div className="section-heading"><div><div className="section-kicker"><Code2 className="size-4" /> Selected work</div><h2 className="mt-3 text-3xl font-semibold tracking-tight sm:text-4xl">Projects with a point of view.</h2></div><Link href={DATA.contact.social.GitHub.url} target="_blank" rel="noreferrer" className="hidden items-center gap-2 text-sm text-muted-foreground hover:text-foreground sm:flex">All on GitHub <ArrowUpRight className="size-4" /></Link></div>
        <div className="grid gap-5 md:grid-cols-2">{featuredProjects.map((project) => <ProjectCard key={project.title} href={project.href} title={project.title} description={project.description} dates={project.dates} tags={project.technologies} image={project.image} video={project.video} links={project.links} />)}</div>
      </section>

      <section id="opensource" className="section-grid border-t border-border pt-10">
        <div className="section-label"><span>03</span><h2>Open source</h2></div>
        <div className="flex max-w-2xl flex-col gap-5"><div className="flex items-start justify-between gap-6"><div><div className="flex items-center gap-2 font-mono text-sm"><Terminal className="size-4" /> 0xshariq/mediaproc</div><p className="mt-2 leading-7 text-muted-foreground">A universal media-processing CLI with an extensible plugin architecture for images, video, audio, and documents.</p></div><Link href="https://github.com/0xshariq/mediaproc" target="_blank" rel="noreferrer" aria-label="View Mediaproc on GitHub" className="rounded-full border border-border p-2 transition-colors hover:bg-muted"><Github className="size-4" /></Link></div><div className="flex flex-wrap gap-2">{["TypeScript", "CLI", "Plugin architecture"].map((tag) => <span key={tag} className="rounded-full bg-muted px-3 py-1 font-mono text-xs text-muted-foreground">{tag}</span>)}</div></div>
      </section>

      <section id="contact" className="rounded-2xl border border-border bg-muted/40 p-7 sm:p-12"><div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between"><div className="max-w-xl"><div className="section-kicker"><Mail className="size-4" /> Contact</div><h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">Have a problem worth building around?</h2><p className="mt-4 leading-7 text-muted-foreground">I'm open to internships, collaborations, and conversations about developer tools and systems.</p></div><Link className="inline-flex w-fit items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background" href={`mailto:${DATA.contact.email}`}>Email me <ArrowUpRight className="size-4" /></Link></div></section>
    </main>
  );
}
