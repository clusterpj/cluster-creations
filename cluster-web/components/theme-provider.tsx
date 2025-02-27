"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"
import { type ThemeProviderProps } from "next-themes/dist/types"
import { useHasMounted } from "@/lib/use-has-mounted"

/**
 * Theme provider component that wraps the application
 * Provides theme context and management for light/dark mode
 */
export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const hasMounted = useHasMounted()
  
  // Only render children once mounted on client to avoid hydration issues
  return (
    <NextThemesProvider {...props}>
      {children}
    </NextThemesProvider>
  )
}