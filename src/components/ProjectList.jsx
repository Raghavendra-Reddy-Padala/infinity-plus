import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import { projects } from '../data/projects'

function ProjectRow({ label, name, description, images, slug }) {
  const ref = useRef(null)
  useEffect(() => {
    const io = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) e.target.classList.add('visible') },
      { threshold: 0.08, rootMargin: '0px 0px -40px 0px' }
    )
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])

  return (
    <article className="project-row border-b fade-in" ref={ref}>
      <div className="container project-inner">
        <div className="project-info">
          <span className="project-label">{label}</span>
          <h3 className="project-title">{name}</h3>
          <p className="body-text project-desc">{description}</p>
          <Link to={`/projects/${slug}`} className="project-link">Discover the project</Link>
        </div>
        <div className="project-images">
          {images.slice(0, 3).map((src, i) => (
            <div className="project-img-wrapper" key={i}>
              <img src={src} alt={`${name} ${i + 1}`} loading="lazy" />
            </div>
          ))}
        </div>
      </div>
    </article>
  )
}

/* Used on /projects page — shows all projects */
export default function ProjectList() {
  return (
    <section className="projects border-t">
      {projects.map((p) => (
        <ProjectRow key={p.slug} {...p} />
      ))}
    </section>
  )
}

/* Used on home page — shows 2 featured projects + CTA */
export function ProjectsPreview() {
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
    <section className="projects border-t" id="projects">
      {/* Section heading */}
      <div className="container proj-preview-header border-b fade-in" ref={ref}>
        <span className="label-text">Selected work</span>
        <Link to="/projects" className="proj-preview-all">
          View all projects →
        </Link>
      </div>

      {/* Show only first 2 projects on home */}
      {projects.slice(0, 2).map((p) => (
        <ProjectRow key={p.slug} {...p} />
      ))}

      {/* Footer CTA */}
      <div className="container proj-preview-footer border-t">
        <Link to="/projects" className="btn-outline">
          See all {projects.length} projects
        </Link>
      </div>
    </section>
  )
}
