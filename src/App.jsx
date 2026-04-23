// ─── COMING SOON MODE ────────────────────────────────────────────────────────
// When the site is ready, remove ComingSoon import and uncomment everything else
import ComingSoon from './components/ComingSoon'

export default function App() {
  return <ComingSoon />
}

// ─── FULL SITE (re-enable on launch day) ─────────────────────────────────────
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
// import Header from './components/Header'
// import Footer from './components/Footer'
// import Hero          from './components/Hero'
// import IntroText     from './components/IntroText'
// import { ProjectsPreview } from './components/ProjectList'
// import ServicesPreview from './components/ServicesPreview'
// import Testimonials  from './components/Testimonials'
// import ContactSection from './components/ContactSection'
// import ProjectsPage  from './pages/ProjectsPage'
// import ProjectPage   from './pages/ProjectPage'
// import ServicesPage  from './pages/ServicesPage'
// import AboutPage     from './pages/AboutPage'
// import ClientsPage   from './pages/ClientsPage'
//
// function Home() {
//   return (
//     <main>
//       <Hero />
//       <IntroText />
//       <ProjectsPreview />
//       <ServicesPreview />
//       <Testimonials />
//       <ContactSection />
//     </main>
//   )
// }
//
// export default function App() {
//   return (
//     <Router>
//       <Header />
//       <Routes>
//         <Route path="/"                  element={<Home />} />
//         <Route path="/projects"          element={<ProjectsPage />} />
//         <Route path="/projects/:slug"    element={<ProjectPage />} />
//         <Route path="/services"          element={<ServicesPage />} />
//         <Route path="/about"             element={<AboutPage />} />
//         <Route path="/clients"           element={<ClientsPage />} />
//       </Routes>
//       <Footer />
//     </Router>
//   )
// }

