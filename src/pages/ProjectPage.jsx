import { useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { projects } from '../data/projects'

export default function ProjectPage() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  useEffect(() => { window.scrollTo(0, 0) }, [slug])

  if (!project) {
    return (
      <div className="page-wrapper" style={{ display:'flex', flexDirection:'column', alignItems:'center', justifyContent:'center', minHeight:'60vh', gap:'2rem' }}>
        <p className="body-text">Project not found.</p>
        <Link to="/projects" className="btn-outline">← Back to projects</Link>
      </div>
    )
  }

  const currentIdx = projects.findIndex(p => p.slug === slug)
  const prev = projects[currentIdx - 1]
  const next = projects[currentIdx + 1]

  return (
    <>
      {/* ── Full-bleed hero: sits completely outside page-wrapper so no padding offset ── */}
      <section className="proj-hero">
        {/* Background image fills the section */}
        <img
          className="proj-hero-bg"
          src={project.hero}
          alt={project.name}
          loading="eager"
        />
        {/* Dark gradient from bottom */}
        <div className="proj-hero-overlay" />

        {/* Text anchored bottom-left */}
        <div className="proj-hero-text container">
          <span className="label-text proj-category">{project.label}</span>
          <h1 className="proj-title-large">{project.name}</h1>
          <span className="label-text proj-year">{project.year}</span>
        </div>
      </section>

      {/* ── Rest of the page — normal flow ── */}
      <div className="proj-body">

        {/* Description */}
        <section className="proj-desc-section border-b section-pad">
          <div className="container grid-4">
            <div className="label-col">
              <span className="label-text">Overview</span>
            </div>
            <div className="text-col">
              <p className="large-text">{project.description}</p>
              <p className="body-text proj-full-desc">{project.fullDescription}</p>
            </div>
          </div>
        </section>

        {/* Gallery */}
        <section className="proj-gallery section-pad border-b">
          <div className="container">
            <span className="label-text" style={{ display:'block', marginBottom:'2rem' }}>Portfolio</span>
            <div className="proj-gallery-grid">
              {project.images.map((src, i) => (
                <div
                  className={`proj-gallery-item ${i === 0 ? 'proj-gallery-wide' : ''}`}
                  key={i}
                >
                  <img src={src} alt={`${project.name} ${i + 1}`} loading="lazy" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Prev / Next */}
        <section className="proj-nav border-b">
          <div className="container proj-nav-inner">
            {prev ? (
              <Link to={`/projects/${prev.slug}`} className="proj-nav-btn proj-nav-prev">
                <span className="label-text">← Previous</span>
                <span className="proj-nav-name">{prev.name}</span>
              </Link>
            ) : <div />}

            <Link to="/projects" className="proj-nav-center label-text">All projects</Link>

            {next ? (
              <Link to={`/projects/${next.slug}`} className="proj-nav-btn proj-nav-next">
                <span className="label-text">Next →</span>
                <span className="proj-nav-name">{next.name}</span>
              </Link>
            ) : <div />}
          </div>
        </section>
      </div>
    </>
  )
}
