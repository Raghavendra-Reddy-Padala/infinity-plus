import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

const stats = [
  { value: '180+', label: 'Projects completed' },
  { value: '6', label: 'Years of practice' },
  { value: '40+', label: 'Brand clients' },
  { value: '12', label: 'Awards received' },
]

const team = [
  {
    name: 'Rabah Merzouk',
    role: 'Founder & Lead Photographer',
    bio: 'Born in Algiers, trained in Paris. Rabah has spent over a decade refining a visual language that lives between documentary intimacy and high-fashion precision.',
    image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=700&q=80',
  },
  {
    name: 'Soline Duval',
    role: 'Creative Director',
    bio: 'Soline brings a background in art history and graphic design to every frame. Her eye for composition and colour transforms a shoot into a cohesive visual story.',
    image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=80',
  },
  {
    name: 'Marc Elias',
    role: 'Post-Production & Retouching',
    bio: 'With a meticulous hand and an obsession for tonal balance, Marc elevates every image in post — colour grading, compositing, and ensuring print-perfect deliveries.',
    image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&q=80',
  },
]

function useFadeIn() {
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.08 }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return ref
}

export default function AboutPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  const statsRef  = useFadeIn()
  const missionRef = useFadeIn()
  const teamRef   = useFadeIn()
  const quoteRef  = useFadeIn()

  return (
    <div className="page-wrapper">
      {/* ── Page Hero ── */}
      <section className="page-hero border-b">
        <div className="container">
          <div className="page-hero-inner">
            <span className="label-text page-label">About us</span>
            <h1 className="page-hero-title">
              We make images<br /><em>that endure.</em>
            </h1>
            <p className="body-text page-hero-sub">
              Infinityplus Hyderabad is an independent photography studio. We believe every brand deserves
              a visual identity that is unmistakably its own.
            </p>
          </div>
        </div>
      </section>

      {/* ── Full-width hero image ── */}
      <div className="about-hero-img">
        <img
          src="https://images.unsplash.com/photo-1542038784456-1ea8e935640e?w=1600&q=80"
          alt="Photographer at work"
          loading="eager"
        />
      </div>

      {/* ── Stats row ── */}
      <section className="about-stats section-pad border-b">
        <div className="container">
          <div className="stats-grid fade-in" ref={statsRef}>
            {stats.map(s => (
              <div className="stat-item" key={s.label}>
                <span className="stat-value">{s.value}</span>
                <span className="label-text stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Mission / Philosophy ── */}
      <section className="about-mission section-pad border-b">
        <div className="container grid-4 fade-in" ref={missionRef}>
          <div className="label-col">
            <span className="label-text">Our philosophy</span>
          </div>
          <div className="text-col about-mission-text">
            <p className="large-text">
              We believe photography is not the act of taking — it's the act of revealing.
            </p>
            <p className="body-text" style={{ marginBottom: '1.5rem' }}>
              Every commission we accept becomes a genuine partnership. We invest time in
              understanding your world before we ever pick up a camera. The result is imagery
              that feels inevitable — as if it could only ever have looked exactly this way.
            </p>
            <p className="body-text">
              Our process is built on trust, conversation, and craft. We work with a small
              number of clients each year to ensure that every project gets the full depth
              of our attention and creativity.
            </p>
          </div>
        </div>
      </section>

      {/* ── Quote ── */}
      <section className="about-quote-section border-b">
        <div className="container">
          <blockquote className="about-quote fade-in" ref={quoteRef}>
            <p className="about-quote-text">
              "Light is not something you find.<br />It's something you listen for."
            </p>
            <cite className="about-quote-cite">— Rabah Merzouk</cite>
          </blockquote>
        </div>
      </section>

      {/* ── Team ── */}
      <section className="about-team section-pad border-b">
        <div className="container">
          <div className="team-header fade-in" ref={teamRef}>
            <span className="label-text">The team</span>
            <h2 className="team-title">The people behind the lens.</h2>
          </div>
          <div className="team-grid">
            {team.map((m, i) => (
              <TeamCard key={m.name} {...m} index={i} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="cta-band container section-pad">
        <div className="cta-band-inner">
          <h2 className="cta-title">Let's create something<br /><em>together.</em></h2>
          <p className="body-text" style={{ marginBottom: '2rem', maxWidth: '420px', margin: '0 auto 2rem' }}>
            We'd love to hear about your project.
          </p>
          <Link to="/services" className="btn-outline">See our services →</Link>
        </div>
      </section>
    </div>
  )
}

function TeamCard({ name, role, bio, image, index }) {
  const ref = useFadeIn()
  return (
    <div
      className="team-card fade-in"
      ref={ref}
      style={{ transitionDelay: `${index * 0.12}s` }}
    >
      <div className="team-card-img">
        <img src={image} alt={name} loading="lazy" />
      </div>
      <div className="team-card-info">
        <p className="team-card-name">{name}</p>
        <p className="label-text team-card-role">{role}</p>
        <p className="body-text team-card-bio">{bio}</p>
      </div>
    </div>
  )
}
