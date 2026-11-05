import "./App.css";

function App() {
  return (
    <div className="portfolio">
      {/* Navbar */}
      <nav className="navbar">
        <h2 className="logo">
          Zeina<span>.</span>
        </h2>

        <ul className="nav-links">
          <li>
            <a href="#home">Home</a>
          </li>
          <li>
            <a href="#about">About</a>
          </li>
          <li>
            <a href="#skills">Skills</a>
          </li>
          <li>
            <a href="#projects">Projects</a>
          </li>
          <li>
            <a href="#contact">Contact</a>
          </li>
        </ul>

        <a href="#contact" className="nav-btn">
          Let's Talk
        </a>
      </nav>

      {/* Hero Section */}
      <section className="hero" id="home">
        <div className="hero-content">
          <p className="welcome">WELCOME TO MY PORTFOLIO</p>

          <h1>
            Hi, I'm <span>Zeina Hany</span>
          </h1>

          <h2>Front-End Developer</h2>

          <p className="description">
            I'm a Computer Science student passionate about creating modern,
            responsive, and user-friendly web experiences.
          </p>

          <div className="hero-buttons">
            <a href="#projects" className="primary-btn">
              View My Work
            </a>

            <a href="#contact" className="secondary-btn">
              Contact Me
            </a>
          </div>
        </div>

        <div className="hero-card">
          <div className="card-glow"></div>

          <div className="card-content">
            <p>HELLO, I'M</p>
            <h2>Zeina Hany</h2>
            <h3>Front-End Developer</h3>

            <div className="card-line"></div>

            <p className="card-text">
              Turning ideas into beautiful digital experiences.
            </p>

            <span className="code-icon">&lt;/&gt;</span>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="projects-section" id="projects">
        <p className="welcome">MY RECENT WORK</p>
        <h2 className="section-title">
          My <span>Projects</span>
        </h2>

        <p className="section-subtitle">
          Here are some projects I've worked on.
        </p>

        <div className="project-grid">
          <div className="project-card">
            <span className="project-number">01</span>
            <h3>AI Marketing Website</h3>

            <p>
              A website exploring Artificial Intelligence applications in
              Digital Marketing, along with a Power BI dashboard.
            </p>

            <div className="tech-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Power BI</span>
            </div>
            <a
              href="https://github.com/Zeinaahany/ai-marketing-website"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub ↗
            </a>
          </div>

          <div className="project-card">
            <span className="project-number">02</span>
            <h3>My Tasks</h3>

            <p>
              A task management application that allows users to add, complete,
              filter, and delete tasks, with Local Storage and Dark Mode.
            </p>

            <div className="tech-list">
              <span>HTML</span>
              <span>CSS</span>
              <span>JavaScript</span>
              <span>Local Storage</span>
            </div>
            <a
              href="https://github.com/Zeinaahany/My-Tasks"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub ↗
            </a>
          </div>

          <div className="project-card">
            <span className="project-number">03</span>
            <h3>Hospital Management System</h3>

            <p>
              A C++ application for managing patients and doctors, supporting
              CRUD operations and file handling.
            </p>

            <div className="tech-list">
              <span>C++</span>
              <span>OOP</span>
              <span>File Handling</span>
            </div>
            <a
              href="https://github.com/Zeinaahany/hospital-management-system"
              target="_blank"
              rel="noreferrer"
              className="project-link"
            >
              View on GitHub ↗
            </a>
          </div>

          <div className="project-card">
            <span className="project-number">04</span>
            <h3>Online Library Management System</h3>

            <p>
              A university System Analysis and Design project. I independently
              created the Sequence Diagrams and contributed to the remaining
              documentation.
            </p>

            <div className="tech-list">
              <span>UML</span>
              <span>Sequence Diagrams</span>
              <span>SAD</span>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact-section" id="contact">
        <p className="welcome">GET IN TOUCH</p>

        <h2 className="section-title">
          Let's <span>Connect</span>
        </h2>

        <p className="section-subtitle">
          I'm always open to discussing new opportunities and interesting
          projects.
        </p>

        <div className="contact-links">
          <a href="mailto:zeina.hany.dev@gmail.com" className="contact-link">
            Email Me ↗
          </a>

          <a
            href="https://www.linkedin.com/in/zeina-hany-194429373"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            LinkedIn ↗
          </a>

          <a
            href="https://github.com/Zeinaahany"
            target="_blank"
            rel="noreferrer"
            className="contact-link"
          >
            GitHub ↗
          </a>
        </div>
      </section>

      <footer className="footer">
        © 2026 Zeina Hany. All Rights Reserved.
      </footer>
    </div>
  );
}

export default App;
