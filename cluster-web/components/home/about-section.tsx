"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  // Stats data
  const stats = [
    { value: "5+", label: "Years Experience" },
    { value: "100+", label: "Completed Projects" },
    { value: "50+", label: "Happy Clients" },
    { value: "3", label: "Industry Awards" },
  ]
  
  return (
    <section 
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-400/50 to-dark opacity-50" />
      
      {/* Background grid */}
      <div className="absolute inset-0 bg-grid opacity-10" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7 }}
          >
            <div className="relative">
              {/* Main image with glowing border */}
              <div className="relative overflow-hidden rounded-lg shadow-2xl neon-border">
                {/* Placeholder for actual image */}
                <div className="aspect-[4/3] w-full bg-gradient-to-br from-dark-300 to-dark-500 relative">
                  <div className="absolute inset-0 flex items-center justify-center text-muted-foreground">
                    <span>Team Image</span>
                  </div>
                </div>
              </div>
              
              {/* Floating accent elements */}
              <div className="absolute -bottom-8 -right-8 w-48 h-48 glassmorphism rounded-lg shadow-lg p-4 flex items-center justify-center animate-float">
                <div className="text-center">
                  <span className="block text-4xl font-bold text-gradient mb-2">7+</span>
                  <span className="text-sm text-muted-foreground">Technologies Mastered</span>
                </div>
              </div>
              
              <div className="absolute -top-6 -left-6 w-24 h-24 glassmorphism rounded-full shadow-lg flex items-center justify-center animate-float" style={{ animationDelay: "1s" }}>
                <div className="w-14 h-14 rounded-full bg-gradient-to-r from-cyan/30 to-blue-500/30 flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-8 w-8 text-cyan"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14.828 14.828a4 4 0 01-5.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="grid grid-cols-2 gap-8 mt-16">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 + 0.3 }}
                  className="text-center p-4 rounded-lg bg-dark-400/30 border border-dark-300"
                >
                  <span className="block text-3xl font-bold text-gradient mb-1">{stat.value}</span>
                  <span className="text-sm text-muted-foreground">{stat.label}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Crafting Digital <span className="text-gradient">Experiences</span> That Drive Results
            </h2>
            
            <p className="text-lg text-muted-foreground mb-6">
              At Cluster Creations, we're not just a digital agency – we're your strategic partner in navigating the digital landscape. Founded with a passion for innovation, we've been transforming businesses through intelligent design and development for over five years.
            </p>
            
            <p className="text-lg text-muted-foreground mb-8">
              Our team of experts combines technical expertise with creative vision to deliver solutions that not only look stunning but also drive meaningful business outcomes. We pride ourselves on staying ahead of industry trends and technologies to ensure our clients always have the competitive edge.
            </p>
            
            {/* Core values */}
            <div className="space-y-4 mb-8">
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan to-blue-500 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Innovation-Driven Approach</h3>
                  <p className="text-muted-foreground">
                    We constantly push boundaries to deliver forward-thinking solutions that keep you ahead of the competition.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan to-blue-500 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Results-Focused</h3>
                  <p className="text-muted-foreground">
                    Everything we create is designed with your business goals in mind, ensuring measurable impact and ROI.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gradient-to-r from-cyan to-blue-500 flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5 text-dark"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-1">Client Partnership</h3>
                  <p className="text-muted-foreground">
                    We consider ourselves an extension of your team, working collaboratively to achieve your vision.
                  </p>
                </div>
              </div>
            </div>
            
            <Link
              href="/about"
              className={cn(
                "px-8 py-3 rounded-full inline-flex items-center justify-center text-base font-medium",
                "bg-transparent border border-cyan text-cyan",
                "hover:bg-cyan/10 transition-all duration-300"
              )}
            >
              Learn More About Us
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="ml-2 h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}