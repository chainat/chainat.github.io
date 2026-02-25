export default function Hero() {
  return (
    <div style={{ padding: '0 2rem' }}>
      <section id="hero">
        <div className="hero-line" />
        <div className="hero-tag">Hands-on CTO &amp; Engineering Leader</div>
        <h1 className="hero-name">
          Chainat
          <br />
          <span>Wongtapan</span>
        </h1>
        <p className="hero-title">
          I build teams, architect systems, and <s>write code</s> instrument AI
          automation to supercharge software development team in a new modern
          world.
        </p>
        <p className="hero-desc">
          From early product to scaled platform — 17+ years of hands-on
          engineering leadership. Strong passion for moderen agentic engineering
          and ready to lead the next generation of AI-powered software
          development team.
        </p>
        <div className="hero-ctas">
          <a href="#contact" className="btn btn-primary">
            Get in Touch
          </a>
          <a href="#projects" className="btn btn-outline">
            View My Work
          </a>
        </div>
      </section>
    </div>
  );
}
