"use client"

import { useRef } from "react"
import Link from "next/link"
import Image from "next/image"
import { motion, useInView } from "framer-motion"
import { cn } from "@/lib/utils"

// Service card component
type ServiceCardProps = {
  title: string
  description: string
  icon: React.ReactNode
  href: string
  index: number
}

const ServiceCard = ({ title, description, icon, href, index }: ServiceCardProps) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(cardRef, { once: true, margin: "-100px" })
  
  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className={cn(
        "group relative overflow-hidden rounded-xl border border-dark-300 bg-dark-400/50 p-6",
        "hover:border-cyan/50 hover:shadow-lg hover:shadow-cyan/10 transition-all duration-300"
      )}
    >
      <div className="absolute -inset-3 bg-cyan/5 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-500" />
      
      <div className="relative z-10">
        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-full bg-dark-300 group-hover:bg-gradient-to-br group-hover:from-cyan group-hover:to-blue-600 transition-colors duration-300">
          {icon}
        </div>
        
        <h3 className="mb-2 text-xl font-semibold group-hover:text-gradient transition-all duration-300">
          {title}
        </h3>
        
        <p className="mb-5 text-muted-foreground">
          {description}
        </p>
        
        <Link
          href={href}
          className={cn(
            "inline-flex items-center text-sm font-medium",
            "text-muted-foreground group-hover:text-cyan transition-colors duration-300"
          )}
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="ml-1 h-4 w-4 transition-transform duration-300 group-hover:translate-x-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </motion.div>
  )
}

// Icons for services
const WebDesignIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-foreground group-hover:text-dark transition-colors duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
    />
  </svg>
)

const WebDevIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-foreground group-hover:text-dark transition-colors duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
    />
  </svg>
)

const WordPressIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-foreground group-hover:text-dark transition-colors duration-300"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z"
    />
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 16V8M8 12h8"
    />
  </svg>
)

const SocialMediaIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-foreground group-hover:text-dark transition-colors duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
    />
  </svg>
)

const AIIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-foreground group-hover:text-dark transition-colors duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714a2.25 2.25 0 001.63 2.163l.224.075a2.25 2.25 0 001.634-2.163V3.141c.252-.027.504-.055.75-.082M15.75 3.104c-.251.023-.501.05-.75.082m0 0a23.825 23.825 0 01-1.302.235A24.308 24.308 0 019.75 3.186m0-2.998c1.664.085 3.344.2 5.01.347a.75.75 0 01.683.745v5.443a2.25 2.25 0 01-1.159 1.97l-2.385 1.436M10.5 6.75a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
    />
  </svg>
)

const SEOIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-6 w-6 text-foreground group-hover:text-dark transition-colors duration-300"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
    />
  </svg>
)

// Services data
const services = [
  {
    title: "Custom Web Design",
    description: "Beautiful, responsive websites tailored to your brand's unique identity and business goals.",
    icon: <WebDesignIcon />,
    href: "/services/web-design",
  },
  {
    title: "Expert Web Development",
    description: "Robust, scalable web applications built with cutting-edge technologies for optimal performance.",
    icon: <WebDevIcon />,
    href: "/services/web-development",
  },
  {
    title: "WordPress Development",
    description: "Custom WordPress solutions with powerful functionality and seamless content management.",
    icon: <WordPressIcon />,
    href: "/services/wordpress",
  },
  {
    title: "Social Media Marketing",
    description: "Strategic social media campaigns that boost engagement and drive meaningful conversions.",
    icon: <SocialMediaIcon />,
    href: "/services/social-media",
  },
  {
    title: "AI Solutions",
    description: "Innovative AI integrations that automate processes and deliver intelligent insights for your business.",
    icon: <AIIcon />,
    href: "/services/ai-solutions",
  },
  {
    title: "SEO Strategies",
    description: "Data-driven SEO techniques that improve visibility and drive qualified traffic to your website.",
    icon: <SEOIcon />,
    href: "/services/seo",
  },
]

export function ServicesSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" })
  
  return (
    <section 
      ref={sectionRef} 
      className="relative py-24 bg-dark-500"
    >
      {/* Diagonal top shape */}
      <div className="absolute top-0 left-0 right-0 h-20 bg-dark">
        <svg
          className="absolute -top-1 left-0 w-full text-dark-500 h-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 48H1440V0L0 48Z"
            fill="currentColor"
          />
        </svg>
      </div>
      
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center max-w-3xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Our Cutting-Edge <span className="text-gradient">Services</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            We offer a comprehensive suite of digital services to help businesses establish a 
            powerful online presence and drive sustainable growth.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={service.title}
              title={service.title}
              description={service.description}
              icon={service.icon}
              href={service.href}
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
            href="/services"
            className={cn(
              "px-8 py-3 rounded-full inline-flex items-center justify-center text-base font-medium",
              "bg-transparent border border-cyan text-cyan",
              "hover:bg-cyan/10 transition-all duration-300"
            )}
          >
            View All Services
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

      {/* Diagonal bottom shape */}
      <div className="absolute bottom-0 left-0 right-0 h-20 bg-dark">
        <svg
          className="absolute -bottom-1 left-0 w-full text-dark h-20"
          preserveAspectRatio="none"
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M0 0H1440V48L0 0Z"
            fill="currentColor"
          />
        </svg>
      </div>
    </section>
  )
}