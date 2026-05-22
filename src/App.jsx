import React, { useState, useEffect } from 'react'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { FaGithub, FaLinkedin, FaEnvelope, FaFacebook, FaInstagram, FaCode, FaMobileAlt, FaCloud, FaArrowDown, FaHeart, FaStar, FaArrowUp, FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaVideo, FaHashtag, FaChartLine, FaDownload, FaGraduationCap, FaBriefcase, FaUserCheck, FaAward, FaGlobe, FaArrowLeft, FaTiktok, FaStore, FaBook, FaCalendarAlt, FaTicketAlt, FaUsers, FaPlane, FaFileAlt, FaPalette, FaLaptopCode } from 'react-icons/fa'
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
        <EducationSection />
        <WorkExperienceSection />
        <SkillsSection />
        <ToolsSection />
        <ProjectsSection />
        <SampleWorksSection />
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
          * { margin: 0; padding: 0; box-sizing: border-box; }
          body { font-family: 'Inter', sans-serif; background: #0a0a0f; color: #fff; padding: 2rem; }
          .resume-container { max-width: 900px; margin: 0 auto; background: linear-gradient(135deg, #1a1a2e, #0a0a0f); border-radius: 20px; padding: 2rem; border: 1px solid rgba(102,126,234,0.3); }
          .resume-header { text-align: center; margin-bottom: 2rem; padding-bottom: 2rem; border-bottom: 2px solid rgba(102,126,234,0.3); }
          .resume-header h1 { font-size: 2rem; margin-bottom: 0.5rem; color: #fff; }
          .resume-title { font-size: 1.1rem; color: #667eea; margin-bottom: 1rem; }
          .resume-contact { display: flex; justify-content: center; gap: 1.5rem; flex-wrap: wrap; font-size: 0.9rem; color: rgba(255,255,255,0.7); }
          .resume-section { margin-bottom: 2rem; }
          .resume-section h3 { font-size: 1.3rem; margin-bottom: 1rem; color: #667eea; border-left: 3px solid #667eea; padding-left: 1rem; }
          .resume-item { margin-bottom: 1.5rem; }
          .resume-item-header { display: flex; justify-content: space-between; flex-wrap: wrap; margin-bottom: 0.25rem; }
          .resume-item-header h4 { font-size: 1.1rem; color: white; }
          .resume-date { font-size: 0.85rem; color: rgba(255,255,255,0.5); }
          .resume-company { color: #667eea; font-size: 0.9rem; margin-bottom: 0.5rem; }
          ul { padding-left: 1.5rem; }
          li { color: rgba(255,255,255,0.7); margin-bottom: 0.5rem; }
          .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 1rem; }
          .skill-cat { background: rgba(255,255,255,0.03); padding: 1rem; border-radius: 10px; }
          .skill-cat h4 { color: #667eea; margin-bottom: 0.5rem; }
        </style>
      </head>
      <body>
        <div class="resume-container">
          <div class="resume-header">
            <h1>Jessebel E. Russel</h1>
            <p class="resume-title">Tourism Technology Graduate | Virtual Assistant | Digital Creator</p>
            <div class="resume-contact">
              <span>📧 jessebelenoyrussel@gmail.com</span>
              <span>📞 +63 963-165-1031</span>
              <span>📍 Maayung-Tubig, Dauin, Negros Oriental</span>
              <span>📱 @Just_Jesshh</span>
            </div>
          </div>
          <div class="resume-section">
            <h3>Professional Summary</h3>
            <p>Motivated Tourism Technology graduate with national certifications in Front Office Services, Housekeeping Services, Tourism Promotion Services, and Local Guiding. Background in hospitality has developed skills in organization, client communication, itinerary planning, and administrative support with strong attention to detail and professionalism. Reliable, adaptable, and committed to providing efficient administrative support to help businesses stay organized and deliver excellent client experiences.</p>
          </div>
          <div class="resume-section">
            <h3>Education</h3>
            <div class="resume-item">
              <div class="resume-item-header"><h4>Diploma in Tourism Technology</h4><span class="resume-date">2021-2024</span></div>
              <p class="resume-company">Teamskills Technological Institute Inc.</p>
              <ul><li>National Certificates: Tourism Promotion Services, Local Tour Guiding, Front Office Services</li><li>GDS Training: SABRE booking and reservation system</li></ul>
            </div>
            <div class="resume-item">
              <div class="resume-item-header"><h4>ABM - Accountancy, Business & Management</h4><span class="resume-date">2019-2021</span></div>
              <p class="resume-company">World Maritime Academy & Training Center Inc.</p>
              <ul><li>Financial accounting, business management, marketing, entrepreneurship</li><li>Analytical thinking, problem-solving, communication skills</li></ul>
            </div>
          </div>
          <div class="resume-section">
            <h3>Work Experience</h3>
            <div class="resume-item">
              <div class="resume-item-header"><h4>TikTok Shop Affiliate Marketer</h4><span class="resume-date">2024 - Present</span></div>
              <p class="resume-company">Freelance</p>
              <ul><li>Manage and grow TikTok account as affiliate marketer</li><li>Create engaging promotional videos for products</li><li>Apply strategic marketing techniques across social media platforms</li><li>Collaborate with sellers and earn commissions through affiliate campaigns</li></ul>
            </div>
            <div class="resume-item">
              <div class="resume-item-header"><h4>Gumroad Store Owner</h4><span class="resume-date">2025 - Present</span></div>
              <p class="resume-company">Freelance</p>
              <ul><li>Launch and manage digital products store</li><li>Create customizable travel brochures and learning stories for children</li><li>Promote products across TikTok and Facebook</li><li>E-commerce management and audience-focused marketing</li></ul>
            </div>
          </div>
          <div class="resume-section">
            <h3>Skills & Certifications</h3>
            <div class="skills-grid">
              <div class="skill-cat"><h4>Hospitality Skills</h4><ul><li>Front Office Services</li><li>Housekeeping Services</li><li>Tourism Promotion</li><li>Local Guiding</li></ul></div>
              <div class="skill-cat"><h4>Business Skills</h4><ul><li>Tour Package Development</li><li>Basic Bookkeeping</li><li>Event Coordination</li><li>Customer Service</li></ul></div>
              <div class="skill-cat"><h4>Technical Skills</h4><ul><li>Flight Booking (SABRE GDS)</li><li>Digital Marketing</li><li>Content Creation</li><li>E-commerce Management</li></ul></div>
            </div>
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
    <motion.div className="resume-page" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
      <div className="resume-page-header">
        <button className="back-home-btn" onClick={() => setCurrentPage('home')}><FaArrowLeft /> Back to Portfolio</button>
        <button className="resume-download-btn-page" onClick={handleDownloadPDF}><FaDownload /> Download PDF</button>
      </div>
      <div className="resume-page-content">
        <div className="resume-header"><h1>Jessebel E. Russel</h1><p className="resume-title">Tourism Technology Graduate | Virtual Assistant | Digital Creator</p>
          <div className="resume-contact"><span>📧 jessebelenoyrussel@gmail.com</span><span>📞 +63 963-165-1031</span><span>📍 Maayung-Tubig, Dauin, Negros Oriental</span><span>📱 @Just_Jesshh</span></div>
        </div>
        <div className="resume-section"><h3><FaUserCheck /> Professional Summary</h3><p>Motivated Tourism Technology graduate with national certifications in Front Office Services, Housekeeping Services, Tourism Promotion Services, and Local Guiding. Background in hospitality has developed skills in organization, client communication, itinerary planning, and administrative support with strong attention to detail and professionalism. Reliable, adaptable, and committed to providing efficient administrative support to help businesses stay organized and deliver excellent client experiences.</p></div>
        <div className="resume-section"><h3><FaGraduationCap /> Education</h3>
          <div className="resume-item"><div className="resume-item-header"><h4>Diploma in Tourism Technology</h4><span className="resume-date">2021-2024</span></div><p className="resume-company">Teamskills Technological Institute Inc.</p><ul><li>National Certificates: Tourism Promotion Services, Local Tour Guiding, Front Office Services, Housekeeping Services</li><li>GDS Training: SABRE booking and reservation system</li></ul></div>
          <div className="resume-item"><div className="resume-item-header"><h4>ABM - Accountancy, Business & Management</h4><span className="resume-date">2019-2021</span></div><p className="resume-company">World Maritime Academy & Training Center Inc.</p><ul><li>Financial accounting, business management, marketing, entrepreneurship</li><li>Analytical thinking, problem-solving, communication skills</li></ul></div>
        </div>
        <div className="resume-section"><h3><FaBriefcase /> Freelance Experience</h3>
          <div className="resume-item"><div className="resume-item-header"><h4>TikTok Shop Affiliate Marketer</h4><span className="resume-date">2024 - Present</span></div><p className="resume-company">Freelance</p><ul><li>Managed and grew TikTok account as affiliate marketer</li><li>Created engaging promotional videos for products</li><li>Applied strategic marketing techniques across social media platforms</li><li>Collaborated with sellers and earned commissions through affiliate campaigns</li></ul></div>
          <div className="resume-item"><div className="resume-item-header"><h4>Gumroad Store Owner</h4><span className="resume-date">2025 - Present</span></div><p className="resume-company">Freelance</p><ul><li>Launched digital products store selling travel brochures and learning stories</li><li>Promoted products across TikTok and Facebook</li><li>E-commerce management and audience-focused marketing</li></ul></div>
        </div>
        <div className="resume-section"><h3><FaStar /> Certifications & Skills</h3>
          <div className="skills-grid-resume"><div className="skill-category-resume"><h4>National Certifications</h4><ul><li>Tourism Promotion Services (NC II)</li><li>Local Tour Guiding (NC II)</li><li>Front Office Services (NC II)</li><li>Housekeeping Services (NC II)</li></ul></div>
          <div className="skill-category-resume"><h4>Technical Skills</h4><ul><li>Flight Booking & Reservation (SABRE GDS)</li><li>Digital Content Creation</li><li>Social Media Marketing</li><li>E-commerce Management</li></ul></div>
          <div className="skill-category-resume"><h4>Soft Skills</h4><ul><li>Client Communication</li><li>Itinerary Planning</li><li>Administrative Support</li><li>Attention to Detail</li></ul></div></div>
        </div>
      </div>
    </motion.div>
  );
};

const BackgroundEffect = () => {
  return (<div className="background-effects"><div className="gradient-orb orb-1"></div><div className="gradient-orb orb-2"></div><div className="gradient-orb orb-3"></div><div className="grid-pattern"></div></div>);
};

const Navbar = ({ isMenuOpen, setIsMenuOpen, setCurrentPage }) => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['home', 'about', 'education', 'experience', 'skills', 'tools', 'projects', 'works', 'contact'];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element && scrollPosition >= element.offsetTop) setActiveSection(section);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navItems = [{ name: 'Home', id: 'home' }, { name: 'About', id: 'about' }, { name: 'Education', id: 'education' }, { name: 'Experience', id: 'experience' }, { name: 'Skills', id: 'skills' }, { name: 'Tools', id: 'tools' }, { name: 'Projects', id: 'projects' }, { name: 'Works', id: 'works' }, { name: 'Contact', id: 'contact' }];
  return (<><motion.nav className={`navbar ${scrolled ? 'scrolled' : ''}`} initial={{ y: -100, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.6, type: "spring", stiffness: 100 }}><div className="nav-container"><motion.a href="#home" className="logo" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}><span className="logo-icon">✨</span><span className="logo-text">Jessebel</span></motion.a><div className={`nav-links ${isMenuOpen ? 'active' : ''}`}>{navItems.map((item, idx) => (<motion.a key={item.id} href={`#${item.id}`} className={activeSection === item.id ? 'active' : ''} initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: idx * 0.05 }} onClick={() => setIsMenuOpen(false)} whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>{item.name}</motion.a>))}<motion.button className="nav-contact-btn" initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.3, delay: 0.5 }} onClick={() => { setIsMenuOpen(false); setCurrentPage('resume'); }} whileHover={{ scale: 1.05, boxShadow: "0 5px 15px rgba(102,126,234,0.4)" }} whileTap={{ scale: 0.95 }}>View Resume</motion.button></div><div className="menu-icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>{isMenuOpen ? <FaTimes /> : <FaBars />}</div></div></motion.nav><AnimatePresence>{isMenuOpen && (<motion.div className="mobile-menu-overlay" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} onClick={() => setIsMenuOpen(false)} />)}</AnimatePresence></>);
};

const HeroSection = () => {
  return (<section id="home" className="section hero"><div className="hero-content-wrapper"><motion.div className="hero-content" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.8 }}><motion.div className="profile-wrapper" initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={{ duration: 0.8, type: "spring", bounce: 0.4 }}><div className="profile-card"><motion.div className="profile-image-border" whileHover={{ scale: 1.05 }} transition={{ type: "spring", stiffness: 300 }}><div className="profile-image-inner"><motion.img src="prof.png" alt="Profile" className="profile-image" whileHover={{ scale: 1.1 }} transition={{ duration: 0.3 }} /></div></motion.div><motion.div className="profile-status" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }}><span className="status-dot"></span>Available for VA & Digital Creator Roles</motion.div></div></motion.div><motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }}><div className="hero-badge"><FaStar className="badge-icon" /><span>Tourism Graduate | VA | Digital Creator</span></div></motion.div><motion.h1 initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.3 }}>Hi, I'm <span className="gradient-text">Jessebel Russel</span><br />Your Creative Digital Partner</motion.h1><motion.p initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.4 }}>Motivated Tourism Technology graduate with national certifications. I help brands grow through creative digital content, strategic virtual assistance, and engaging online presence management.</motion.p><motion.div className="hero-buttons" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.5 }}><motion.button className="btn btn-primary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>Let's Collaborate<span className="btn-glow"></span></motion.button><motion.button className="btn btn-secondary" whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById('projects').scrollIntoView({ behavior: 'smooth' })}>View Portfolio</motion.button></motion.div><motion.div className="hero-stats" initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.6 }}><div className="stat-item"><h4>4+</h4><p>Certifications</p></div><div className="stat-divider"></div><div className="stat-item"><h4>2+</h4><p>Years Experience</p></div><div className="stat-divider"></div><div className="stat-item"><h4>20+</h4><p>Projects</p></div></motion.div></motion.div></div><motion.div className="scroll-indicator" animate={{ y: [0, 10, 0] }} transition={{ duration: 2, repeat: Infinity }} onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}><span>Scroll to explore</span><FaArrowDown /></motion.div></section>);
};

const AboutSection = () => {
  return (<section id="about" className="section"><div className="container"><motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}><span className="section-tag">About Me</span><h2>Get to know me better</h2></motion.div><div className="about-grid"><motion.div className="about-content" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}><p>Hello, I'm <span className="highlight-text">Jessebel E. Russel</span>. I am a motivated <span className="highlight-text">Tourism Technology</span> graduate with national certifications in Front Office Services, Housekeeping Services, Tourism Promotion Services, and Local Guiding.</p><p>My background in hospitality has developed my skills in organization, client communication, itinerary planning, and administrative support, with strong attention to detail and professionalism. Although new to the Virtual Assistant role, I bring solid experience in customer service, digital promotion, and online selling.</p><p>I am reliable, adaptable, and committed to providing efficient administrative support to help businesses stay organized and deliver excellent client experiences.</p><div className="about-features"><div className="feature"><div className="feature-icon">🎯</div><div><h4>Mission Driven</h4><p>Creating solutions that solve real problems</p></div></div><div className="feature"><div className="feature-icon">💡</div><div><h4>Creative Thinker</h4><p>Finding innovative solutions to complex challenges</p></div></div><div className="feature"><div className="feature-icon">🤝</div><div><h4>Collaborative</h4><p>Working together to achieve amazing results</p></div></div></div></motion.div><motion.div className="about-image" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.6, delay: 0.4 }} viewport={{ once: true }}><div className="image-card"><div className="image-bg"></div><div className="experience-badge"><span className="years">4</span><span className="text">National<br />Certifications</span></div></div></motion.div></div></div></section>);
};

const EducationSection = () => {
  return (<section id="education" className="section"><div className="container"><motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}><span className="section-tag">Education</span><h2>My Academic Background</h2></motion.div><div className="education-grid"><motion.div className="education-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} whileHover={{ y: -10 }}><div className="edu-icon"><FaGraduationCap /></div><h3>Diploma in Tourism Technology</h3><p className="edu-institution">Teamskills Technological Institute Inc.</p><p className="edu-date">2021 - 2024</p><ul><li>National Certificate in Tourism Promotion Services (NC II)</li><li>National Certificate in Local Tour Guiding (NC II)</li><li>National Certificate in Front Office Services (NC II)</li><li>National Certificate in Housekeeping Services (NC II)</li><li>GDS Training: SABRE booking and reservation system</li></ul></motion.div><motion.div className="education-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} whileHover={{ y: -10 }}><div className="edu-icon"><FaBook /></div><h3>ABM - Accountancy, Business & Management</h3><p className="edu-institution">World Maritime Academy & Training Center Inc.</p><p className="edu-date">2019 - 2021</p><ul><li>Financial Accounting & Business Management</li><li>Marketing & Entrepreneurship</li><li>Budgeting & Financial Reporting</li><li>Business Planning & Economic Principles</li><li>Analytical Thinking & Problem-Solving</li></ul></motion.div></div></div></section>);
};

const WorkExperienceSection = () => {
  return (<section id="experience" className="section"><div className="container"><motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}><span className="section-tag">Freelance Experience</span><h2>Work & Projects</h2></motion.div><div className="experience-grid"><motion.div className="experience-card" initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.1 }} viewport={{ once: true }} whileHover={{ y: -10 }}><div className="exp-icon"><FaTiktok /></div><h3>TikTok Shop Affiliate Marketer</h3><p className="exp-date">2024 - Present</p><ul><li>Managed and grew TikTok account as affiliate marketer</li><li>Created engaging promotional videos for TikTok-listed products and independent sellers</li><li>Applied strategic marketing techniques across multiple social media platforms</li><li>Increased product visibility, audience engagement, and reach</li><li>Collaborated with sellers and earned commissions through affiliate campaigns</li></ul></motion.div><motion.div className="experience-card" initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 0.2 }} viewport={{ once: true }} whileHover={{ y: -10 }}><div className="exp-icon"><FaStore /></div><h3>Gumroad Store Owner</h3><p className="exp-date">2025 - Present</p><ul><li>Launched Gumroad store selling digital products</li><li>Created customizable travel brochures for agencies and tourism students</li><li>Developed interactive learning stories for children</li><li>Promoted products across TikTok and Facebook</li><li>Strengthened skills in digital product creation and e-commerce management</li></ul></motion.div></div></div></section>);
};

const SkillsSection = () => {
  const skillCategories = [
    { icon: <FaCalendarAlt />, name: "Tour Package Development", description: "Customization and itinerary planning" },
    { icon: <FaChartLine />, name: "Basic Bookkeeping", description: "Financial record management" },
    { icon: <FaUsers />, name: "Event Services", description: "Coordination and assistance" },
    { icon: <FaHeart />, name: "Customer Service", description: "Guest relations and support" },
    { icon: <FaPlane />, name: "Flight Booking", description: "GDS (SABRE) reservations" },
    { icon: <FaFileAlt />, name: "Attention to Detail", description: "Organizational skills" }
  ];
  return (<section id="skills" className="section"><div className="container"><motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}><span className="section-tag">Skill Set</span><h2>What I Bring to the Table</h2></motion.div><div className="skills-container">{skillCategories.map((skill, idx) => (<motion.div key={idx} className="skill-category-card" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}><div className="skill-category-icon">{skill.icon}</div><h3>{skill.name}</h3><p>{skill.description}</p></motion.div>))}</div></div></section>);
};

const ToolsSection = () => {
  const tools = [
    { name: "SABRE GDS", category: "Booking System", icon: <FaPlane /> },
    { name: "Canva", category: "Design", icon: <FaPalette /> },
    { name: "CapCut", category: "Video Editing", icon: <FaVideo /> },
    { name: "TikTok", category: "Social Media", icon: <FaTiktok /> },
    { name: "Facebook", category: "Social Media", icon: <FaFacebook /> },
    { name: "Instagram", category: "Social Media", icon: <FaInstagram /> },
    { name: "Gumroad", category: "E-commerce", icon: <FaStore /> },
    { name: "Microsoft Office", category: "Productivity", icon: <FaLaptopCode /> }
  ];
  return (<section id="tools" className="section"><div className="container"><motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}><span className="section-tag">Tools & Systems</span><h2>Technologies I Use</h2></motion.div><div className="tools-grid">{tools.map((tool, idx) => (<motion.div key={idx} className="tool-card" initial={{ opacity: 0, scale: 0 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: idx * 0.05 }} viewport={{ once: true }} whileHover={{ scale: 1.05, rotate: 5 }}><div className="tool-icon">{tool.icon}</div><h4>{tool.name}</h4><p>{tool.category}</p></motion.div>))}</div></div></section>);
};

const ProjectsSection = () => {
  const projects = [
    { title: "Heart & Hand Event Services", description: "Developed an event proposal for Inter-University Debate and Public competition for college students in Cebu City.", category: "Event Management", icon: <FaUsers /> },
    { title: "Tour Package Development", description: "Created customized tour packages with detailed itineraries for various destinations.", category: "Tourism", icon: <FaCalendarAlt /> }
  ];
  return (<section id="projects" className="section"><div className="container"><motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}><span className="section-tag">Project Portfolio</span><h2>Featured Projects</h2></motion.div><div className="projects-grid-portfolio">{projects.map((project, idx) => (<motion.div key={idx} className="project-portfolio-card" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.5, delay: idx * 0.1 }} viewport={{ once: true }} whileHover={{ y: -10 }}><div className="project-icon-large">{project.icon}</div><h3>{project.title}</h3><p className="project-category-portfolio">{project.category}</p><p>{project.description}</p></motion.div>))}</div></div></section>);
};

const SampleWorksSection = () => {
  const samples = [
    { title: "Travel Itinerary Brochure", description: "Customizable trifold brochure for travel agencies", type: "Digital Product", icon: <FaFileAlt /> },
    { title: "Travel Brochure", description: "Professionally designed travel guides", type: "Digital Product", icon: <FaFileAlt /> },
    { title: "Printable Worksheets", description: "Educational worksheets for children", type: "Digital Product", icon: <FaFileAlt /> }
  ];
  return (<section id="works" className="section"><div className="container"><motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}><span className="section-tag">Sample Works</span><h2>Digital Products I've Created</h2></motion.div><div className="samples-grid">{samples.map((sample, idx) => (<motion.div key={idx} className="sample-card" initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.4, delay: idx * 0.1 }} viewport={{ once: true }} whileHover={{ scale: 1.05 }}><div className="sample-icon">{sample.icon}</div><h3>{sample.title}</h3><p className="sample-type">{sample.type}</p><p>{sample.description}</p></motion.div>))}</div></div></section>);
};

const ContactSection = () => {
  const contactMethods = [
    { icon: <FaEnvelope />, label: "Email", value: "jessebelenoyrussel@gmail.com", href: "mailto:jessebelenoyrussel@gmail.com", color: "#667eea" },
    { icon: <FaInstagram />, label: "Instagram", value: "@Just_Jesshh", href: "https://instagram.com/Just_Jesshh", color: "#E4405F" },
    { icon: <FaFacebook />, label: "Facebook", value: "Jesshh Russel", href: "https://facebook.com/jesshhrussel", color: "#1877F2" },
    { icon: <FaPhone />, label: "Phone", value: "+63 963-165-1031", href: "tel:09631651031", color: "#10b981" },
    { icon: <FaMapMarkerAlt />, label: "Location", value: "Maayung-Tubig, Dauin, Negros Oriental", href: "#", color: "#f59e0b" }
  ];
  return (<section id="contact" className="section"><div className="container"><motion.div className="section-header" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} viewport={{ once: true }}><span className="section-tag">Get in Touch</span><h2>Let's work together</h2></motion.div><motion.div className="contact-grid" initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ duration: 0.6, delay: 0.2 }} viewport={{ once: true }}><div className="contact-info"><p>Ready to elevate your brand's digital presence or need reliable virtual support? I'd love to hear about your project and explore how we can work together to achieve your goals. Let's create something amazing!</p><div className="contact-methods">{contactMethods.map((method) => (<motion.a key={method.label} href={method.href} className="contact-method" whileHover={{ scale: 1.05, backgroundColor: method.color }} target={method.label !== "Location" && method.label !== "Phone" ? "_blank" : undefined} rel="noopener noreferrer"><div className="method-icon">{method.icon}</div><div className="method-info"><span className="method-label">{method.label}</span><span className="method-value">{method.value}</span></div></motion.a>))}</div></div><div className="contact-illustration"><div className="message-bubble"><FaHeart className="heart-icon" /><span>"Every opportunity rewards not just empty pocket..."</span><p style={{ fontSize: '0.8rem', marginTop: '1rem', opacity: 0.9 }}>- Jessebel Russel</p></div></div></motion.div></div></section>);
};

const Footer = () => {
  return (<footer><div className="footer-content"><div className="footer-logo"><span className="logo-icon">✨</span><span className="logo-text">Jessebel</span></div><p>Tourism Technology Graduate | Virtual Assistant | Digital Creator</p><p className="copyright">© 2024 Jessebel Russel. All rights reserved.</p></div></footer>);
};

export default App;