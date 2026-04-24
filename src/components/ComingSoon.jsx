import { useState, useEffect } from 'react'

function pad(n) {
  return String(n).padStart(2, '0')
}

function getTimeLeft() {
  const target = new Date('2026-04-27T00:00:00')
  const now = new Date()
  const diff = target - now

  if (diff <= 0) {
    return { days: 0, hours: 0, minutes: 0, seconds: 0, done: true }
  }

  return {
    days:    Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours:   Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
    done:    false,
  }
}

export default function ComingSoon() {
  const [timeLeft, setTimeLeft] = useState(getTimeLeft)

  useEffect(() => {
    const id = setInterval(() => setTimeLeft(getTimeLeft()), 1000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="cs-root">
      {/* Full-bleed background */}
      <img className="cs-bg-img" src="/comingsoon.jpeg" alt="Coming Soon" />

      {/* Bottom gradient fade so timer is readable */}
      <div className="cs-bottom-fade" />

      {/* Timer — pinned to the bottom */}
      <div className="cs-timer cs-fade">
        <div className="cs-timer-label">   </div>

        {timeLeft.done ? (
          <p className="cs-live-text">We're live! 🎉</p>
        ) : (
          <div className="cs-blocks">
            <div className="cs-block">
              <span className="cs-num">{pad(timeLeft.days)}</span>
              <span className="cs-unit">Days</span>
            </div>
            <div className="cs-sep">:</div>
            <div className="cs-block">
              <span className="cs-num">{pad(timeLeft.hours)}</span>
              <span className="cs-unit">Hours</span>
            </div>
            <div className="cs-sep">:</div>
            <div className="cs-block">
              <span className="cs-num">{pad(timeLeft.minutes)}</span>
              <span className="cs-unit">Minutes</span>
            </div>
            <div className="cs-sep">:</div>
            <div className="cs-block">
              <span className="cs-num">{pad(timeLeft.seconds)}</span>
              <span className="cs-unit">Seconds</span>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
