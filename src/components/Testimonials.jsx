import { useEffect, useRef } from 'react'

const testimonials = [
  {
    client: 'Élisiane',
    year: '2024',
    service: 'Portfolio Creation',
    review: "They took our abstract ideas and turned them into a stunning visual story. Highly professional and deeply creative."
  },
  {
    client: 'Palais des Femmes',
    year: '2024',
    service: 'Campaign & Retouching',
    review: "Every image feels like an extension of the elegance we aim to convey. Their work didn't just meet our expectations — it redefined our entire visual identity."
  },
  {
    client: 'Cineno',
    year: '2024',
    service: 'Settings & Retouching',
    review: "They brought a unique artistic vision that truly aligned with our brand values. Every last detail was handled thoughtfully."
  },
  {
    client: 'Valemont',
    year: '2023',
    service: 'Custom Design',
    review: "They translated our vision into a design that felt tailor-made, every shot, the smallest detail speaks to the core of our brand."
  },
  {
    client: 'Résidence',
    year: '2023',
    service: 'Brand Photography',
    review: "Working with Rabah felt collaborative and effortless. The results exceeded anything we imagined — pure artistry."
  }
]

export default function Testimonials() {
  const headerRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    if (headerRef.current) observer.observe(headerRef.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="testimonials section-pad border-b" id="reviews">
      <div className="container">
        {/* Header */}
        <div className="testi-header fade-in" ref={headerRef}>
          <span className="label-text testi-label">Testimonials</span>
          <h2 className="testi-header-title">What our clients say</h2>
          <p className="body-text testi-subtext">
            Read feedback from businesses who've transformed their visual presence with us.
          </p>
        </div>

        {/* Column headers */}
        <div className="testi-col-headers border-b border-t">
          <span className="label-text">Client</span>
          <span className="label-text">Year / Service</span>
          <span className="label-text">Review</span>
        </div>

        {/* Rows */}
        <div className="testi-rows">
          {testimonials.map((t, i) => (
            <TestiRow key={i} {...t} />
          ))}
        </div>
      </div>
    </section>
  )
}

function TestiRow({ client, year, service, review }) {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.05, rootMargin: '0px 0px -20px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <div className="testi-row border-b fade-in" ref={ref}>
      <div className="testi-client">{client}</div>
      <div className="testi-meta-block">
        <span className="label-text">{year}</span>
        <span className="body-text">{service}</span>
      </div>
      <div className="testi-quote body-text">
        "{review}"
      </div>
    </div>
  )
}
