import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/global.css';

// Types
interface SkillGroup {
  category: string;
  skills: string[];
}

interface FeaturedProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  technologies: string[];
}

const Home: React.FC = () => {
  // Skills summary data
  const skillGroups: SkillGroup[] = [
    {
      category: 'Frontend',
      skills: ['React', 'TypeScript', 'HTML/CSS', 'JavaScript']
    },
    {
      category: 'Backend',
      skills: ['Node.js', 'Express', 'MongoDB', 'SQL']
    },
    {
      category: 'Tools',
      skills: ['Git', 'Docker', 'Webpack', 'Jest']
    }
  ];
  
  // Featured projects data
  const featuredProjects: FeaturedProject[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering, shopping cart, and checkout.',
      imageUrl: '/placeholder-project.jpg',
      technologies: ['React', 'Node.js', 'MongoDB']
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A project management tool that helps users organize tasks, set priorities, and track progress.',
      imageUrl: '/placeholder-project.jpg',
      technologies: ['React', 'TypeScript', 'Firebase']
    }
  ];
  
  return (
    <main className="page home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-content">
              <h1 className="hero-title">Hello, I'm <span className="highlight">Williams R. Villazar Hdez.</span></h1>
              <h2 className="hero-subtitle">Web Developer & Web Designer</h2>
              <p className="hero-description">
                Creo tu pagina web deseada a partir de tus gustos y decisiones.<br></br>
                Mi pasion la tecnologia, mi hobbie los videojuegos.
              </p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">View My Work</Link>
                <Link to="/contact" className="btn btn-secondary">Contact Me</Link>
              </div>
            </div>
            <div className="hero-image-container">
              <img 
                src="/IMG_0109.JPG" 
                alt="Williams R. Villazar Hdez." 
                className="hero-image"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about">
        <div className="container">
          <h2 className="section-title">Conoceme Mejor</h2>
          <div className="about-content">
            <div className="about-text">
              <p>
              Soy un desarrollador de software dedicado con experiencia en desarrollo web. 
              Mi trayectoria en programación comenzó hace varios años y, desde entonces, 
              me apasiona crear aplicaciones eficientes y fáciles de usar.
              </p>
              <p>
              Me especializo en desarrollo front-end con React, pero también me siento cómodo 
              trabajando con tecnologías back-end. Disfruto aprendiendo nuevas habilidades y 
              manteniéndome al día con las últimas tendencias del sector.
              </p>
              <p>
                Tambien me dedico a estudiar el area de la ciberseguridad,
                en la cual tengo un gran interes, ya que me gusta aprender sobre la seguridad 
                de los sistemas y redes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Summary Section */}
      <section className="skills-summary">
        <div className="container">
          <h2 className="section-title">My Skills</h2>
          <div className="skills-grid">
            {skillGroups.map((group, index) => (
              <div key={index} className="skill-group">
                <h3 className="skill-group-title">{group.category}</h3>
                <ul className="skill-list">
                  {group.skills.map((skill, skillIndex) => (
                    <li key={skillIndex} className="skill-item-summary">{skill}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/skills" className="btn">View All Skills</Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="container">
          <h2 className="section-title">Proyectos Principales</h2>
          <div className="project-grid">
            {featuredProjects.map(project => (
              <div key={project.id} className="project-card">
                <div className="project-image placeholder"></div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">
                  {project.description}
                </p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
                <Link to={`/projects`} className="btn btn-sm">See Details</Link>
              </div>
            ))}
          </div>
          <div className="section-footer">
            <Link to="/projects" className="btn">View All Projects</Link>
          </div>
        </div>
      </section>

      {/* Contact Preview Section */}
      <section className="contact-preview">
        <div className="container">
          <h2 className="section-title">Get In Touch</h2>
          <p className="contact-text">
            Interested in working together or have a question? Feel free to reach out!
          </p>
          <div className="contact-preview-buttons">
            <Link to="/contact" className="btn btn-primary">Contact Me</Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
