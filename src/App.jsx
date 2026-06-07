import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">ITabid Tech</div>

        <ul>
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
          <li>Portfolio</li>
          <li>Contact</li>
        </ul>
      </nav>

      <section className="hero">
        <div className="hero-text">
          <h1>Building Digital Solutions for the Future</h1>

          <p>
            We design websites, software and technology solutions that help
            businesses grow.
          </p>

          <button>Start Project</button>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?w=900"
            alt="Technology"
          />
        </div>
      </section>

      <section className="about">
        <h2>About Us</h2>

        <p>
          ITabid Tech delivers modern software development, web applications,
          cloud solutions and digital transformation services.
        </p>
      </section>

      <section className="services">
        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>Responsive business websites.</p>
          </div>

          <div className="card">
            <h3>Software Development</h3>
            <p>Custom systems and applications.</p>
          </div>

          <div className="card">
            <h3>IT Consulting</h3>
            <p>Technology strategy and support.</p>
          </div>
        </div>
      </section>

      <section className="portfolio">
        <h2>Portfolio</h2>

        <div className="cards">
          <div className="card">Project One</div>
          <div className="card">Project Two</div>
          <div className="card">Project Three</div>
        </div>
      </section>

      <section className="contact">
        <h2>Contact</h2>

        <p>Email: info@itabidtech.com</p>
        <p>Phone: +256 XXX XXX XXX</p>
      </section>

      <footer>
        © 2026 ITabid Tech. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;
