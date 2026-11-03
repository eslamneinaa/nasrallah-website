'use client'

import { Pause, Play, Volume2, VolumeX } from 'lucide-react'
import { useEffect, useRef, useState } from 'react'

export type VideoLabels = { play: string; pause: string; soundOn: string; soundOff: string }

type Props = {
  src: string
  poster: string
  /** Describes what the video shows (it has no captions: music only). */
  label: string
  labels: VideoLabels
  className?: string
}

/**
 * Muted, looping showcase clip. Nothing but the poster downloads until the
 * clip scrolls into view; it then plays while visible and pauses off-screen.
 * Visitors who prefer reduced motion get the poster and a play button.
 */
export function ShowcaseVideo({ src, poster, label, labels, className = '' }: Props) {
  const ref = useRef<HTMLVideoElement>(null)
  const pausedByUser = useRef(false)
  const [playing, setPlaying] = useState(false)
  const [muted, setMuted] = useState(true)

  useEffect(() => {
    const video = ref.current
    if (!video || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !pausedByUser.current) video.play().catch(() => {})
        else if (!entry.isIntersecting) video.pause()
      },
      { threshold: 0.4 },
    )
    observer.observe(video)
    return () => observer.disconnect()
  }, [])

  const togglePlay = () => {
    const video = ref.current
    if (!video) return
    pausedByUser.current = !video.paused
    if (video.paused) video.play().catch(() => {})
    else video.pause()
  }

  const toggleSound = () => {
    const video = ref.current
    if (!video) return
    video.muted = !video.muted
    setMuted(video.muted)
    if (!video.muted && video.paused) {
      pausedByUser.current = false
      video.play().catch(() => {})
    }
  }

  const button =
    'flex h-10 w-10 items-center justify-center border border-gold-400/60 bg-maroon-950/70 text-gold-200 backdrop-blur transition hover:bg-maroon-950'

  return (
    <div className={`relative overflow-hidden bg-maroon-950 ${className}`}>
      <video
        ref={ref}
        poster={poster}
        muted
        loop
        playsInline
        preload="none"
        aria-label={label}
        onPlay={() => setPlaying(true)}
        onPause={() => setPlaying(false)}
        className="absolute inset-0 h-full w-full object-cover"
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="absolute end-3 bottom-3 flex gap-2">
        <button type="button" onClick={togglePlay} aria-label={playing ? labels.pause : labels.play} className={button}>
          {playing ? <Pause className="h-4 w-4" strokeWidth={1.5} /> : <Play className="h-4 w-4" strokeWidth={1.5} />}
        </button>
        <button type="button" onClick={toggleSound} aria-label={muted ? labels.soundOn : labels.soundOff} className={button}>
          {muted ? <VolumeX className="h-4 w-4" strokeWidth={1.5} /> : <Volume2 className="h-4 w-4" strokeWidth={1.5} />}
        </button>
      </div>
    </div>
  )
}
