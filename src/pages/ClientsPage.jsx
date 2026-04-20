import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const testimonials = [
  {
    client: 'Élisiane',
    year: '2024',
    service: 'Portfolio Creation',
    logo: 'É',
    review: "They took our abstract ideas and turned them into a stunning visual story. Highly professional and deeply creative.",
    industry: 'Gastronomy'
  },
  {
    client: 'Palais des Femmes',
    year: '2024',
    service: 'Campaign & Retouching',
    logo: 'P',
    review: "Every image feels like an extension of the elegance we aim to convey. Their work didn't just meet our expectations — it redefined our entire visual identity.",
    industry: 'Fashion'
  },
  {
    client: 'Cineno',
    year: '2024',
    service: 'Settings & Retouching',
    logo: 'C',
    review: "They brought a unique artistic vision that truly aligned with our brand values. Every last detail was handled thoughtfully.",
    industry: 'Lifestyle'
  },
  {
    client: 'Valemont',
    year: '2023',
    service: 'Custom Design',
    logo: 'V',
    review: "They translated our vision into a design that felt tailor-made, every shot, the smallest detail speaks to the core of our brand.",
    industry: 'Luxury'
  },
  {
    client: 'Résidence',
    year: '2023',
    service: 'Brand Photography',
    logo: 'R',
    review: "Working with Rabah felt collaborative and effortless. The results exceeded anything we imagined — pure artistry.",
    industry: 'Hospitality'
  },
  {
    client: 'Lunisse',
    year: '2023',
    service: 'Portrait Series',
    logo: 'L',
    review: "Rabah has a rare ability to make subjects feel entirely at ease. The portraits captured something we couldn't have described in words.",
    industry: 'Beauty'
  },
]

function TestiCard({ client, year, service, logo, review, industry, index }) {
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.05 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <div
      className="clients-card fade-in"
      ref={ref}
      style={{ transitionDelay: `${index * 0.06}s` }}
    >
      <div className="clients-card-top">
        <div className="clients-logo">{logo}</div>
        <span className="label-text clients-industry">{industry}</span>
      </div>
      <blockquote className="clients-review body-text">"{review}"</blockquote>
      <div className="clients-card-footer">
        <p className="clients-name">{client}</p>
        <p className="label-text">{service} · {year}</p>
      </div>
    </div>
  )
}

export default function ClientsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])
  const statsRef = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.05 }
    )
    if (statsRef.current) io.observe(statsRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <div className="page-wrapper">
      <section className="page-hero border-b">
        <div className="container">
          <div className="page-hero-inner">
            <span className="label-text page-label">Clients & Reviews</span>
            <h1 className="page-hero-title">
              Trusted by<br /><em>the best.</em>
            </h1>
            <p className="body-text page-hero-sub">
              From emerging brands to established names — here's what the people we've
              worked with have to say.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="about-stats section-pad border-b">
        <div className="container">
          <div className="stats-grid fade-in" ref={statsRef}>
            {[
              { value: '40+', label: 'Brand clients' },
              { value: '180+', label: 'Shoots completed' },
              { value: '98%', label: 'Satisfaction rate' },
              { value: '6', label: 'Countries worked in' },
            ].map(s => (
              <div className="stat-item" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="label-text stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonial cards */}
      <section className="clients-grid-section section-pad border-b">
        <div className="container">
          <div className="clients-grid">
            {testimonials.map((t, i) => (
              <TestiCard key={t.client} {...t} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-band container section-pad">
        <div className="cta-band-inner">
          <h2 className="cta-title">Ready to join them?</h2>
          <p className="body-text" style={{ marginBottom: '2rem', maxWidth: '400px', margin: '1rem auto 2.5rem' }}>
            Let's talk about what we can create together.
          </p>
          <Link to="/#contact" className="btn-outline">Get in touch →</Link>
        </div>
      </section>
    </div>
  )
}
