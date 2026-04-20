import { useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import ProjectList from '../components/ProjectList'
import Header from '../components/Header'
import Footer from '../components/Footer'

export default function ProjectsPage() {
  useEffect(() => { window.scrollTo(0, 0) }, [])

  return (
    <div className="page-wrapper">
      <section className="page-hero border-b">
        <div className="container">
          <div className="page-hero-inner">
            <span className="label-text page-label">Our portfolio</span>
            <h1 className="page-hero-title">
              Every frame<br /><em>tells a story.</em>
            </h1>
            <p className="body-text page-hero-sub">
              A collection of collaborations across fashion, gastronomy, portraiture,
              and beyond. Each project is a new visual language built from scratch.
            </p>
          </div>
        </div>
      </section>

      <ProjectList />
    </div>
  )
}
