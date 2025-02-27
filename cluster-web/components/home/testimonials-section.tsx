"use client"

import { useState, useRef, useEffect } from "react"
import Image from "next/image"
import { motion, useInView, AnimatePresence } from "framer-motion"
import { cn } from "@/lib/utils"

// Testimonial type
type Testimonial = {
  id: number
  name: string
  position: string
  company: string
  image: string
  quote: string
}

// Quote icon component
const QuoteIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
  </svg>
)

// Sample testimonials data
const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "CEO",
    company: "TechVista Inc.",
    image: "Avatar 1",
    quote: "Working with Cluster Creations transformed our online presence. Their team's expertise in web development and AI integration not only improved our site's performance but also increased our conversion rates by 45%. They truly understand how to blend cutting-edge technology with user-centric design.",
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Marketing Director",
    company: "GreenLife Brands",
    image: "Avatar 2",
    quote: "The Cluster Creations team delivered beyond our expectations. Their WordPress development skills and design aesthetic perfectly captured our brand's essence. The custom features they built have streamlined our content management process, saving us countless hours each month.",
  },
  {
    id: 3,
    name: "Jessica Patel",
    position: "Founder",
    company: "Horizon Properties",
    image: "Avatar 3",
    quote: "The real estate website Cluster Creations built for us has revolutionized how we showcase properties. The intuitive search functionality and virtual tours have generated significant interest from potential buyers. Their attention to detail and commitment to our vision was impressive.",
  },
  {
    id: 4,
    name: "David Wilson",
    position: "CTO",
    company: "NeuraTalk Solutions",
    image: "Avatar 4",
    quote: "Implementing AI capabilities into our platform seemed daunting until we partnered with Cluster Creations. Their technical expertise and innovative approach resulted in an AI assistant that has dramatically improved our customer service metrics while reducing operational costs.",
  },
]

export function TestimonialsSection() {
  const [activeIndex, setActiveIndex] = useState(0)
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  // Auto-rotate testimonials
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length)
    }, 8000)
    
    return () => clearInterval(interval)
  }, [])
  
  return (
    <section
      ref={sectionRef}
      className="py-24 relative overflow-hidden"
    >
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-gradient-radial from-dark-400/30 to-dark opacity-80" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            What Our <span className="text-gradient">Clients</span> Say
          </h2>
          <p className="text-lg text-muted-foreground">
            Don't just take our word for it. See what our clients have to say about their 
            experience working with Cluster Creations.
          </p>
        </motion.div>
        
        <div className="max-w-4xl mx-auto">
          {/* Main testimonial display */}
          <div className="relative glassmorphism rounded-xl p-8 md:p-12 overflow-hidden">
            {/* Background gradient effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-cyan/5 to-blue-500/5" />
            
            {/* Quote icon */}
            <div className="absolute top-8 left-8 text-cyan/20">
              <QuoteIcon className="w-16 h-16" />
            </div>
            
            <div className="relative z-10">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeIndex}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  transition={{ duration: 0.5 }}
                  className="mb-8"
                >
                  <p className="text-xl md:text-2xl text-foreground italic mb-8">
                    "{testimonials[activeIndex].quote}"
                  </p>
                  
                  <div className="flex items-center">
                    {/* Avatar placeholder */}
                    <div className="w-14 h-14 rounded-full bg-gradient-to-br from-cyan/30 to-blue-500/30 flex items-center justify-center mr-4">
                      <span className="text-xs text-muted-foreground">
                        {testimonials[activeIndex].image}
                      </span>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-cyan">
                        {testimonials[activeIndex].name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {testimonials[activeIndex].position}, {testimonials[activeIndex].company}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation dots */}
              <div className="flex justify-center mt-8 space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={cn(
                      "w-3 h-3 rounded-full transition-all duration-300",
                      index === activeIndex
                        ? "bg-cyan scale-125"
                        : "bg-dark-300 hover:bg-dark-200"
                    )}
                    aria-label={`View testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
          
          {/* Client logos */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16"
          >
            <div className="text-center mb-8">
              <p className="text-muted-foreground">Trusted by innovative companies worldwide</p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {/* Placeholder for client logos */}
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-24 h-12 bg-dark-300 rounded flex items-center justify-center opacity-70 hover:opacity-100 transition-opacity duration-300"
                >
                  <span className="text-xs text-muted-foreground">Logo {i}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}