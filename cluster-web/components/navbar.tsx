"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { usePathname } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Icon components
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="4" x2="20" y1="12" y2="12"></line>
    <line x1="4" x2="20" y1="6" y2="6"></line>
    <line x1="4" x2="20" y1="18" y2="18"></line>
  </svg>
)

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18"></path>
    <path d="m6 6 12 12"></path>
  </svg>
)

// Navigation items
const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/services', label: 'Services' },
  { href: '/portfolio', label: 'Portfolio' },
  { href: '/process', label: 'Our Process' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const pathname = usePathname()

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile menu when route changes
  useEffect(() => {
    setIsOpen(false)
  }, [pathname])

  return (
    <header 
      className={cn(
        "fixed top-0 z-50 w-full transition-all duration-300",
        scrolled 
          ? "glassmorphism py-3 shadow-lg" 
          : "bg-transparent py-5"
      )}
    >
      <div className="container mx-auto flex items-center justify-between px-4">
        {/* Logo */}
        <Link href="/" className="relative z-10">
          <span className="sr-only">Cluster Creations</span>
          <div className="relative h-10 w-48">
            {/* Replace with actual logo */}
            <div className="flex items-center">
              <span className="text-xl font-bold tracking-tight text-gradient">
                CLUSTER <span className="font-light">CREATIONS</span>
              </span>
            </div>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:block">
          <ul className="flex items-center space-x-8">
            {navItems.map((item) => (
              <li key={item.href}>
                <Link 
                  href={item.href}
                  className={cn(
                    "relative text-sm font-medium transition-colors duration-300",
                    "hover:text-cyan",
                    pathname === item.href ? "text-cyan" : "text-foreground/80",
                    "after:absolute after:bottom-[-5px] after:left-0 after:h-[2px] after:w-0 after:bg-cyan after:transition-all after:duration-300",
                    pathname === item.href && "after:w-full"
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="/contact"
                className={cn(
                  "rounded-full border border-cyan bg-transparent px-6 py-2 text-sm font-medium text-cyan",
                  "transition-all duration-300 hover:bg-cyan hover:text-dark animate-pulse-glow"
                )}
              >
                Get Started
              </Link>
            </li>
          </ul>
        </nav>

        {/* Mobile menu button */}
        <button 
          className="relative z-10 lg:hidden" 
          onClick={() => setIsOpen(!isOpen)}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <CloseIcon /> : <MenuIcon />}
        </button>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 z-0 backdrop-blur-lg"
            >
              <motion.nav 
                initial={{ x: '100%' }}
                animate={{ x: 0 }}
                exit={{ x: '100%' }}
                transition={{ type: 'tween', duration: 0.3 }}
                className="absolute right-0 top-0 z-0 h-screen w-full max-w-xs bg-dark-400/90 p-8 shadow-xl"
              >
                <ul className="mt-20 flex flex-col space-y-6">
                  {navItems.map((item, i) => (
                    <motion.li 
                      key={item.href}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                    >
                      <Link 
                        href={item.href}
                        className={cn(
                          "block text-xl font-medium",
                          pathname === item.href ? "text-cyan" : "text-foreground/80"
                        )}
                      >
                        {item.label}
                      </Link>
                    </motion.li>
                  ))}
                  <motion.li
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: navItems.length * 0.1 }}
                  >
                    <Link
                      href="/contact"
                      className="block rounded border border-cyan bg-transparent px-6 py-3 text-center text-xl font-medium text-cyan transition-colors duration-300 hover:bg-cyan hover:text-dark"
                    >
                      Get Started
                    </Link>
                  </motion.li>
                </ul>
              </motion.nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  )
}