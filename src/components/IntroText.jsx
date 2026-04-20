import { useEffect, useRef } from 'react'
import Quote from './Quote'

export default function IntroText() {
  const ref = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) entry.target.classList.add('visible') },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [])

  return (
    <section className="about-section section-pad border-b" id="about">
      <div className="container grid-4 fade-in" ref={ref}>
        <div className="label-col">
          <span className="label-text">About us</span>
        </div>
        <div className="text-col">
          <p className="large-text">
            At Infinityplus Hyderabad, we craft compelling imagery that blends artistic vision with technical precision. Our tailored photography services are designed to showcase your brand at its very best and leave a lasting impression.
          </p>
          <a href="#projects" className="btn-outline">Learn more about us</a>
          
       
        </div>
      </div>
    </section>
  )
}
