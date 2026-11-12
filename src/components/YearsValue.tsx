'use client'

import { useEffect, useState } from 'react'
import { siteConfig } from '@/config/site'

const builtIn = Number(process.env.BUILD_YEAR) || siteConfig.foundedYear

/**
 * Stat text with `{years}` replaced by the years since the founding year:
 * right in the built HTML, then recounted in the browser so it moves on to
 * 121, 122… every new year without waiting for a rebuild.
 */
export function YearsValue({ value }: { value: string }) {
  const [year, setYear] = useState(builtIn)
  useEffect(() => setYear(Math.max(builtIn, new Date().getFullYear())), [])
  return <>{value.replace('{years}', String(year - siteConfig.foundedYear))}</>
}
