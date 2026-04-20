import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  /* Track scroll to add glassmorphic effect */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navCls = (href) =>
    `nav-link${pathname === href ? ' nav-link-active' : ''}`

  const closeMenu = () => setMenuOpen(false)

  return (
    <header className={`header ${menuOpen ? 'menu-open' : ''} ${scrolled ? 'scrolled' : ''}`}>
      <Link to="/" className="header-logo" onClick={closeMenu}>Infinityplus</Link>

      <nav className="header-nav">
        <Link to="/"         className={navCls('/')}>Home</Link>
        <Link to="/projects" className={navCls('/projects')}>Projects</Link>
        <Link to="/services" className={navCls('/services')}>Services</Link>
        <Link to="/about"    className={navCls('/about')}>About</Link>
        <Link to="/clients"  className={navCls('/clients')}>Clients</Link>
      </nav>

      <div className="header-right">
        {isHome
          ? <a href="#contact" className="btn-contact" onClick={closeMenu}>Get in touch</a>
          : <Link to="/#contact" className="btn-contact" onClick={closeMenu}>Get in touch</Link>
        }
        <button 
          className="menu-btn" 
          aria-label="Toggle Menu"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
