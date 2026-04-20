export default function Footer() {
  return (
    <footer className="footer border-t" id="contact">
      {/* Full-width feature image */}
      <img
        src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=1600&q=80"
        alt="Abstract blue sculpture"
        className="footer-image"
        loading="lazy"
      />

      {/* Info columns */}
      <div className="footer-top">
        <div>
          <span className="footer-brand">Infinityplus Hyderabad</span>
          <p className="body-text footer-desc">
            If you have any questions or need assistance, feel free to get in touch with us.
          </p>
        </div>

        <div>
          <p className="footer-col-title">General Inquiries</p>
          <p className="body-text" style={{ textDecoration: 'underline', textUnderlineOffset: '4px' }}>
            contact@infinityplus.com
          </p>
        </div>

        <div>
          <p className="footer-col-title">Navigation</p>
          <ul className="footer-links">
            <li><a href="#home">Home</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#about">About us</a></li>
            <li><a href="#reviews">Testimonials</a></li>
          </ul>
        </div>

        <div>
          <p className="footer-col-title">Follow us</p>
          <ul className="footer-links">
            <li><a href="#">Instagram</a></li>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Pinterest</a></li>
            <li><a href="#">LinkedIn</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="footer-bottom">
        <span>© 2025 Infinityplus Hyderabad. All rights reserved.</span>
        <span>By Infinityplus Hyderabad</span>
      </div>
    </footer>
  )
}
