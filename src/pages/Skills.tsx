import React from 'react';
import '../styles/global.css';

interface Skill {
  name: string;
  level: number; // 1-5
  category: 'frontend' | 'backend' | 'tools' | 'other';
}

const Skills: React.FC = () => {
  const skills: Skill[] = [
    // Frontend
    { name: 'HTML5', level: 5, category: 'frontend' },
    { name: 'CSS3', level: 5, category: 'frontend' },
    { name: 'JavaScript', level: 5, category: 'frontend' },
    { name: 'TypeScript', level: 4, category: 'frontend' },
    { name: 'React', level: 4, category: 'frontend' },
    { name: 'Redux', level: 3, category: 'frontend' },
    { name: 'Next.js', level: 3, category: 'frontend' },
    
    // Backend
    { name: 'Node.js', level: 4, category: 'backend' },
    { name: 'Express', level: 4, category: 'backend' },
    { name: 'MongoDB', level: 3, category: 'backend' },
    { name: 'SQL', level: 3, category: 'backend' },
    { name: 'GraphQL', level: 2, category: 'backend' },
    
    // Tools
    { name: 'Git', level: 4, category: 'tools' },
    { name: 'Docker', level: 3, category: 'tools' },
    { name: 'Webpack', level: 3, category: 'tools' },
    { name: 'Jest', level: 3, category: 'tools' },
    
    // Other
    { name: 'Agile/Scrum', level: 4, category: 'other' },
    { name: 'Problem Solving', level: 5, category: 'other' },
    { name: 'UI/UX Design', level: 3, category: 'other' },
    { name: 'Figma', level: 3, category: 'other' }
  ];

  const renderSkillBar = (level: number) => {
    const bars = [];
    for (let i = 1; i <= 5; i++) {
      bars.push(
        <div 
          key={i} 
          className={`skill-level-bar ${i <= level ? 'filled' : ''}`}
        ></div>
      );
    }
    return <div className="skill-level">{bars}</div>;
  };

  const skillsByCategory = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, Skill[]>);

  const categoryTitles = {
    frontend: 'Frontend Development',
    backend: 'Backend Development',
    tools: 'Tools & Workflow',
    other: 'Other Skills',
  };

  return (
    <main className="page skills-page">
      <section className="skills-header">
        <div className="container">
          <h1 className="page-title">Skills & Expertise</h1>
          <p className="page-description">
          Una descripción general de mis habilidades técnicas y 
          áreas de especialización en el desarrollo de software.
          </p>
        </div>
      </section>

      <section className="skills-content">
        <div className="container">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => (
            <div key={category} className="skills-category">
              <h2 className="section-title">{categoryTitles[category as keyof typeof categoryTitles]}</h2>
              <div className="skills-list">
                {categorySkills.map((skill) => (
                  <div key={skill.name} className="skill-item">
                    <div className="skill-header">
                      <span className="skill-name">{skill.name}</span>
                    </div>
                    {renderSkillBar(skill.level)}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Skills;
