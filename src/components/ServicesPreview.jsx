import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Fashion & Editorial',
    tags: ['Lookbooks', 'Campaigns', 'Art Direction'],
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=700&q=80',
  },
  {
    number: '02',
    title: 'Portrait & Identity',
    tags: ['Personal Branding', 'Artist Portraits', 'Team Shoots'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&q=80',
  },
  {
    number: '03',
    title: 'Fine Dining & Gastronomy',
    tags: ['Menus', 'Brand Campaigns', 'Social Content'],
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=700&q=80',
  },
  {
    number: '04',
    title: 'Campaign & Retouching',
    tags: ['Post-Production', 'Colour Grading', 'Compositing'],
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=700&q=80',
  },
]

export default function ServicesPreview() {
  const headerRef = useRef(null)

  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.05 }
    )
    if (headerRef.current) io.observe(headerRef.current)
    return () => io.disconnect()
  }, [])

  return (
    <section className="svc-preview border-t section-pad" id="services">
      {/* Header row */}
      <div className="container svc-preview-header fade-in" ref={headerRef}>
        <div>
          <span className="label-text" style={{ display: 'block', marginBottom: '1rem' }}>
            What we do
          </span>
          <h2 className="svc-preview-title">
            Every project,<br /><em>a new language.</em>
          </h2>
        </div>
        <div className="svc-preview-cta">
          <p className="body-text" style={{ marginBottom: '1.5rem', maxWidth: '320px' }}>
            Six disciplines, one standard of excellence. See how we approach each craft.
          </p>
          <Link to="/services" className="btn-outline">All services →</Link>
        </div>
      </div>

      {/* Grid */}
      <div className="container svc-preview-grid">
        {services.map((s, i) => (
          <ServiceCard key={s.number} {...s} index={i} />
        ))}
      </div>
    </section>
  )
}

function ServiceCard({ number, title, tags, image, index }) {
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.08 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <Link
      to="/services"
      className="svc-card fade-in"
      ref={ref}
      style={{ transitionDelay: `${index * 0.08}s` }}
    >
      <div className="svc-card-img">
        <img src={image} alt={title} loading="lazy" />
      </div>
      <div className="svc-card-body">
        <span className="label-text svc-card-num">{number}</span>
        <h3 className="svc-card-title">{title}</h3>
        <div className="svc-card-tags">
          {tags.map(t => <span key={t} className="svc-tag">{t}</span>)}
        </div>
      </div>
    </Link>
  )
}
