import { useEffect, useState } from 'react';

const profile = {
  name: 'Rosis Kharel',
  title: 'Computer Science Student',
  intro:
    'I learn new tools and build useful software with the skills I develop',
  location: 'Kathmandu, Nepal',
  email: 'rosiskharel5@gmail.com',
  github: 'github.com/RosisK',
  linkedin: 'linkedin.com/in/rosiskharel',
  resumeLabel: 'Download resume',
};

const sections = [
  { id: 'overview', label: 'Overview' },
  { id: 'about', label: 'About Me' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  // { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' },
];

const highlights = [
  {
    value: '10+',
    label: 'Projects finished',
  },
  // {
  //   value: '3',
  //   label: 'Hackathons and team builds',
  // },
  {
    value: '4 yrs',
    label: 'Learning by building',
  },
];

const projects = [
  {
    title: 'Windows File Manager',
    type: 'Low Level Desktop Application',
    description:
      'A fully functional File Explorer with additional functionalities including Compression, Duplicate detection and Benchmarking.',
    stack: ['C++', 'C# Winforms', 'Native DLL'],
    link: 'https://github.com/RosisK/file-optimizer',
  },
  {
    title: 'Real Time Chat Application',
    type: 'Telecommunication Web App',
    description:
      'A private chat application, allowing you to communicate with close friends securely.',
    stack: ['React', 'Express.js', 'MySQL'],
    link: 'https://github.com/RosisK/messaging-app',
  },
  {
    title: 'RK Suppliers Online Store',
    type: 'E-Commerce Web Application',
    description:
      'An online store website for bag wholesale store, with an aesthetic interface and smooth experience.',
    stack: ['Next.js', 'Tailwind CSS', 'Pocketbase'],
    link: 'https://rk-suppliers.vercel.app',
  },
];

const skillGroups = [
  {
    title: 'Languages',
    items: ['C/C++', 'Python', 'JavaScript', 'SQL'],
  },
  {
    title: 'Frameworks',
    items: ['Next.js', 'Django', 'React', 'Tailwind'],
  },
  {
    title: 'Tools',
    items: ['Git/GitHub', 'Linux CLI', 'Docker', 'OpenGL'],
  },
];

const milestones = [
  {
    year: '2026',
    title: 'Building stronger portfolio projects',
    description:
      'Focused on refining my frontend skills and shipping projects that feel polished, useful, and easy to explain.',
  },
  {
    year: '2024',
    title: 'Started working with React',
    description:
      'Learned component-based thinking, state, props, and how to build interfaces that respond to real user input.',
  },
  {
    year: '2022',
    title: 'Found my interest in software',
    description:
      'Started with fundamentals, small coding exercises, and personal experiments that made computer science feel creative.',
  },
];

function App() {
  const [theme, setTheme] = useState('dark');

  useEffect(() => {
    const savedTheme = window.localStorage.getItem('theme');
    const preferredTheme = window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';

    setTheme(savedTheme ?? preferredTheme);
  }, []);

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('theme', theme);
  }, [theme]);

  function toggleTheme() {
    setTheme((currentTheme) => (currentTheme === 'light' ? 'dark' : 'light'));
  }

  return (
    <div className="site-shell">
      <header className="topbar">
        <a className="brand" href="#overview" aria-label="Homepage">
          <span className="brand-mark">{"{}"}</span>
          <span>{profile.name}</span>
        </a>

        <nav className="topnav" aria-label="Main navigation">
          {sections.map((section) => (
            <a key={section.id} href={`#${section.id}`}>
              {section.label}
            </a>
          ))}
        </nav>

        <div className="topbar-actions">
          <button className="theme-toggle" type="button" onClick={toggleTheme}>
            {theme === 'light' ? 'Dark mode' : 'Light mode'}
          </button>
          <a className="topbar-cta" href="#contact">
            Contact Me
          </a>
        </div>
      </header>

      <div className="layout">
        <aside className="sidebar">
          <p className="sidebar-label">GET STARTED</p>
          <ul className="sidebar-group">
            <li>
              <a href="#overview">Home</a>
            </li>
            <li>
              <a href="#about">Who I Am</a>
            </li>
          </ul>

          <p className="sidebar-label">EXPLORE</p>
          <ul className="sidebar-group">
            {sections.slice(2).map((section) => (
              <li key={section.id}>
                <a href={`#${section.id}`}>{section.label}</a>
              </li>
            ))}
          </ul>
        </aside>

        <main className="content">
          <section id="overview" className="hero section-card">
            <p className="eyebrow">Learn about me</p>
            <h1>{profile.title}</h1>
            <p className="lead">{profile.intro}</p>

            <div className="hero-actions">
              <a className="primary-button" href="#projects">
                View projects
              </a>
              <a className="secondary-button" href="#contact">
                Contact me
              </a>
            </div>

            <div className="hero-grid">
              <article className="profile-panel">
                <p className="mini-label">CURRENTLY</p>
                <h2>Learning by building real products</h2>
                <p>
                  I am a CS student who enjoys frontend development, clean UI,
                  and the process of turning ideas into something practical.
                </p>
                <ul className="profile-list">
                  <li>{profile.location}</li>
                  <li>{profile.email}</li>
                  <li>{profile.github}</li>
                </ul>
              </article>

              <div className="stats-panel">
                {highlights.map((item) => (
                  <article key={item.label} className="stat-card">
                    <strong>{item.value}</strong>
                    <span>{item.label}</span>
                  </article>
                ))}
              </div>
            </div>
          </section>

          <section id="about" className="section-block">
            <div className="section-heading">
              <p className="eyebrow">About Me</p>
              <h2>A portfolio that reads like a story, not a resume dump</h2>
            </div>
            <div className="copy-card">
              <p>
                I'm interested in web development because it combines logic,
                design, and communication. I like building interfaces that feel
                calm, clear, and welcoming.
              </p>
              <p>
                Right now, I'm focused on growing my React skills, improving
                how I structure projects, and learning how strong UI decisions
                make software easier to use.
              </p>
            </div>
          </section>

          <section id="projects" className="section-block">
            <div className="section-heading">
              <p className="eyebrow">Projects</p>
              <h2>Things I've built while learning and experimenting</h2>
            </div>

            <div className="project-list">
              {projects.map((project) => (
                <article key={project.title} className="project-card">
                  <p className="mini-label">{project.type}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <ul className="tag-list">
                    {project.stack.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                  <a target='blank' href={project.link}>Project link</a>
                </article>
              ))}
            </div>
          </section>

          <section id="skills" className="section-block">
            <div className="section-heading">
              <p className="eyebrow">Skills</p>
              <h2>Tools and topics I'm building confidence with</h2>
            </div>

            <div className="skills-grid">
              {skillGroups.map((group) => (
                <article key={group.title} className="skill-card">
                  <h3>{group.title}</h3>
                  <ul className="simple-list">
                    {group.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </section>

          {/* <section id="journey" className="section-block">
            <div className="section-heading">
              <p className="eyebrow">Journey</p>
              <h2>How I've been growing as a developer</h2>
            </div>

            <div className="timeline">
              {milestones.map((milestone) => (
                <article key={milestone.year} className="timeline-item">
                  <span>{milestone.year}</span>
                  <div>
                    <h3>{milestone.title}</h3>
                    <p>{milestone.description}</p>
                  </div>
                </article>
              ))}
            </div>
          </section> */}

          <section id="contact" className="section-block">
            <div className="section-heading">
              <p className="eyebrow">Contact</p>
              <h2>Interested in collaborating or just saying hello?</h2>
            </div>

            <div className="contact-card">
              <p>
                I'm open to internships, student collaborations, and
                opportunities where I can keep learning while contributing.
              </p>
              <div className="contact-links">
                <a target='blank' href={`mailto:${profile.email}`}>{profile.email}</a>
                <a target='blank' href={`https://${profile.github}`}>GitHub</a>
                <a target='blank' href={`https://${profile.linkedin}`}>LinkedIn</a>
              </div>
              <a className="secondary-button" href={ `${import.meta.env.BASE_URL}resume.pdf`} download>
                {profile.resumeLabel}
              </a>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}

export default App;
