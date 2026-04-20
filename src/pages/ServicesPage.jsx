import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    number: '01',
    title: 'Fashion & Editorial',
    description:
      'High-concept fashion photography that merges garment, concept, and atmosphere. From lookbooks to full editorial spreads, we shape a visual language that makes your brand unmistakable.',
    tags: ['Lookbooks', 'Campaigns', 'Art Direction'],
    image: 'https://images.unsplash.com/photo-1469334031218-e382a71b716b?w=900&q=80',
  },
  {
    number: '02',
    title: 'Portrait & Identity',
    description:
      'Intimate, authentic portraiture that captures the essence of individuals and collectives. We create images that feel real — because they are. Every session is a conversation.',
    tags: ['Personal Branding', 'Artist Portraits', 'Team Shoots'],
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=900&q=80',
  },
  {
    number: '03',
    title: 'Fine Dining & Gastronomy',
    description:
      'Food and beverage photography that honours the craft behind every dish. We bring light, texture, and composition together to make viewers feel the flavour through the frame.',
    tags: ['Menus', 'Brand Campaigns', 'Social Content'],
    image: 'https://images.unsplash.com/photo-1470337458703-46ad1756a187?w=900&q=80',
  },
  {
    number: '04',
    title: 'Campaign & Retouching',
    description:
      'Full campaign production from concept to final deliver — including post-production retouching that enhances without erasing. Premium skin work, colour grading, and compositing.',
    tags: ['Post-Production', 'Colour Grading', 'Compositing'],
    image: 'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=900&q=80',
  },
  {
    number: '05',
    title: 'Product Photography',
    description:
      'Clean, precise, and elevated product imagery. Whether flat lay, lifestyle, or still life, we present your product in a way that commands attention and drives desire.',
    tags: ['E-Commerce', 'Still Life', 'Product Lifestyle'],
    image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=900&q=80',
  },
  {
    number: '06',
    title: 'Custom Projects',
    description:
      'Have something unique in mind? We collaborate on bespoke creative projects — from short film stills to gallery exhibitions. If you can dream it, we can frame it.',
    tags: ['Art Projects', 'Exhibitions', 'Film Stills'],
    image: 'https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=900&q=80',
  },
]

function ServiceRow({ number, title, description, tags, image, index }) {
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
    <article className="svc-row border-b fade-in" ref={ref}>
      <div className="svc-meta">
        <span className="svc-number label-text">{number}</span>
        <span className="svc-tag-list">
          {tags.map(t => <span className="svc-tag" key={t}>{t}</span>)}
        </span>
      </div>
      <div className="svc-content">
        <h2 className="svc-title">{title}</h2>
        <p className="body-text svc-desc">{description}</p>
        <Link to="/#contact" className="svc-cta">Enquire about this service →</Link>
      </div>
      <div className="svc-image">
        <img src={image} alt={title} loading="lazy" />
      </div>
    </article>
  )
}

export default function ServicesPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="page-wrapper">
      {/* ── Page Hero ── */}
      <section className="page-hero border-b">
        <div className="container">
          <div className="page-hero-inner">
            <span className="label-text page-label">Our Services</span>
            <h1 className="page-hero-title">
              What we<br /><em>do best.</em>
            </h1>
            <p className="body-text page-hero-sub">
              Six focused disciplines. One uncompromising standard. Choose the service
              that matches your vision — or combine them for full creative direction.
            </p>
          </div>
        </div>
      </section>

      {/* ── Service rows ── */}
      <section className="svc-section">
        {services.map((s, i) => (
          <ServiceRow key={s.number} {...s} index={i} />
        ))}
      </section>

      {/* ── CTA band ── */}
      <section className="cta-band container section-pad">
        <div className="cta-band-inner fade-in" ref={(el) => {
          if (!el) return
          const io = new IntersectionObserver(
            ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
            { threshold: 0.1 }
          )
          io.observe(el)
        }}>
          <h2 className="cta-title">Ready to start a project?</h2>
          <p className="body-text" style={{ marginBottom: '2rem', maxWidth: '480px', margin: '0 auto 2rem' }}>
            Reach out and let's build something meaningful together.
          </p>
          <Link to="/#contact" className="btn-outline">Get in touch</Link>
        </div>
      </section>
    </div>
  )
}
