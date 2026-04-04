'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/foundation-os', label: 'Foundation OS' },
  { href: '/ascension', label: 'Ascension' },
  { href: '/about', label: 'About' },
]

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-cream/96 backdrop-blur-md shadow-[0_1px_0_rgba(44,44,44,0.06)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 h-18 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex flex-col leading-none group">
          <span className="font-playfair text-lg font-bold text-charcoal tracking-tight group-hover:text-teal transition-colors duration-300">
            Lola
          </span>
          <span className="label-caps text-[10px] tracking-[0.22em]">
            Systems Architect
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-inter text-sm transition-colors duration-200 relative group ${
                pathname === link.href
                  ? 'text-teal'
                  : 'text-charcoal/60 hover:text-charcoal'
              }`}
            >
              {link.label}
              <span
                className={`absolute -bottom-0.5 left-0 h-px bg-teal transition-all duration-300 ${
                  pathname === link.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`}
              />
            </Link>
          ))}
          <Link
            href="/book"
            className={`font-inter text-sm font-semibold px-5 py-2.5 rounded-full transition-all duration-300 ${
              pathname === '/book'
                ? 'bg-teal text-cream'
                : 'bg-charcoal text-cream hover:bg-teal hover:text-cream'
            }`}
          >
            Book a Call
          </Link>
        </div>

        {/* Mobile Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden relative w-10 h-10 flex flex-col justify-center items-center gap-1.5"
          aria-label={isOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isOpen}
        >
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 origin-center ${
              isOpen ? 'rotate-45 translate-y-[3px]' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 ${
              isOpen ? 'opacity-0 scale-x-0' : ''
            }`}
          />
          <span
            className={`block w-6 h-px bg-charcoal transition-all duration-300 origin-center ${
              isOpen ? '-rotate-45 -translate-y-[3px]' : ''
            }`}
          />
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <div className="bg-cream border-t border-sage/40 px-6 pt-4 pb-8 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`font-inter text-base py-3 border-b border-sage/30 flex items-center justify-between transition-colors duration-200 ${
                pathname === link.href
                  ? 'text-teal font-medium'
                  : 'text-charcoal/80 hover:text-charcoal'
              }`}
            >
              {link.label}
              {pathname === link.href && (
                <span className="w-1.5 h-1.5 rounded-full bg-teal" />
              )}
            </Link>
          ))}
          <Link
            href="/book"
            className="mt-4 btn-primary justify-center text-sm"
          >
            Book a Call →
          </Link>
        </div>
      </div>
    </header>
  )
}
