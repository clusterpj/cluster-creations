import Link from "next/link"
import { cn } from "@/lib/utils"

// Social media icons
const TwitterIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
)

const InstagramIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
)

const LinkedinIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

const GithubIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
    <path d="M9 18c-4.51 2-5-2-7-2" />
  </svg>
)

export function Footer() {
  return (
    <footer className="bg-dark-500 border-t border-dark-300 pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Information */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-gradient">CLUSTER CREATIONS</h3>
            <p className="text-muted-foreground mb-4 text-sm">
              Your full-service digital agency specializing in web development, 
              graphic design, and innovative AI solutions.
            </p>
            <div className="flex space-x-4">
              <Link 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                aria-label="Twitter"
              >
                <TwitterIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                aria-label="Instagram"
              >
                <InstagramIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <LinkedinIcon className="h-5 w-5" />
              </Link>
              <Link 
                href="https://github.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                aria-label="GitHub"
              >
                <GithubIcon className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-foreground">Quick Links</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/about" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link 
                  href="/services" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link 
                  href="/portfolio" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link 
                  href="/process" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  Our Process
                </Link>
              </li>
              <li>
                <Link 
                  href="/blog" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  Blog
                </Link>
              </li>
              <li>
                <Link 
                  href="/contact" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-foreground">Our Services</h3>
            <ul className="space-y-3 text-sm">
              <li>
                <Link 
                  href="/services/web-design" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  Custom Web Design
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/web-development" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  Expert Web Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/wordpress" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  WordPress Development
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/social-media" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  Social Media Marketing
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/ai-solutions" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  AI Solutions
                </Link>
              </li>
              <li>
                <Link 
                  href="/services/seo" 
                  className="text-muted-foreground hover:text-cyan transition-colors duration-300"
                >
                  SEO Strategies
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-base font-semibold mb-4 text-foreground">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-cyan"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span className="text-muted-foreground">
                  123 Digital Avenue, Tech City, TC 12345
                </span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-cyan"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span className="text-muted-foreground">info@clustercreations.com</span>
              </li>
              <li className="flex items-start">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 mr-2 text-cyan"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-muted-foreground">(555) 123-4567</span>
              </li>
              <li className="flex items-start mt-4">
                <span className="text-muted-foreground">
                  <strong className="text-cyan">Business Hours:</strong>
                  <br />
                  Monday-Friday: 9AM - 6PM
                  <br />
                  Saturday: 10AM - 2PM
                  <br />
                  Sunday: Closed
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Copyright */}
        <div className="mt-12 border-t border-dark-300 pt-8 text-center">
          <p className="text-sm text-muted-foreground">
            &copy; {new Date().getFullYear()} Cluster Creations. All rights reserved.
          </p>
          <div className="mt-2 flex justify-center space-x-4 text-xs">
            <Link
              href="/privacy-policy"
              className="text-muted-foreground hover:text-cyan transition-colors duration-300"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="text-muted-foreground hover:text-cyan transition-colors duration-300"
            >
              Terms of Service
            </Link>
            <Link
              href="/sitemap"
              className="text-muted-foreground hover:text-cyan transition-colors duration-300"
            >
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}