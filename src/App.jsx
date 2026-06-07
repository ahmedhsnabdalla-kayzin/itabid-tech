import "./App.css";

function App() {
  return (
    <>
      <nav className="navbar">
        <h2>ITabid Tech</h2>

        <div className="menu">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#services">Services</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section id="home" className="hero">
        <h1>Building the Future with Technology</h1>

        <p>
          We create websites, software solutions, and digital products for
          businesses and individuals.
        </p>

        <button>Get Started</button>
      </section>

      <section id="about" className="section">
        <h2>About Us</h2>

        <p>
          ITabid Tech is a technology company focused on web development,
          software engineering, and digital transformation.
        </p>
      </section>

      <section id="services" className="section">
<section id="about" className="section">
  <h2>About ITabid Tech</h2>

  <p>
    ITabid Tech delivers modern software, websites, and digital solutions for
    businesses, organizations, and startups. Our mission is to help clients
    grow through technology, innovation, and quality service.
  </p>

  <div className="stats">
    <div className="stat">
      <h3>50+</h3>
      <p>Projects</p>
    </div>

    <div className="stat">
      <h3>20+</h3>
      <p>Clients</p>
    </div>

    <div className="stat">
      <h3>100%</h3>
      <p>Commitment</p>
    </div>
  </div>
</section>        <h2>Our Services</h2>

        <div className="cards">
          <div className="card">
            <h3>Web Development</h3>
            <p>Modern responsive websites.</p>
          </div>

          <div className="card">
            <h3>Software Development</h3>
            <p>Custom applications for businesses.</p>
          </div>

          <div className="card">
            <h3>IT Consulting</h3>
            <p>Technology solutions and support.</p>
          </div>
        </div>
      </section>

      <section id="contact" className="section">
        <h2>Contact Us</h2>

        <p>Email: info@itabidtech.com</p>
        <p>Phone: +256 XXX XXX XXX</p>
      </section>

      <footer className="footer">
        © 2026 ITabid Tech. All Rights Reserved.
      </footer>
    </>
  );
}

export default App;
