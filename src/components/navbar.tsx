import { Dock, DockIcon } from "@/components/magicui/dock"
import { ModeToggle } from "@/components/mode-toggle"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip"
import { DATA } from "@/data/resume"
import { cn } from "@/lib/utils"
import { BriefcaseBusiness, FileText, Github, Linkedin } from "lucide-react"
import Link from "next/link"

const links = [{ href: "/#work", label: "Work", icon: BriefcaseBusiness }, { href: "/open-source", label: "Open Source", icon: Github }, { href: "/resume.pdf", label: "Resume", icon: FileText }]

export default function Navbar() { return <div className="pointer-events-none fixed inset-x-0 bottom-0 z-30 mx-auto mb-4 flex h-full max-h-14"><div className="fixed inset-x-0 bottom-0 h-16 w-full bg-background/80 backdrop-blur-lg [-webkit-mask-image:linear-gradient(to_top,black,transparent)]" /><Dock className="pointer-events-auto relative z-50 mx-auto flex h-full min-h-full items-center bg-background px-1 [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)] dark:border dark:border-white/10"><DockIcon><Tooltip><TooltipTrigger asChild><Link href="/" aria-label="Home" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}><span className="font-mono text-xs">SC</span></Link></TooltipTrigger><TooltipContent>Home</TooltipContent></Tooltip></DockIcon>{links.map(({ href, label, icon: Icon }) => <DockIcon key={href}><Tooltip><TooltipTrigger asChild><Link href={href} aria-label={label} className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}><Icon className="size-4" /></Link></TooltipTrigger><TooltipContent>{label}</TooltipContent></Tooltip></DockIcon>)}<Separator orientation="vertical" className="h-full" /><DockIcon><Tooltip><TooltipTrigger asChild><Link href={DATA.contact.social.LinkedIn.url} target="_blank" rel="noreferrer" aria-label="LinkedIn" className={cn(buttonVariants({ variant: "ghost", size: "icon" }), "size-12")}><Linkedin className="size-4" /></Link></TooltipTrigger><TooltipContent>LinkedIn</TooltipContent></Tooltip></DockIcon><DockIcon><Tooltip><TooltipTrigger asChild><ModeToggle /></TooltipTrigger><TooltipContent>Theme</TooltipContent></Tooltip></DockIcon></Dock></div> }
