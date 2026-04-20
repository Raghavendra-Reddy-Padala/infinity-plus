export default function Hero() {
  return (
    <section className="hero" id="home">
      {/*
       * CANVAS LAYOUT — exactly like the Rabah reference:
       *
       *  [img-A tall] │ [img-B]  [img-C short]
       *               │──────────────────────────
       *  [img-A tall] │      TITLE TEXT           │ [img-D]
       *               │      (absolutely centred) │
       *  [img-E] [img-F small] │ [img-D continues]
       *
       * The whole grid is position:relative.
       * The title + subtitle are position:absolute, dead-center.
       */}

      {/* The image mosaic fills the hero */}
      <div className="hero-canvas">
        {/* Column A — tall portrait left, spans 2 rows */}
        <div className="hc hc-a">
          <img
            src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=700&q=80"
            alt="Portrait"
          />
        </div>

        {/* Column B, Row 1 — portrait centre-top */}
        <div className="hc hc-b">
          <img
            src="https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=600&q=80"
            alt="Fashion"
          />
        </div>

        {/* Column C, Row 1 — landscape top-right */}
        <div className="hc hc-c">
          <img
            src="https://images.unsplash.com/photo-1509967419530-da38b4704bc6?w=600&q=80"
            alt="Desert"
          />
        </div>

        {/* Column D — tall portrait right, spans 2 rows */}
        <div className="hc hc-d">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=700&q=80"
            alt="Model"
          />
        </div>

        {/* Column B/C, Row 2 — two small bottom-centre images */}
        <div className="hc hc-e">
          <img
            src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500&q=80"
            alt="Portrait 2"
          />
        </div>
        <div className="hc hc-f">
          <img
            src="https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=500&q=80"
            alt="Objects"
          />
        </div>
      </div>

      {/* ─── Absolutely-centred title overlay ─── */}
      <div className="hero-overlay">
        <div className="hero-title-block hero-fade-in">
          <h1 className="hero-title">
            Timeless.<br />
            <span>Captured</span> with<br />
            Perfection.
          </h1>
        </div>
        <div className="hero-sub-block hero-fade-in" style={{ animationDelay: '0.35s' }}>
          <p className="hero-subtitle">
            We craft compelling imagery that blends artistic<br className="hero-br" />
            vision with technical precision.
          </p>
          <a href="#projects" className="btn-outline">
            Explore portfolio →
          </a>
        </div>
      </div>
    </section>
  )
}
