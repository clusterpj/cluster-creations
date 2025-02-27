"use client"

import { useState, useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

// Portfolio project card component
type PortfolioItemProps = {
  title: string
  category: string
  image: string
  href: string
  index: number
}

const PortfolioItem = ({ title, category, image, href, index }: PortfolioItemProps) => {
  const itemRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(itemRef, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={itemRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group"
    >
      <Link href={href} className="block overflow-hidden rounded-xl">
        <div className="relative h-80 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-60 z-10 group-hover:opacity-40 transition-opacity duration-300" />
          
          {/* Portfolio image */}
          <div className="absolute inset-0 bg-gradient-to-br from-dark-300 to-dark-500 flex items-center justify-center">
            <span className="text-muted-foreground">{image}</span>
          </div>
          
          <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
            <span className="inline-block mb-2 text-sm font-medium text-cyan">
              {category}
            </span>
            <h3 className="text-2xl font-bold text-white group-hover:text-gradient transition-colors duration-300">
              {title}
            </h3>
          </div>
          
          {/* Hover effect */}
          <div className="absolute inset-0 bg-cyan/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0" />
        </div>
      </Link>
    </motion.div>
  )
}

// Portfolio data
const portfolioItems = [
  {
    title: "TechVista E-commerce Platform",
    category: "Web Development",
    image: "Project Image 1",
    href: "/portfolio/techvista",
  },
  {
    title: "GreenLife Brand Identity",
    category: "Graphic Design",
    image: "Project Image 2",
    href: "/portfolio/greenlife",
  },
  {
    title: "NeuraTalk AI Assistant",
    category: "AI Solutions",
    image: "Project Image 3",
    href: "/portfolio/neuratalk",
  },
  {
    title: "Horizon Real Estate Website",
    category: "WordPress Development",
    image: "Project Image 4",
    href: "/portfolio/horizon",
  },
]

// Filter categories
const categories = [
  "All",
  "Web Development",
  "Graphic Design",
  "AI Solutions",
  "WordPress Development",
]

export function PortfolioSection() {
  const [activeCategory, setActiveCategory] = useState("All")
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  // Filter projects based on selected category
  const filteredProjects = activeCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === activeCategory)
  
  return (
    <section
      ref={sectionRef}
      className="py-24 bg-dark-500 relative overflow-hidden"
    >
      {/* Background elements */}
      <div className="absolute inset-0 bg-grid opacity-5" />
      
      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Featured <span className="text-gradient">Projects</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Explore our latest work and see how we've helped businesses achieve their goals 
            through innovative design and development solutions.
          </p>
        </motion.div>
        
        {/* Category filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category, index) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={cn(
                "px-4 py-2 text-sm font-medium rounded-full transition-all duration-300",
                activeCategory === category
                  ? "bg-cyan text-dark shadow-lg shadow-cyan/20"
                  : "bg-dark-300 text-muted-foreground hover:bg-dark-200"
              )}
            >
              {category}
            </button>
          ))}
        </motion.div>
        
        {/* Portfolio grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
          {filteredProjects.map((item, index) => (
            <PortfolioItem
              key={item.title}
              title={item.title}
              category={item.category}
              image={item.image}
              href={item.href}
              index={index}
            />
          ))}
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <Link
            href="/portfolio"
            className={cn(
              "px-8 py-3 rounded-full inline-flex items-center justify-center text-base font-medium",
              "bg-transparent border border-cyan text-cyan",
              "hover:bg-cyan/10 transition-all duration-300"
            )}
          >
            View All Projects
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
    </section>
  )
}