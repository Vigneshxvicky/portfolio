


import './App.css';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Lottie from 'lottie-react';
import gradientBg from './gradient-bg.json';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaSass, FaGitAlt, FaDatabase, FaAward, FaCode, FaRocket } from 'react-icons/fa';
import { SiJavascript, SiTypescript, SiRedux, SiMongodb, SiMysql, SiExpress, SiGithub } from 'react-icons/si';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1200, once: true, easing: 'ease-out-cubic' });
  }, []);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    }
  };

  return (
    <div className="modern-app">
      {/* Animated Particles Background */}
      <div className="particles-bg">
        <Lottie animationData={gradientBg} loop={true} className="particles-animation" />
      </div>
      
      {/* Floating Elements */}
      <div className="floating-elements">
        <motion.div className="float-element element-1" animate={{ y: [0, -30, 0], rotate: [0, 180, 360] }} transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }} />
        <motion.div className="float-element element-2" animate={{ y: [0, 25, 0], rotate: [0, -180, -360] }} transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }} />
        <motion.div className="float-element element-3" animate={{ y: [0, -20, 0], x: [0, 15, 0] }} transition={{ repeat: Infinity, duration: 10, ease: "easeInOut" }} />
      </div>

      {/* Modern Navigation */}
      <motion.nav className="modern-nav" initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 1, delay: 0.2 }}>
        <motion.div className="nav-brand" whileHover={{ scale: 1.1 }}>
          <FaCode className="brand-icon" />
          <span className="brand-text">Vigneshxvicky</span>
        </motion.div>
        <div className="nav-links">
          <motion.a href="#about" whileHover={{ scale: 1.1, color: "#00f5ff" }}>About</motion.a>
          <motion.a href="#skills" whileHover={{ scale: 1.1, color: "#00f5ff" }}>Skills</motion.a>
          <motion.a href="#projects" whileHover={{ scale: 1.1, color: "#00f5ff" }}>Projects</motion.a>
          <motion.a href="#certificates" whileHover={{ scale: 1.1, color: "#00f5ff" }}>Certificates</motion.a>
          <motion.a href="#contact" whileHover={{ scale: 1.1, color: "#00f5ff" }}>Contact</motion.a>
        </div>
      </motion.nav>
      
      {/* Revolutionary Hero Section */}
      <motion.section className="revolutionary-hero" initial="hidden" animate="visible" variants={containerVariants}>
        <div className="hero-content">
          <motion.div className="avatar-container" variants={itemVariants}>
            <div className="avatar-rings">
              <div className="ring ring-1"></div>
              <div className="ring ring-2"></div>
              <div className="ring ring-3"></div>
            </div>
            <motion.div className="avatar-image" whileHover={{ scale: 1.1, rotate: 5 }} transition={{ type: "spring", stiffness: 300 }}>
              <img src="/ghibli-portrait.png.jpg" alt="Vignesh - Full Stack Developer" />
            </motion.div>
          </motion.div>
          
          <motion.div className="hero-text" variants={itemVariants}>
            <motion.h1 className="hero-title" whileHover={{ scale: 1.02 }}>
              <span className="title-line">Hello, I'm</span>
              <span className="title-name">Vignesh</span>
              <span className="title-profession">Full Stack Developer</span>
            </motion.h1>
            <motion.p className="hero-description" variants={itemVariants}>
              Crafting digital experiences with <span className="highlight">React</span>, <span className="highlight">Node.js</span>, 
              and modern web technologies. Passionate about creating scalable, beautiful applications that make a difference.
            </motion.p>
            <motion.div className="hero-cta" variants={itemVariants}>
              <motion.a href="#projects" className="cta-primary" whileHover={{ scale: 1.05, boxShadow: "0 20px 40px rgba(0, 245, 255, 0.3)" }} whileTap={{ scale: 0.95 }}>
                <FaRocket /> View My Work
              </motion.a>
              <motion.a href="/resume.pdf" download="Vignesh_Resume.pdf" className="cta-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                Download CV
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
        
        {/* Floating Stats */}
        <motion.div className="floating-stats" variants={itemVariants}>
          <motion.div className="stat-card" whileHover={{ scale: 1.05, y: -5 }}>
            <span className="stat-number">20+</span>
            <span className="stat-label">Projects</span>
          </motion.div>
          <motion.div className="stat-card" whileHover={{ scale: 1.05, y: -5 }}>
            <span className="stat-number">1+</span>
            <span className="stat-label">Years Experience</span>
          </motion.div>
          <motion.div className="stat-card" whileHover={{ scale: 1.05, y: -5 }}>
            <span className="stat-number">100%</span>
            <span className="stat-label">Client Satisfaction</span>
          </motion.div>
        </motion.div>
      </motion.section>
      {/* Modern Content Container */}
      <div className="modern-container">
        <AnimatePresence>
          {/* About Section - Glass Card */}
          <motion.section id="about" className="glass-section" data-aos="fade-up" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="section-header">
              <motion.h2 className="section-title" whileHover={{ scale: 1.02 }}>
                <FaCode className="title-icon" />
                About Me
              </motion.h2>
            </div>
            <motion.div className="about-content" variants={containerVariants} initial="hidden" whileInView="visible">
              <motion.p className="about-text" variants={itemVariants}>
                I'm <span className="highlight-text">Vignesh</span>, a passionate full stack developer who loves creating digital experiences that matter. 
                With expertise in modern web technologies and a keen eye for design, I build applications that are not only functional but also beautiful and intuitive.
              </motion.p>
              <motion.div className="about-highlights" variants={itemVariants}>
                <div className="highlight-item">
                  <FaRocket className="highlight-icon" />
                  <span>Performance Optimized</span>
                </div>
                <div className="highlight-item">
                  <FaCode className="highlight-icon" />
                  <span>Clean Code</span>
                </div>
                <div className="highlight-item">
                  <FaAward className="highlight-icon" />
                  <span>Best Practices</span>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Experience Section */}
          <motion.section id="experience" className="glass-section" data-aos="fade-up" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.2 }}>
            <div className="section-header">
              <h2 className="section-title">
                <FaAward className="title-icon" />
                Experience
              </h2>
            </div>
            <motion.div className="experience-timeline" whileInView="visible" variants={containerVariants} initial="hidden">
              <motion.div className="timeline-item" variants={itemVariants} whileHover={{ scale: 1.02, x: 10 }}>
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h3 className="job-title">Full Stack Developer Intern</h3>
                  <span className="company-name">Zidio Development</span>
                  <span className="job-duration">Apr 2025 - May 2025</span>
                  <ul className="job-description">
                    <li>Developed responsive web applications using React.js and Node.js</li>
                    <li>Collaborated with cross-functional teams to deliver scalable solutions</li>
                    <li>Improved application performance by 40% through optimization techniques</li>
                  </ul>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>
          {/* Skills Section */}
          <motion.section id="skills" className="glass-section" data-aos="fade-up" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.3 }}>
            <div className="section-header">
              <h2 className="section-title">
                <FaCode className="title-icon" />
                Technical Skills
              </h2>
            </div>
            <motion.div className="skills-showcase" variants={containerVariants} initial="hidden" whileInView="visible">
              <motion.div className="skill-category" variants={itemVariants}>
                <h3 className="category-title">Frontend</h3>
                <div className="skills-grid">
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: 5 }}><SiJavascript /><span>JavaScript</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: -5 }}><SiTypescript /><span>TypeScript</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: 5 }}><FaReact /><span>React.js</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: -5 }}><SiRedux /><span>Redux</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: 5 }}><FaHtml5 /><span>HTML5</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: -5 }}><FaCss3Alt /><span>CSS3</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: 5 }}><FaSass /><span>SASS</span></motion.div>
                </div>
              </motion.div>
              <motion.div className="skill-category" variants={itemVariants}>
                <h3 className="category-title">Backend</h3>
                <div className="skills-grid">
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: -5 }}><FaNodeJs /><span>Node.js</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: 5 }}><SiExpress /><span>Express</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: -5 }}><SiMongodb /><span>MongoDB</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: 5 }}><SiMysql /><span>MySQL</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: -5 }}><FaDatabase /><span>REST APIs</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: 5 }}><FaGitAlt /><span>Git</span></motion.div>
                  <motion.div className="skill-item" whileHover={{ scale: 1.1, rotate: -5 }}><SiGithub /><span>GitHub</span></motion.div>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Projects Section */}
          <motion.section id="projects" className="glass-section" data-aos="fade-up" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.4 }}>
            <div className="section-header">
              <h2 className="section-title">
                <FaRocket className="title-icon" />
                Featured Projects
              </h2>
            </div>
            <motion.div className="projects-showcase" variants={containerVariants} initial="hidden" whileInView="visible">
              <motion.div className="project-item" variants={itemVariants} whileHover={{ scale: 1.03, y: -10 }}>
                <div className="project-image portfolio-bg">
                  <div className="project-overlay">
                    <FaCode className="overlay-icon" />
                  </div>
                </div>
                <div className="project-content">
                  <h3>Portfolio Website</h3>
                  <p>A modern, responsive portfolio showcasing projects and skills with advanced animations.</p>
                  <div className="project-tech">
                    <span>React.js</span>
                    <span>Framer Motion</span>
                    <span>CSS3</span>
                  </div>
                  <a href="https://vignesh-portfolios.netlify.app/" className="project-link">View Project</a>
                </div>
              </motion.div>
              <motion.div className="project-item" variants={itemVariants} whileHover={{ scale: 1.03, y: -10 }}>
                <div className="project-image java-skill-bee-bg">
                  <div className="project-overlay">
                    <FaCode className="overlay-icon" />
                  </div>
                </div>
                <div className="project-content">
                  <h3>Java Skill Bee</h3>
                  <p>Community platform for Java developers to showcase skills and connect.</p>
                  <div className="project-tech">
                    <span>React.js</span>
                    <span>Bootstrap</span>
                    <span>JavaScript</span>
                  </div>
                  <a href="https://java-skill-bee-club.netlify.app/" className="project-link">View Project</a>
                </div>
              </motion.div>
              <motion.div className="project-item" variants={itemVariants} whileHover={{ scale: 1.03, y: -10 }}>
                <div className="project-image simon-game-bg">
                  <div className="project-overlay">
                    <FaCode className="overlay-icon" />
                  </div>
                </div>
                <div className="project-content">
                  <h3>Simon Game</h3>
                  <p>Classic memory game featuring four colored buttons with sound sequences and progressive difficulty levels.</p>
                  <div className="project-tech">
                    <span>HTML5</span>
                    <span>CSS3</span>
                    <span>JavaScript</span>
                  </div>
                  <a href="https://simon-gms.netlify.app/" className="project-link">View Project</a>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Certificates Section */}
          <motion.section id="certificates" className="glass-section" data-aos="fade-up" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.5 }}>
            <div className="section-header">
              <h2 className="section-title">
                <FaAward className="title-icon" />
                Certifications
              </h2>
            </div>
            <motion.div className="certificates-showcase" variants={containerVariants} initial="hidden" whileInView="visible">
              <motion.div className="certificate-item" variants={itemVariants} whileHover={{ scale: 1.02, rotateY: 5 }}>
                <div className="certificate-image">
                  <img src="/udemy-certificate.jpg" alt="Udemy Certificate" />
                </div>
                <div className="certificate-content">
                  <h3>The Complete 2024 Web Development Bootcamp</h3>
                  <p className="certificate-description">Comprehensive full stack development certification covering modern technologies and best practices.</p>
                  <div className="certificate-details">
                    <div className="detail-item">
                      <strong>Instructor:</strong> Dr. Angela Yu
                    </div>
                    <div className="detail-item">
                      <strong>Platform:</strong> Udemy
                    </div>
                    <div className="detail-item">
                      <strong>Duration:</strong> 61.5 hours
                    </div>
                    <div className="detail-item">
                      <strong>Completed:</strong> Dec 31, 2024
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.section>

          {/* Contact Section */}
          <motion.section id="contact" className="glass-section" data-aos="fade-up" initial={{ opacity: 0, y: 60 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.6 }}>
            <div className="section-header">
              <h2 className="section-title">
                <FaRocket className="title-icon" />
                Let's Connect
              </h2>
            </div>
            <motion.div className="contact-content" variants={containerVariants} initial="hidden" whileInView="visible">
              <motion.p className="contact-text" variants={itemVariants}>
                Ready to create something amazing together? Let's discuss your next project!
              </motion.p>
              <motion.div className="contact-links" variants={itemVariants}>
                <motion.a href="mailto:vignesh25vic@gmail.com" className="contact-link" whileHover={{ scale: 1.05, y: -5 }}>
                  Email Me
                </motion.a>
                <motion.a href="https://www.linkedin.com/in/vignesh-k-b3b910346" className="contact-link" whileHover={{ scale: 1.05, y: -5 }}>
                  LinkedIn
                </motion.a>
                <motion.a href="https://github.com/Vigneshxvicky" className="contact-link" whileHover={{ scale: 1.05, y: -5 }}>
                  <SiGithub style={{ marginRight: '8px' }} />
                  GitHub
                </motion.a>
              </motion.div>
            </motion.div>
          </motion.section>
        </AnimatePresence>
      </div>
      
      {/* Modern Footer */}
      <motion.footer className="modern-footer" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ duration: 1 }}>
        <div className="footer-content">
          <p>&copy; {new Date().getFullYear()} Vignesh. Crafted with passion and modern web technologies.</p>
        </div>
      </motion.footer>
    </div>
  );
}


export default App;
