import { Link, useLocation } from 'react-router-dom'

export default function Header() {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  const navCls = (href) =>
    `nav-link${pathname === href ? ' nav-link-active' : ''}`

  return (
    <header className="header">
      <Link to="/" className="header-logo">Infinityplus Hyderabad</Link>

      <nav className="header-nav">
        <Link to="/"         className={navCls('/')}>Home</Link>
        <Link to="/projects" className={navCls('/projects')}>Projects</Link>
        <Link to="/services" className={navCls('/services')}>Services</Link>
        <Link to="/about"    className={navCls('/about')}>About</Link>
        <Link to="/clients"  className={navCls('/clients')}>Clients</Link>
      </nav>

      <div className="header-right">
        {isHome
          ? <a href="#contact" className="btn-contact">Get in touch</a>
          : <Link to="/#contact" className="btn-contact">Get in touch</Link>
        }
        <button className="menu-btn" aria-label="Toggle Menu">
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  )
}
