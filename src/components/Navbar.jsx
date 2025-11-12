import { useState, useEffect } from 'react'
import { Github, Linkedin, Mail, Menu, X } from 'lucide-react'

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 8)
    }
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  const LinkItem = ({ href, children }) => (
    <a href={href} onClick={close} className="block rounded-lg px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-blue-600">
      {children}
    </a>
  )

  return (
    <header className={`fixed inset-x-0 top-0 z-50 border-b border-white/50 bg-white/70 backdrop-blur transition-shadow ${scrolled ? 'shadow-sm' : ''}`}>
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#home" onClick={close} className="flex items-center gap-2">
          <div className="h-7 w-7 rounded-md bg-gradient-to-br from-blue-600 to-purple-600" />
          <span className="text-sm font-semibold">Your Name</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden gap-6 md:flex">
          <a href="#about" className="text-sm font-medium text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" className="text-sm font-medium text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#skills" className="text-sm font-medium text-gray-700 hover:text-blue-600">Skills</a>
          <a href="#contact" className="text-sm font-medium text-gray-700 hover:text-blue-600">Contact</a>
        </nav>

        {/* Desktop social */}
        <div className="hidden items-center gap-2 md:flex">
          <a href="https://github.com/" target="_blank" rel="noreferrer" className="rounded p-2 hover:bg-gray-100" aria-label="GitHub"><Github className="h-5 w-5" /></a>
          <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="rounded p-2 hover:bg-gray-100" aria-label="LinkedIn"><Linkedin className="h-5 w-5" /></a>
          <a href="#contact" className="rounded p-2 hover:bg-gray-100" aria-label="Email"><Mail className="h-5 w-5" /></a>
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="inline-flex items-center rounded-md p-2 text-gray-700 hover:bg-gray-100 focus:outline-none md:hidden"
        >
          {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile menu panel */}
      {open && (
        <div className="md:hidden">
          <div className="mx-4 mb-4 rounded-xl border border-gray-200 bg-white shadow-sm">
            <div className="p-2">
              <LinkItem href="#about">About</LinkItem>
              <LinkItem href="#projects">Projects</LinkItem>
              <LinkItem href="#skills">Skills</LinkItem>
              <LinkItem href="#contact">Contact</LinkItem>
            </div>
            <div className="flex items-center gap-2 border-t border-gray-100 p-2">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="flex-1 rounded-lg p-2 text-center hover:bg-gray-100" aria-label="GitHub"><Github className="mx-auto h-5 w-5" /></a>
              <a href="https://linkedin.com/" target="_blank" rel="noreferrer" className="flex-1 rounded-lg p-2 text-center hover:bg-gray-100" aria-label="LinkedIn"><Linkedin className="mx-auto h-5 w-5" /></a>
              <a href="#contact" onClick={close} className="flex-1 rounded-lg p-2 text-center hover:bg-gray-100" aria-label="Email"><Mail className="mx-auto h-5 w-5" /></a>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
