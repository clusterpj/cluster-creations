"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion } from "framer-motion"
import { cn } from "@/lib/utils"

// Typing effect for the hero headline
function TypingEffect({ text, delay = 0 }: { text: string; delay?: number }) {
  const [displayedText, setDisplayedText] = useState("")
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[index])
        setIndex(index + 1)
      }, 80)
      
      return () => clearTimeout(timeout)
    }
  }, [index, text])

  return (
    <span className="block">
      {displayedText}
      {index < text.length && (
        <span className="inline-block w-3 h-8 ml-1 bg-cyan animate-pulse" />
      )}
    </span>
  )
}

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background grid and cityscape */}
      <div className="absolute inset-0 bg-dark bg-grid">
        <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/80 to-transparent opacity-90" />
        
        {/* Cityscape silhouette */}
        <div className="absolute bottom-0 left-0 right-0 h-[30vh] bg-dark-500">
          <svg 
            className="absolute bottom-0 left-0 right-0 w-full text-dark-500"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,0 L0,100 L50,110 L100,90 L150,100 L200,80 L250,90 L300,70 L350,80 L400,60 L450,70 L500,50 L550,60 L600,40 L650,50 L700,30 L750,40 L800,20 L850,30 L900,10 L950,20 L1000,0 L1050,10 L1100,0 L1150,10 L1200,0 L1200,0 L0,0 Z"
              fill="currentColor"
            />
          </svg>
        </div>
        
        {/* Animated dots/stars background */}
        <div className="absolute inset-0">
          {[...Array(50)].map((_, i) => {
            const size = Math.random() * 3 + 1
            const top = Math.random() * 100
            const left = Math.random() * 100
            const animationDelay = Math.random() * 5
            
            return (
              <div
                key={i}
                className="absolute rounded-full bg-cyan/30"
                style={{
                  width: `${size}px`,
                  height: `${size}px`,
                  top: `${top}%`,
                  left: `${left}%`,
                  boxShadow: '0 0 10px rgba(0, 255, 255, 0.6)',
                  animation: `pulse-glow 3s infinite ease-in-out ${animationDelay}s`
                }}
              />
            )
          })}
        </div>
      </div>

      {/* Hero content */}
      <div className="container mx-auto px-4 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          <div className="lg:col-span-3">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                <TypingEffect text="Transform Your Digital Presence with" delay={0.5} />
                <span className="text-gradient text-shadow-glow">Cutting-Edge Solutions</span>
              </h1>
              
              <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl">
                Specializing in web development, graphic design, and AI solutions that empower businesses
                to reach their full potential in the digital landscape.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/services"
                  className={cn(
                    "px-8 py-3 rounded-full text-base font-medium",
                    "bg-gradient-to-r from-cyan to-blue-500 text-dark-500",
                    "hover:shadow-lg hover:shadow-cyan/20 transition-all duration-300"
                  )}
                >
                  Explore Our Services
                </Link>
                <Link
                  href="/contact"
                  className={cn(
                    "px-8 py-3 rounded-full text-base font-medium",
                    "bg-transparent border border-cyan text-cyan",
                    "hover:bg-cyan/10 transition-all duration-300",
                    "animate-pulse-glow"
                  )}
                >
                  Get in Touch
                </Link>
              </div>
              
              <div className="mt-12 flex flex-col sm:flex-row items-center gap-6">
                <p className="text-sm text-muted-foreground">Trusted by innovative brands:</p>
                <div className="flex flex-wrap gap-8">
                  {/* Replace with actual client logos */}
                  {[1, 2, 3, 4].map((i) => (
                    <div 
                      key={i} 
                      className="h-8 w-20 bg-white/5 rounded flex items-center justify-center"
                    >
                      <div className="text-muted-foreground text-xs">Client {i}</div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
          
          <div className="lg:col-span-2 flex justify-center">
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="relative w-full max-w-md aspect-square"
            >
              {/* 3D Illustration or interactive element */}
              <div className="absolute inset-0 glassmorphism rounded-2xl overflow-hidden neon-border">
                <div className="absolute inset-0 bg-gradient-to-br from-cyan/20 to-blue-500/10" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                    className="w-3/4 h-3/4 rounded-full border border-cyan/30 relative"
                  >
                    <motion.div
                      animate={{ rotate: -360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute inset-0 rounded-full border border-cyan/20"
                      style={{ transform: 'rotate(45deg)' }}
                    />
                    <div className="absolute inset-0 rounded-full flex items-center justify-center">
                      <div className="w-1/2 h-1/2 rounded-full bg-gradient-to-br from-cyan/40 to-blue-500/40 blur-sm animate-pulse-glow" />
                    </div>
                    
                    {/* Orbiting elements */}
                    {[0, 60, 120, 180, 240, 300].map((rotation, i) => (
                      <motion.div
                        key={i}
                        className="absolute w-4 h-4 bg-cyan rounded-full"
                        style={{
                          top: '50%',
                          left: '50%',
                          transform: `rotate(${rotation}deg) translateX(100%) translateY(-50%)`,
                        }}
                        animate={{
                          rotate: [rotation, rotation + 360],
                        }}
                        transition={{
                          duration: 10,
                          repeat: Infinity,
                          ease: "linear",
                          delay: i * 0.5,
                        }}
                      />
                    ))}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
      >
        <div className="flex flex-col items-center">
          <span className="text-sm text-muted-foreground mb-2">Scroll to explore</span>
          <div className="w-8 h-12 rounded-full border-2 border-muted-foreground/30 flex justify-center p-1">
            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
              className="w-1 h-1 rounded-full bg-cyan"
            />
          </div>
        </div>
      </motion.div>
    </section>
  )
}