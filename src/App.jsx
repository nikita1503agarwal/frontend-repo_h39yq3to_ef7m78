import { useEffect, useState } from 'react'
import { ArrowRight, Github, Linkedin, Mail, Globe, FolderGit2, Code2, Star } from 'lucide-react'
import Navbar from './components/Navbar'

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-200">
      {children}
    </span>
  )
}

function ProjectCard({ title, description, tags, link, github }) {
  return (
    <div className="group relative rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md">
      <div className="mb-4 flex items-center justify-between">
        <div className="flex items-center gap-2 text-gray-700">
          <FolderGit2 className="h-5 w-5 text-blue-600" />
          <h3 className="text-lg font-semibold">{title}</h3>
        </div>
        <div className="flex items-center gap-2">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="rounded p-2 text-gray-600 hover:bg-gray-100">
              <Github className="h-5 w-5" />
            </a>
          )}
          {link && (
            <a href={link} target="_blank" rel="noreferrer" className="rounded p-2 text-gray-600 hover:bg-gray-100">
              <Globe className="h-5 w-5" />
            </a>
          )}
        </div>
      </div>
      <p className="mb-4 text-sm text-gray-600">{description}</p>
      <div className="flex flex-wrap gap-2">
        {tags?.map((t) => (
          <Badge key={t}>{t}</Badge>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-black/5" />
    </div>
  )
}

function SkillItem({ icon: Icon, label }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-700 shadow-sm">
      <Icon className="h-4 w-4 text-blue-600" />
      {label}
    </div>
  )
}

export default function App() {
  const [year, setYear] = useState(new Date().getFullYear())
  useEffect(() => {
    const y = new Date().getFullYear()
    if (y !== year) setYear(y)
  }, [year])

  const projects = [
    {
      title: 'Interactive UI Components',
      description: 'A collection of accessible, animated components built with React, Tailwind, and Radix.',
      tags: ['React', 'Tailwind', 'Radix UI', 'Framer Motion'],
      link: '#',
      github: '#',
    },
    {
      title: 'Design System Starter',
      description: 'Token-driven system with theming, typography scale, and component primitives.',
      tags: ['Design Tokens', 'Storybook', 'CSS Variables'],
      link: '#',
      github: '#',
    },
    {
      title: 'Portfolio Template',
      description: 'Optimized, SEO-friendly portfolio template with dark mode and CMS-ready sections.',
      tags: ['Vite', 'React', 'Tailwind'],
      link: '#',
      github: '#',
    },
  ]

  return (
    <div className="min-h-screen scroll-smooth bg-gradient-to-br from-white to-blue-50 text-gray-900">
      <Navbar />

      {/* Hero */}
      <section id="home" className="relative flex min-h-[90vh] items-center pt-24">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(600px_circle_at_20%_20%,rgba(59,130,246,0.08),transparent),radial-gradient(600px_circle_at_80%_0%,rgba(168,85,247,0.08),transparent)]" />
        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:grid-cols-2 lg:px-8">
          <div>
            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-700">
              <Star className="h-3.5 w-3.5" /> Available for freelance work
            </div>
            <h1 className="mb-4 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
              Front‑End Developer crafting delightful interfaces
            </h1>
            <p className="mb-8 text-base text-gray-600 sm:text-lg">
              I design and build accessible, responsive web experiences with React, TypeScript, and Tailwind. I care about clean code, performance, and micro‑interactions that feel great.
            </p>
            <div className="flex flex-wrap items-center gap-3">
              <a href="#projects" className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-white shadow hover:bg-blue-700">
                View Projects <ArrowRight className="h-4 w-4" />
              </a>
              <a href="#contact" className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-2 text-gray-800 hover:bg-gray-50">
                Contact Me
              </a>
            </div>
            <div className="mt-6 flex flex-wrap items-center gap-2 text-xs text-gray-600">
              <Badge>React</Badge>
              <Badge>TypeScript</Badge>
              <Badge>Tailwind CSS</Badge>
              <Badge>Accessibility</Badge>
            </div>
          </div>
          <div className="relative">
            <div className="mx-auto h-64 w-64 rounded-2xl bg-gradient-to-br from-blue-600 to-purple-600 p-1 sm:h-80 sm:w-80">
              <div className="h-full w-full rounded-2xl bg-white p-6">
                <div className="flex h-full flex-col items-center justify-center text-center">
                  <Code2 className="mb-4 h-10 w-10 text-blue-600" />
                  <p className="text-sm text-gray-600">Building UI with</p>
                  <p className="text-lg font-semibold">React • Tailwind • Framer</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="relative py-20">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-start gap-10 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-bold">About Me</h2>
              <p className="mt-2 text-sm text-gray-600">A quick summary</p>
            </div>
            <div className="md:col-span-2">
              <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
                <p className="text-gray-700">
                  I’m a front‑end developer focused on crafting performant, accessible web apps. I love design systems, component architecture, and creating interfaces that users enjoy. I collaborate closely with designers and back‑end engineers to ship product‑ready features.
                </p>
                <ul className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
                  <li className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">5+ years building SPAs with React</li>
                  <li className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">Strong with Tailwind and modern CSS</li>
                  <li className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">Accessibility and semantics first</li>
                  <li className="rounded-lg bg-gray-50 p-3 text-sm text-gray-700">Performance budgets and best practices</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="relative bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold">Selected Projects</h2>
              <p className="mt-1 text-sm text-gray-600">A few things I’ve built recently</p>
            </div>
            <a href="#contact" className="hidden rounded-lg border border-gray-300 bg-white px-4 py-2 text-sm text-gray-800 hover:bg-gray-50 md:inline-flex">
              Start a project
            </a>
          </div>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {projects.map((p) => (
              <ProjectCard key={p.title} {...p} />
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="relative py-20">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <h2 className="mb-6 text-2xl font-bold">Core Skills</h2>
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
            <SkillItem icon={Code2} label="React / Hooks" />
            <SkillItem icon={Code2} label="TypeScript" />
            <SkillItem icon={Code2} label="Tailwind CSS" />
            <SkillItem icon={Code2} label="Framer Motion" />
            <SkillItem icon={Code2} label="Accessibility (a11y)" />
            <SkillItem icon={Code2} label="Testing (RTL)" />
            <SkillItem icon={Code2} label="State Mgmt" />
            <SkillItem icon={Code2} label="Performance" />
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative py-20">
        <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow-sm">
            <div className="mb-6 flex items-center gap-3">
              <Mail className="h-5 w-5 text-blue-600" />
              <h2 className="text-xl font-semibold">Let’s work together</h2>
            </div>
            <p className="mb-6 text-gray-600">
              I’m open to freelance and full‑time opportunities. Send a quick note and I’ll get back to you.
            </p>
            <form action="mailto:you@example.com" method="post" encType="text/plain" className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <input name="name" required placeholder="Your name" className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500" />
              <input type="email" name="email" required placeholder="Your email" className="rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500" />
              <input name="subject" placeholder="Subject" className="sm:col-span-2 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500" />
              <textarea name="message" required placeholder="Message" rows="4" className="sm:col-span-2 rounded-lg border border-gray-300 px-4 py-2 outline-none focus:border-blue-500" />
              <button type="submit" className="inline-flex items-center justify-center gap-2 rounded-lg bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700 sm:col-span-2">
                Send Message <ArrowRight className="h-4 w-4" />
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-200 bg-white/60 py-6">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-4 text-sm text-gray-600 sm:flex-row sm:px-6 lg:px-8">
          <p>© {year} Your Name. All rights reserved.</p>
          <div className="flex items-center gap-2">
            <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded p-2 hover:bg-gray-100"><Github className="h-4 w-4" /></a>
            <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded p-2 hover:bg-gray-100"><Linkedin className="h-4 w-4" /></a>
            <a href="mailto:you@example.com" className="rounded p-2 hover:bg-gray-100"><Mail className="h-4 w-4" /></a>
          </div>
        </div>
      </footer>
    </div>
  )
}
