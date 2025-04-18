import React from 'react';
import '../styles/global.css';

interface SocialLink {
  name: string;
  url: string;
  icon: string;
}

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks: SocialLink[] = [
    { 
      name: 'GitHub', 
      url: 'https://github.com/willrd14', 
      icon: '🔗' 
    },
    { 
      name: 'LinkedIn', 
      url: 'https://linkedin.com/in/williams-rafael-villavizar-hdez-652a7b158', 
      icon: '🔗' 
    },
    { 
      name: 'Twitter', 
      url: 'https://twitter.com/wilrd3', 
      icon: '🔗' 
    },
  ];

  return (
    <footer className="footer">
      <div className="container footer-container">
        <div className="footer-content">
          <div className="footer-info">
            <p>&copy; {currentYear} Williams R. Villavizar Hdez. All rights reserved.</p>
          </div>
          
          <div className="social-links">
            <ul className="social-list">
              {socialLinks.map((link) => (
                <li key={link.name} className="social-item">
                  <a 
                    href={link.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    aria-label={link.name}
                  >
                    <span className="social-icon">{link.icon}</span>
                    <span className="social-name">{link.name}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Built with React and TypeScript</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
