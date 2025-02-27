import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Combines multiple class names and merges Tailwind CSS classes efficiently
 * @param inputs Class values to be merged
 * @returns Merged class string
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

/**
 * Delay execution with promise-based timeout
 * @param ms Milliseconds to delay
 * @returns Promise that resolves after the specified time
 */
export function delay(ms: number) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

/**
 * Formats a number as a currency string (USD)
 * @param amount Number to format
 * @returns Formatted currency string
 */
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 0,
  }).format(amount)
}

/**
 * Creates animation variants for staggered children animations
 * @param staggerChildren Delay between each child animation
 * @param delayChildren Initial delay before animations start
 * @returns Animation variants object for Framer Motion
 */
export const staggerContainer = (staggerChildren: number = 0.1, delayChildren: number = 0) => {
  return {
    hidden: {},
    show: {
      transition: {
        staggerChildren,
        delayChildren,
      },
    },
  }
}

/**
 * Animation variants for fade-up effect
 */
export const fadeUpVariant = {
  hidden: {
    y: 30,
    opacity: 0,
  },
  show: {
    y: 0,
    opacity: 1,
    transition: {
      type: 'tween',
      duration: 0.6,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
}

/**
 * Animation variants for fade-in effect
 */
export const fadeInVariant = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.1, 0.25, 1.0],
    },
  },
}

/**
 * Debounce function to limit the rate at which a function can fire
 * @param fn Function to debounce
 * @param ms Milliseconds to delay
 * @returns Debounced function
 */
export function debounce<T extends (...args: any[]) => any>(
  fn: T,
  ms: number
): (...args: Parameters<T>) => void {
  let timeoutId: ReturnType<typeof setTimeout> | null = null
  
  return function(...args: Parameters<T>) {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }
    
    timeoutId = setTimeout(() => {
      fn(...args)
      timeoutId = null
    }, ms)
  }
}