"use client"

import { useEffect, useState, type ReactNode } from 'react'

interface SafeHydrateProps {
  children: ReactNode
  fallback?: ReactNode
}

export function SafeHydrate({ children, fallback }: SafeHydrateProps) {
  const [hydrated, setHydrated] = useState(false)

  useEffect(() => {
    setHydrated(true)
  }, [])

  // The div wrapper ensures that the content is the same on both
  // server and client to prevent hydration mismatches
  return (
    <div suppressHydrationWarning>
      {hydrated ? children : (fallback || children)}
    </div>
  )
}
