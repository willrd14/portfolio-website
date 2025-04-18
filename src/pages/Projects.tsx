import React, { useState, useEffect } from 'react';
import '../styles/global.css';

// TypeScript interfaces
interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  imageUrl: string;
  technologies: string[];
  category: ProjectCategory;
  demoUrl?: string;
  codeUrl?: string;
  featured?: boolean;
}

type ProjectCategory = 'web' | 'mobile' | 'desktop' | 'all';

interface FilterOption {
  label: string;
  value: ProjectCategory;
}

const Projects: React.FC = () => {
  // Filter options
  const filterOptions: FilterOption[] = [
    { label: 'All Projects', value: 'all' },
    { label: 'Web Development', value: 'web' },
    { label: 'Mobile Apps', value: 'mobile' },
    { label: 'Desktop Applications', value: 'desktop' },
  ];

  // Projects data
  const allProjects: Project[] = [
    {
      id: 1,
      title: 'E-commerce Website',
      description: 'A fully responsive e-commerce platform with product filtering, shopping cart, and checkout functionality.',
      longDescription: 'This project is a comprehensive e-commerce solution built with React and Node.js. It features user authentication, product management, shopping cart functionality, and secure payment processing. The platform is fully responsive and optimized for all devices.',
      imageUrl: '/placeholder-project.jpg',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB'],
      category: 'web',
      demoUrl: 'https://example.com/demo',
      codeUrl: 'https://github.com/yourusername/project-repo',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A project management tool that helps users organize tasks, set priorities, and track progress.',
      longDescription: 'This task management application helps teams organize their work efficiently. It includes features like task assignment, progress tracking, due dates, and priority management. Built with a modern tech stack, it provides a seamless user experience across devices.',
      imageUrl: '/placeholder-project.jpg',
      technologies: ['React', 'TypeScript', 'Firebase'],
      category: 'web',
      demoUrl: 'https://example.com/demo',
      codeUrl: 'https://github.com/yourusername/project-repo',
      featured: true
    },
    {
      id: 3,
      title: 'Weather Application',
      description: 'A weather app that provides real-time forecasts and historical weather data for locations worldwide.',
      longDescription: 'This weather application delivers accurate forecasts using data from multiple weather APIs. Users can search for locations, save favorites, and view detailed weather information including temperature, humidity, wind speed, and precipitation forecasts.',
      imageUrl: '/placeholder-project.jpg',
      technologies: ['JavaScript', 'API Integration', 'CSS'],
      category: 'web',
      demoUrl: 'https://example.com/demo',
      codeUrl: 'https://github.com/yourusername/project-repo'
    },
    {
      id: 4,
      title: 'Personal Blog',
      description: 'A blog platform with content management system, user authentication, and commenting features.',
      longDescription: 'This personal blogging platform allows for easy content creation and management. It features a custom CMS, comment system, user profiles, and search functionality. The design emphasizes readability and user experience.',
      imageUrl: '/placeholder-project.jpg',
      technologies: ['React', 'Node.js', 'MySQL'],
      category: 'web',
      demoUrl: 'https://example.com/demo',
      codeUrl: 'https://github.com/yourusername/project-repo'
    },
    {
      id: 5,
      title: 'Fitness Tracker Mobile App',
      description: 'A mobile application for tracking workouts, nutrition, and fitness progress.',
      longDescription: 'This fitness tracking app helps users monitor their health journey by logging workouts, tracking nutrition, and visualizing progress over time. It includes custom workout plans, calorie counting, and integration with health devices.',
      imageUrl: '/placeholder-project.jpg',
      technologies: ['React Native', 'Firebase', 'Redux'],
      category: 'mobile',
      demoUrl: 'https://example.com/demo',
      codeUrl: 'https://github.com/yourusername/project-repo'
    },
    {
      id: 6,
      title: 'Desktop File Organizer',
      description: 'A desktop utility that automatically organizes files based on type, date, or custom rules.',
      longDescription: 'This desktop application helps users maintain an organized file system by automatically sorting and categorizing files according to customizable rules. It supports scheduled operations, file type recognition, and detailed reporting.',
      imageUrl: '/placeholder-project.jpg',
      technologies: ['Electron', 'JavaScript', 'Node.js'],
      category: 'desktop',
      codeUrl: 'https://github.com/yourusername/project-repo'
    }
  ];

  // State for filtered projects and active filter
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('all');
  const [filteredProjects, setFilteredProjects] = useState<Project[]>(allProjects);

  // Filter projects when active filter changes
  useEffect(() => {
    if (activeFilter === 'all') {
      setFilteredProjects(allProjects);
    } else {
      const filtered = allProjects.filter(project => project.category === activeFilter);
      setFilteredProjects(filtered);
    }
  }, [activeFilter]);

  // Handle filter change
  const handleFilterChange = (category: ProjectCategory) => {
    setActiveFilter(category);
  };

  return (
    <main className="page projects-page">
      <section className="projects-header">
        <div className="container">
          <h1 className="page-title">My Projects</h1>
          <p className="page-description">
            Here are some of the projects I've worked on. Each project represents different skills and technologies I've utilized in my development journey.
          </p>
        </div>
      </section>

      <section className="projects-filter">
        <div className="container">
          <div className="filter-options">
            {filterOptions.map(option => (
              <button
                key={option.value}
                className={`filter-btn ${activeFilter === option.value ? 'active' : ''}`}
                onClick={() => handleFilterChange(option.value)}
              >
                {option.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="projects-showcase">
        <div className="container">
          {filteredProjects.length === 0 ? (
            <div className="no-projects">
              <p>No projects found in this category.</p>
            </div>
          ) : (
            <div className="projects-grid">
              {filteredProjects.map(project => (
                <div key={project.id} className="project-card">
                  <div className="project-image">
                    <div className="placeholder"></div>
                  </div>
                  <div className="project-details">
                    <h2 className="project-title">{project.title}</h2>
                    <p className="project-description">{project.description}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                    <div className="project-links">
                      {project.demoUrl && (
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm"
                        >
                          Live Demo
                        </a>
                      )}
                      {project.codeUrl && (
                        <a
                          href={project.codeUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-sm btn-outline"
                        >
                          View Code
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
    </main>
  );
};

export default Projects;
