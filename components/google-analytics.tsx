"use client"

import { useEffect } from "react"
import { usePathname } from "next/navigation"
import gtag from "@/lib/gtag"

export default function GoogleAnalytics() {
  const pathname = usePathname()

  useEffect(() => {
    if (!gtag.GA_MEASUREMENT_ID) return
    // Report a pageview on route change
    gtag.pageview(pathname || window.location.pathname)
  }, [pathname])

  return null
}
