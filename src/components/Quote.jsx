import { useEffect, useRef } from 'react'

export default function Quote() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.05, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="section-row fade-in" ref={ref}>
      <div className="section-row-inner">
        <div className="section-row-label">
          <span>Quote</span>
        </div>
        <div className="section-row-content">
          <blockquote className="quote-text">
            "Photography is not about the thing photographed. It is about how that
            thing looks photographed — the alchemy of light, intention, and the
            courage to see what others overlook."
          </blockquote>
          <div className="quote-author">
            <span className="quote-author-name">Rabah Moussaoui</span>
            <span className="quote-divider">—</span>
            <span className="quote-author-title">Founder &amp; Creative Director</span>
          </div>
        </div>
      </div>
    </section>
  )
}
