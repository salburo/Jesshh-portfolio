import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaTwitter, FaCode, FaMobileAlt, FaCloud, FaArrowDown, FaHeart, FaStar, FaArrowUp, FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaVideo, FaHashtag, FaChartLine, FaDownload, FaGraduationCap, FaBriefcase, FaUserCheck, FaAward, FaGlobe, FaArrowLeft } from 'react-icons/fa'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [currentPage, setCurrentPage] = useState('home')
  const { scrollYProgress } = useScroll()
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.95])
  
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  // Render different pages based on currentPage state
  if (currentPage === 'resume') {
    return (
      <div className="portfolio">
        <BackgroundEffect />
        <ResumePage setCurrentPage={setCurrentPage} />
      </div>
    )
  }

  return (
    <div className="portfolio">
      <BackgroundEffect />
      <Navbar isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} setCurrentPage={setCurrentPage} />
      <main style={{ opacity }}>
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
      
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            className="scroll-top-btn"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={scrollToTop}
          >
            <FaArrowUp />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}

// New Resume Page Component
const ResumePage = ({ setCurrentPage }) => {
  const handleDownloadPDF = () => {
    const printContent = document.createElement('div');
    printContent.innerHTML = `
      <!DOCTYPE html>
      <html>
      <head>
        <title>Jessebel Russel - Resume</title>
        <meta charset="UTF-8">
        <style>
          * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
          }
          body {
            font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
            background: linear-gradient(135deg, #1a1a2e, #0a0a0f);
            color: #ffffff;
            padding: 2rem;
            line-height: 1.6;
          }
          .resume-container {
            max-width: 900px;
            margin: 0 auto;
            background: linear-gradient(135deg, #1a1a2e, #0a0a0f);
            border-radius: 20px;
            padding: 2rem;
            border: 1px solid rgba(102, 126, 234, 0.3);
          }
          .resume-header {
            text-align: center;
            margin-bottom: 2rem;
            padding-bottom: 2rem;
            border-bottom: 2px solid rgba(102, 126, 234, 0.3);
          }
          .resume-header h1 {
            font-size: 2rem;
            margin-bottom: 0.5rem;
            color: #fff;
          }
          .resume-title {
            font-size: 1.1rem;
            color: #667eea;
            margin-bottom: 1rem;
          }
          .resume-contact {
            display: flex;
            justify-content: center;
            gap: 1.5rem;
            flex-wrap: wrap;
            font-size: 0.9rem;
            color: rgba(255, 255, 255, 0.7);
          }
          .resume-section {
            margin-bottom: 2rem;
          }
          .resume-section h3 {
            font-size: 1.3rem;
            margin-bottom: 1rem;
            color: #667eea;
            border-left: 3px solid #667eea;
            padding-left: 1rem;
          }
          .resume-section p {
            color: rgba(255, 255, 255, 0.8);
            margin-bottom: 1rem;
          }
          .resume-item {
            margin-bottom: 1.5rem;
          }
          .resume-item-header {
            display: flex;
            justify-content: space-between;
            align-items: baseline;
            flex-wrap: wrap;
            margin-bottom: 0.25rem;
          }
          .resume-item-header h4 {
            font-size: 1.1rem;
            color: white;
          }
          .resume-date {
            font-size: 0.85rem;
            color: rgba(255, 255, 255, 0.5);
          }
          .resume-company {
            color: #667eea;
            font-size: 0.9rem;
            margin-bottom: 0.5rem;
          }
          ul {
            padding-left: 1.5rem;
            margin-top: 0.5rem;
          }
          li {
            color: rgba(255, 255, 255, 0.7);
            margin-bottom: 0.5rem;
          }
          .skills-grid-resume {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1.5rem;
            margin-top: 1rem;
          }
          .skill-category-resume h4 {
            color: #667eea;
            margin-bottom: 0.75rem;
          }
          .skill-category-resume ul {
            list-style: none;
            padding-left: 0;
          }
          .skill-category-resume li {
            padding-left: 1rem;
            position: relative;
          }
          .skill-category-resume li::before {
            content: "▹";
            position: absolute;
            left: 0;
            color: #667eea;
          }
          .certifications-list, .languages-list {
            list-style: none;
            padding-left: 0;
          }
          .certifications-list li, .languages-list li {
            padding-left: 1.5rem;
            position: relative;
            margin-bottom: 0.75rem;
          }
          .certifications-list li::before {
            content: "🏆";
            position: absolute;
            left: 0;
          }
          .languages-list li::before {
            content: "💬";
            position: absolute;
            left: 0;
          }
          @media print {
            body {
              background: white;
              padding: 0;
            }
            .resume-container {
              background: white;
              color: black;
            }
            .resume-header h1 {
              color: #667eea;
            }
            .resume-title, .resume-company {
              color: #667eea;
            }
            .resume-section h3 {
              color: #667eea;
            }
            li, p {
              color: #333;
            }
          }
        </style>
      </head>
      <body>
        <div class="resume-container">
          <div class="resume-header">
            <h1>Jessebel E. Russel</h1>
            <p class="resume-title">Digital Creator & Virtual Assistant</p>
            <div class="resume-contact">
              <span>📧 jessebelenoyrussel@gmail.com</span>
              <span>📞 09631651031</span>
              <span>📍 Maayung-Tubig, Dauin, Negros Oriental</span>
            </div>
          </div>
          <div class="resume-section">
            <h3>Professional Summary</h3>
            <p>Creative and detail-oriented Digital Creator and Virtual Assistant with 3+ years of experience helping brands establish strong online presence. Skilled in content creation, social media management, and administrative support. Committed to delivering high-quality work that drives engagement and growth.</p>
          </div>
          <div class="resume-section">
            <h3>Work Experience</h3>
            <div class="resume-item">
              <div class="resume-item-header">
                <h4>Freelance Digital Creator</h4>
                <span class="resume-date">2022 - Present</span>
              </div>
              <p class="resume-company">Self-Employed</p>
              <ul>
                <li>Create engaging video content for social media platforms (Instagram, TikTok, Facebook)</li>
                <li>Develop content strategies that increased engagement by 200% for clients</li>
                <li>Manage multiple client accounts and deliver content on schedule</li>
                <li>Edit videos using CapCut, Adobe Premiere, and other professional tools</li>
              </ul>
            </div>
            <div class="resume-item">
              <div class="resume-item-header">
                <h4>Virtual Assistant</h4>
                <span class="resume-date">2021 - Present</span>
              </div>
              <p class="resume-company">Remote Support Specialist</p>
              <ul>
                <li>Provide administrative support to busy executives and entrepreneurs</li>
                <li>Manage email correspondence, calendar scheduling, and travel arrangements</li>
                <li>Handle customer inquiries and provide timely, professional responses</li>
                <li>Coordinate projects using Trello, Asana, and Slack</li>
              </ul>
            </div>
            <div class="resume-item">
              <div class="resume-item-header">
                <h4>Social Media Manager</h4>
                <span class="resume-date">2020 - 2022</span>
              </div>
              <p class="resume-company">Digital Marketing Agency</p>
              <ul>
                <li>Managed social media accounts for 5+ clients across various industries</li>
                <li>Created and scheduled content using Hootsuite and Later</li>
                <li>Analyzed engagement metrics and adjusted strategies accordingly</li>
                <li>Grew followers by 5,000+ through organic content strategies</li>
              </ul>
            </div>
          </div>
          <div class="resume-section">
            <h3>Education</h3>
            <div class="resume-item">
              <div class="resume-item-header">
                <h4>Bachelor of Arts in Communication</h4>
                <span class="resume-date">2016 - 2020</span>
              </div>
              <p class="resume-company">Negros Oriental State University</p>
            </div>
          </div>
          <div class="resume-section">
            <h3>Core Competencies</h3>
            <div class="skills-grid-resume">
              <div class="skill-category-resume">
                <h4>Content Creation</h4>
                <ul>
                  <li>Video Editing (CapCut, Adobe Premiere)</li>
                  <li>Graphic Design (Canva, Photoshop)</li>
                  <li>Copywriting & Storytelling</li>
                  <li>Content Strategy</li>
                </ul>
              </div>
              <div class="skill-category-resume">
                <h4>Virtual Assistance</h4>
                <ul>
                  <li>Email & Calendar Management</li>
                  <li>Data Entry & Organization</li>
                  <li>Customer Support</li>
                  <li>Project Coordination</li>
                </ul>
              </div>
              <div class="skill-category-resume">
                <h4>Tools & Platforms</h4>
                <ul>
                  <li>Microsoft Office / Google Workspace</li>
                  <li>Trello, Asana, Slack</li>
                  <li>Hootsuite, Later, Buffer</li>
                  <li>Canva, CapCut, Adobe Suite</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="resume-section">
            <h3>Certifications</h3>
            <ul class="certifications-list">
              <li>Social Media Management Certification - HubSpot Academy</li>
              <li>Virtual Assistant Training - VA Insider</li>
              <li>Content Marketing Certification - Google Digital Garage</li>
              <li>Video Editing Masterclass - Udemy</li>
            </ul>
          </div>
          <div class="resume-section">
            <h3>Languages</h3>
            <ul class="languages-list">
              <li><strong>English</strong> - Fluent (Written & Spoken)</li>
              <li><strong>Filipino</strong> - Native</li>
              <li><strong>Cebuano</strong> - Native</li>
            </ul>
          </div>
        </div>
      </body>
      </html>
    `;
    
    const win = window.open('', '_blank');
    win.document.write(printContent.innerHTML);
    win.document.close();
    win.print();
  };

  return (
    <motion.div 
      className="resume-page"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="resume-page-header">
        <button className="back-home-btn" onClick={() => setCurrentPage('home')}>
          <FaArrowLeft /> Back to Portfolio
        </button>
        <button className="resume-download-btn-page" onClick={handleDownloadPDF}>
          <FaDownload /> Download PDF
        </button>
      </div>
      
      <div className="resume-page-content">
        <div className="resume-header">
          <h1>Jessebel E. Russel</h1>
          <p className="resume-title">Digital Creator & Virtual Assistant</p>
          <div className="resume-contact">
            <span>📧 jessebelenoyrussel@gmail.com</span>
            <span>📞 09631651031</span>
            <span>📍 Maayung-Tubig, Dauin, Negros Oriental</span>
          </div>
        </div>

        <div className="resume-section">
          <h3><FaUserCheck /> Professional Summary</h3>
          <p>
            Creative and detail-oriented Digital Creator and Virtual Assistant with 3+ years of experience 
            helping brands establish strong online presence. Skilled in content creation, social media management, 
            and administrative support. Committed to delivering high-quality work that drives engagement and growth.
          </p>
        </div>

        <div className="resume-section">
          <h3><FaBriefcase /> Work Experience</h3>
          
          <div className="resume-item">
            <div className="resume-item-header">
              <h4>Freelance Digital Creator</h4>
              <span className="resume-date">2022 - Present</span>
            </div>
            <p className="resume-company">Self-Employed</p>
            <ul>
              <li>Create engaging video content for social media platforms (Instagram, TikTok, Facebook)</li>
              <li>Develop content strategies that increased engagement by 200% for clients</li>
              <li>Manage multiple client accounts and deliver content on schedule</li>
              <li>Edit videos using CapCut, Adobe Premiere, and other professional tools</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h4>Virtual Assistant</h4>
              <span className="resume-date">2021 - Present</span>
            </div>
            <p className="resume-company">Remote Support Specialist</p>
            <ul>
              <li>Provide administrative support to busy executives and entrepreneurs</li>
              <li>Manage email correspondence, calendar scheduling, and travel arrangements</li>
              <li>Handle customer inquiries and provide timely, professional responses</li>
              <li>Coordinate projects using Trello, Asana, and Slack</li>
            </ul>
          </div>

          <div className="resume-item">
            <div className="resume-item-header">
              <h4>Social Media Manager</h4>
              <span className="resume-date">2020 - 2022</span>
            </div>
            <p className="resume-company">Digital Marketing Agency</p>
            <ul>
              <li>Managed social media accounts for 5+ clients across various industries</li>
              <li>Created and scheduled content using Hootsuite and Later</li>
              <li>Analyzed engagement metrics and adjusted strategies accordingly</li>
              <li>Grew followers by 5,000+ through organic content strategies</li>
            </ul>
          </div>
        </div>

        <div className="resume-section">
          <h3><FaGraduationCap /> Education</h3>
          <div className="resume-item">
            <div className="resume-item-header">
              <h4>Bachelor of Arts in Communication</h4>
              <span className="resume-date">2016 - 2020</span>
            </div>
            <p className="resume-company">Negros Oriental State University</p>
          </div>
        </div>

        <div className="resume-section">
          <h3><FaStar /> Core Competencies</h3>
          <div className="skills-grid-resume">
            <div className="skill-category-resume">
              <h4>Content Creation</h4>
              <ul>
                <li>Video Editing (CapCut, Adobe Premiere)</li>
                <li>Graphic Design (Canva, Photoshop)</li>
                <li>Copywriting & Storytelling</li>
                <li>Content Strategy</li>
              </ul>
            </div>
            <div className="skill-category-resume">
              <h4>Virtual Assistance</h4>
              <ul>
                <li>Email & Calendar Management</li>
                <li>Data Entry & Organization</li>
                <li>Customer Support</li>
                <li>Project Coordination</li>
              </ul>
            </div>
            <div className="skill-category-resume">
              <h4>Tools & Platforms</h4>
              <ul>
                <li>Microsoft Office / Google Workspace</li>
                <li>Trello, Asana, Slack</li>
                <li>Hootsuite, Later, Buffer</li>
                <li>Canva, CapCut, Adobe Suite</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="resume-section">
          <h3><FaAward /> Certifications</h3>
          <ul className="certifications-list">
            <li>Social Media Management Certification - HubSpot Academy</li>
            <li>Virtual Assistant Training - VA Insider</li>
            <li>Content Marketing Certification - Google Digital Garage</li>
            <li>Video Editing Masterclass - Udemy</li>
          </ul>
        </div>

        <div className="resume-section">
          <h3><FaGlobe /> Languages</h3>
          <ul className="languages-list">
            <li><strong>English</strong> - Fluent (Written & Spoken)</li>
            <li><strong>Filipino</strong> - Native</li>
            <li><strong>Cebuano</strong> - Native</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

const BackgroundEffect = () => {
  return (
    <div className="background-effects">
      <div className="gradient-orb orb-1"></div>
      <div className="gradient-orb orb-2"></div>
      <div className="gradient-orb orb-3"></div>
      <div className="grid-pattern"></div>
    </div>
  )
}

const Navbar = ({ isMenuOpen, setIsMenuOpen, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false)
  const [activeSection, setActiveSection] = useState('home')

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50)
      
      const sections = ['home', 'about', 'skills', 'projects', 'contact']
      const scrollPosition = window.scrollY + 100
      
      for (const section of sections) {
        const element = document.getElementById(section)
        if (element && scrollPosition >= element.offsetTop) {
          setActiveSection(section)
        }
      }
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Contact', id: 'contact' }
  ]

  return (
    <>
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
      >
        <div className="nav-container">
          <motion.a 
            href="#home" 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="logo-icon">✨</span>
            <span className="logo-text">Jessebel</span>
          </motion.a>
          
          <div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            {navItems.map((item, idx) => (
              <motion.a
                key={item.id}
                href={`#${item.id}`}
                className={activeSection === item.id ? 'active' : ''}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
                onClick={() => setIsMenuOpen(false)}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {item.name}
              </motion.a>
            ))}
            <motion.button 
              className="nav-contact-btn"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.5 }}
              onClick={() => {
                setIsMenuOpen(false)
                setCurrentPage('resume')
              }}
              whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(102, 126, 234, 0.4)" }}
              whileTap={{ scale: 0.95 }}
            >
              View My Resume
            </motion.button>
          </div>
          
          <div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </div>
        </div>
      </motion.nav>
      
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="mobile-menu-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMenuOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  )
}

const HeroSection = () => {
  const { scrollYProgress } = useScroll()
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%'])
  
  return (
    <section id="home" className="section hero">
      <div className="hero-content-wrapper">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <motion.div 
            className="profile-wrapper"
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}
          >
            <div className="profile-card">
              <motion.div 
                className="profile-image-border"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="profile-image-inner">
                  <motion.img 
                    src="prof.png"
                    alt="Profile" 
                    className="profile-image"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </motion.div>
              <motion.div 
                className="profile-status"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
              >
                <span className="status-dot"></span>
                Available for VA & Digital Creator Roles
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="hero-badge">
              <FaStar className="badge-icon" />
              <span>Digital Creator & Virtual Assistant</span>
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Hi, I'm <span className="gradient-text">Jessebel Russel</span><br />
            Your Creative Digital Partner
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            I help brands and businesses grow through creative digital content, 
            strategic virtual assistance, and engaging online presence management.
          </motion.p>
          
          <motion.div 
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <motion.button 
              className="btn btn-primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}
            >
              Let's Collaborate
              <span className="btn-glow"></span>
            </motion.button>
            <motion.button 
              className="btn btn-secondary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}
            >
              View Portfolio
            </motion.button>
          </motion.div>
          
          <motion.div 
            className="hero-stats"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <div className="stat-item">
              <h4>3+</h4>
              <p>Years Experience</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h4>50+</h4>
              <p>Content Created</p>
            </div>
            <div className="stat-divider"></div>
            <div className="stat-item">
              <h4>20+</h4>
              <p>Happy Clients</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
      
      <motion.div 
        className="scroll-indicator"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
      >
        <span>Scroll to explore</span>
        <FaArrowDown />
      </motion.div>
    </section>
  )
}

const AboutSection = () => {
  return (
    <section id="about" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">About Me</span>
          <h2>Your Creative Digital Partner</h2>
        </motion.div>
        
        <div className="about-grid">
          <motion.div 
            className="about-content"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p>
              I'm <span className="highlight-text">Jessebel E. Russel</span>, a passionate <span className="highlight-text">Digital Creator</span> and <span className="highlight-text">Virtual Assistant</span> 
              from Maayung-Tubig, Dauin, Negros Oriental. I specialize in helping businesses and 
              entrepreneurs establish a strong online presence through creative content and 
              efficient virtual support.
            </p>
            <p>
              With over 3 years of experience in digital content creation and virtual assistance, 
              I've helped numerous clients grow their brands, manage their schedules, and create 
              engaging content that resonates with their audience. My goal is to make your life 
              easier and your brand shine in the digital space.
            </p>
            
            <div className="about-features">
              <div className="feature">
                <div className="feature-icon">🎨</div>
                <div>
                  <h4>Creative Mindset</h4>
                  <p>Bringing fresh ideas to your brand's content strategy</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">⚡</div>
                <div>
                  <h4>Efficient Support</h4>
                  <p>Making your workflow smoother and more productive</p>
                </div>
              </div>
              <div className="feature">
                <div className="feature-icon">💬</div>
                <div>
                  <h4>Great Communication</h4>
                  <p>Always responsive and transparent in all interactions</p>
                </div>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="about-image"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="image-card">
              <div className="image-bg"></div>
              <div className="experience-badge">
                <span className="years">3+</span>
                <span className="text">Years of<br />Digital Excellence</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

const SkillsSection = () => {
  const skills = {
    contentCreation: {
      icon: <FaVideo />,
      name: "Content Creation",
      skills: ["Video Editing", "Graphic Design", "Copywriting", "Content Strategy", "Social Media Management"]
    },
    virtualAssistant: {
      icon: <FaChartLine />,
      name: "Virtual Assistance",
      skills: ["Email Management", "Calendar Scheduling", "Data Entry", "Customer Support", "Project Management"]
    },
    socialMedia: {
      icon: <FaHashtag />,
      name: "Social Media",
      skills: ["Instagram", "Facebook", "TikTok", "LinkedIn", "Content Scheduling"]
    }
  }

  return (
    <section id="skills" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">What I Do Best</span>
          <h2>My Core Competencies</h2>
        </motion.div>
        
        <div className="skills-grid">
          {Object.entries(skills).map(([key, skill], idx) => (
            <motion.div
              key={key}
              className="skill-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="skill-icon-wrapper">{skill.icon}</div>
              <h3>{skill.name}</h3>
              <div className="skill-list">
                {skill.skills.map((item) => (
                  <motion.span 
                    key={item} 
                    className="skill-item"
                    whileHover={{ scale: 1.05 }}
                  >
                    {item}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

const ProjectsSection = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
    {
      title: "Brand Social Media Campaign",
      description: "Developed and executed a 3-month social media strategy that increased engagement by 200% and grew followers by 5,000+.",
      tech: ["Content Strategy", "Canva", "Meta Business Suite", "Later"],
      category: "Content Creation",
      fullDescription: "This comprehensive campaign involved market research, content calendar creation, daily engagement monitoring, and monthly performance reporting. The strategy focused on authentic storytelling and community building."
    },
    {
      title: "Virtual Executive Support",
      description: "Provided comprehensive virtual assistance to a busy executive, managing emails, scheduling, travel arrangements, and project coordination.",
      tech: ["Calendar Management", "Email Management", "Trello", "Slack"],
      category: "Virtual Assistance",
      fullDescription: "Managed a complex calendar with 20+ weekly meetings, coordinated international travel, handled confidential correspondence, and streamlined workflow processes."
    },
    {
      title: "Product Launch Campaign",
      description: "Created engaging video content and social media posts for a product launch that generated 10,000+ views and 500+ pre-orders.",
      tech: ["Video Editing", "CapCut", "Adobe Premiere", "Hootsuite"],
      category: "Digital Marketing",
      fullDescription: "Produced 15+ video assets, managed a content calendar across 4 platforms, engaged with potential customers, and tracked analytics to optimize performance."
    }
  ];

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Featured Work</span>
          <h2>Projects I've Helped Grow</h2>
        </motion.div>
        
        <div className="projects-grid">
          {projects.map((project, idx) => (
            <motion.div
              key={project.title}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <div className="project-category">{project.category}</div>
              <h3>{project.title}</h3>
              <p className="project-description">
                {expandedProject === idx ? project.fullDescription : project.description}
              </p>
              <button 
                className="read-more-btn"
                onClick={() => setExpandedProject(expandedProject === idx ? null : idx)}
              >
                {expandedProject === idx ? 'Show Less' : 'Read More'}
              </button>
              <div className="project-tech">
                {project.tech.map(tech => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="project-links">
                <a href="#" className="project-link">
                  View Case Study →
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

const ContactSection = () => {
  const contactMethods = [
    { icon: <FaEnvelope />, label: "Email", value: "jessebelenoyrussel@gmail.com", href: "mailto:jessebelenoyrussel@gmail.com", color: "#667eea" },
    { icon: <FaPhone />, label: "Phone", value: "09631651031", href: "tel:09631651031", color: "#10b981" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Maayung-Tubig, Dauin, Negros Oriental", href: "#", color: "#f59e0b" },
    { icon: <FaGithub />, label: "GitHub", value: "/jessebel", href: "https://github.com/jessebel", color: "#333" },
    { icon: <FaLinkedin />, label: "LinkedIn", value: "in/jessebelrussel", href: "https://linkedin.com/in/jessebelrussel", color: "#0077b5" }
  ]

  return (
    <section id="contact" className="section">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <span className="section-tag">Get in Touch</span>
          <h2>Let's work together</h2>
        </motion.div>
        
        <motion.div 
          className="contact-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <div className="contact-info">
            <p>
              Ready to elevate your brand's digital presence or need reliable virtual support? 
              I'd love to hear about your project and explore how we can work together to achieve 
              your goals. Let's create something amazing!
            </p>
            <div className="contact-methods">
              {contactMethods.map((method) => (
                <motion.a
                  key={method.label}
                  href={method.href}
                  className="contact-method"
                  whileHover={{ scale: 1.05, backgroundColor: method.color }}
                  target={method.label !== "Location" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                >
                  <div className="method-icon">{method.icon}</div>
                  <div className="method-info">
                    <span className="method-label">{method.label}</span>
                    <span className="method-value">{method.value}</span>
                  </div>
                </motion.a>
              ))}
            </div>
          </div>
          
          <div className="contact-illustration">
            <div className="message-bubble">
              <FaHeart className="heart-icon" />
              <span>Ready to grow your brand? Let's connect!</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <div className="footer-logo">
          <span className="logo-icon">✨</span>
          <span className="logo-text">Jessebel</span>
        </div>
        <p>Digital Creator | Virtual Assistant | Content Specialist</p>
        <p className="copyright">© 2024 Jessebel Russel. All rights reserved.</p>
      </div>
    </footer>
  )
}

export default App