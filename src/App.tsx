import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe, Server, Palette, Star, Calendar, GraduationCap, Briefcase } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = {
    frontend: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Bootstrap', 'Tailwind CSS', 'Responsive Web Design'],
    backend: ['Node.js', 'Express.js', '.NET', 'C#', 'REST APIs'],
    database: ['MongoDB', 'SQL'],
    tools: ['Git', 'GitHub', 'WordPress', 'Postman', 'SEO', 'Agile/Scrum', 'Shopify', 'VS Code']
  };

  const projects = [
    {
      title: 'Ajio Return Tracking Dashboard',
      description: 'A multifunctional dashboard to track returns across shipping partners with filters, analytics, and CSV export.',
      tags: ['TypeScript', 'React', 'Tailwind']
    },
    {
      title: 'Tea Stall Management',
      description: 'CLI/desktop tooling to manage tea stall inventory, billing, and daily sales summaries.',
      tags: ['Python']
    },
    {
      title: 'Asin Suppression Dashboard',
      description: 'Monitor and analyze suppressed ASINs with status categorization and remediation workflow.',
      tags: ['Python']
    },
    {
      title: 'PDF Trimmer',
      description: 'Utility to trim, split, and process PDF pages for quick document cleanup.',
      tags: ['Python']
    },
    {
      title: 'Payment Mail Sender',
      description: 'Automated email sender for payment notifications with templating and logs.',
      tags: ['Python']
    },
    {
      title: 'Front-end Developer Project',
      description: 'A basic front-end project showcasing responsive layout and UI components.',
      tags: ['HTML', 'CSS', 'JavaScript']
    },
    {
      title: 'Business Real (Billing Management Software)',
      description: 'Forked billing management app: invoice generation, customer records, and reporting.',
      tags: ['Python']
    },
    {
      title: 'C Programming',
      description: 'Collection of C programs covering fundamental algorithms and problem-solving.',
      tags: ['C']
    },
    {
      title: 'Custom Rom',
      description: 'Repository to curate and share links to top custom Android ROMs.',
      tags: ['Docs']
    },
    {
      title: 'HVAC System',
      description: 'ML-assisted HVAC controller concept to prevent overheating with automated cooling.',
      tags: ['Python']
    },
    {
      title: 'Face-Recognition-System',
      description: 'Face recognition pipelines for detection and identification using Python tooling.',
      tags: ['Python']
    },
    {
      title: 'CNN-Using-MNIST_Dataset',
      description: 'Jupyter notebook training a CNN on MNIST for handwritten digit recognition.',
      tags: ['Jupyter', 'Deep Learning']
    }
  ];
  // const [showAjioDetails, setShowAjioDetails] = useState<boolean>(false);

  const experience = [
    {
      title: 'Web Developer',
      company: 'PavitraSoft',
      period: '08/2024 - 01/2025',
      location: 'Vapi, Gujarat',
      description: 'Designed and developed interactive web applications and RESTful APIs, focusing on performance and user engagement.',
      achievements: [
        'Built 10+ interactive apps with HTML, CSS, JavaScript, React.js; raised engagement by 30%',
        'Integrated 15+ RESTful APIs; improved backend communication efficiency by 40%',
        'Applied lazy loading, caching, and code splitting; reduced page load time by 50%',
        'Ensured cross-browser and responsive designs; improved mobile usability by 35%',
        'Enhanced DB interactions with Node.js and MongoDB; cut query response times by 25%',
        'Conducted 50+ reviews and debugging sessions; achieved 95% bug-free deployment'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Performance']
    },
    {
      title: 'Web Developer Intern',
      company: 'Symbiosis Systems',
      period: '04/2024 - 07/2024',
      location: 'Vapi, Gujarat',
      description: 'Built responsive pages and apps, integrated APIs, and improved UX and performance.',
      achievements: [
        'Developed 20+ responsive pages with HTML, CSS, JavaScript, Bootstrap; improved speed by 35%',
        'Built React.js features and integrated 10+ RESTful APIs; enhanced data efficiency',
        'Partnered with UI/UX; improvements increased engagement by 25%',
        'Implemented SEO and perf optimizations; 40% faster loads and +15% organic traffic',
        'Participated in agile rituals; 50+ standups and 20+ code reviews'
      ],
      technologies: ['React.js', 'Bootstrap', 'JavaScript', 'HTML', 'CSS', 'REST APIs', 'SEO']
    },
    {
      title: 'Web Developer Trainee',
      company: 'Adrata Technologies Pvt. Ltd.',
      period: '01/2024 - 03/2024',
      location: 'Ahmedabad, Gujarat',
      description: 'Assisted in developing and maintaining web apps while learning best practices and tooling.',
      achievements: [
        'Contributed to 5+ apps using HTML, CSS, JavaScript, React.js',
        'Implemented responsive UI; 30% lower page load and 25% higher engagement',
        'Integrated 10+ third-party APIs with Node.js and Express.js',
        'Resolved 95% of reported issues; reduced downtime by 40%',
        'Adopted Git/GitHub and agile methods; supported 3+ sprint releases'
      ],
      technologies: ['React.js', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Express.js', 'APIs']
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Technology (B.Tech)',
      field: 'Information Technology',
      institution: 'Aditya Silver Oak Institute Of Technology (ASOIT)',
      period: '08/2021 - 05/2025',
      grade: '8.5/10', // intentionally leave grade hidden if not provided
      description: 'Focused on full-stack development, databases, and web technologies with hands-on project work.'
    }
  ];

  const certificates = [
    { title: 'Software Engineer', issuer: 'HackerRank', period: '03/2025 - Present' },
    { title: 'Front-End Developer (React)', issuer: 'HackerRank', period: '03/2025 - Present' },
    { title: 'Verizon - Cloud Platform Job Simulation', issuer: 'Forage', period: '03/2025 - Present',
      notes: [
        "Built a hypothetical VPN product assessment for cloud-native traits (redundancy, resiliency, least-privilege)",
        'Used command line Python for testing and documented approach'
      ]
    },
    { title: 'Mastercard - Cybersecurity Job Simulation', issuer: 'Forage', period: '03/2025 - Present',
      notes: [
        "Worked as an analyst on Security Awareness Team; identified and reported phishing",
        'Analyzed training needs and proposed targeted security training'
      ]
    },
    { title: 'AWS APAC - Solutions Architecture Job Simulation', issuer: 'Forage', period: '03/2025 - Present',
      notes: [
        'Designed simple, scalable Elastic Beanstalk hosting architecture for a growing client',
        'Explained architecture and cost model in plain language for stakeholders'
      ]
    },
    // { title: 'Responsive Web Design', issuer: 'freeCodeCamp', period: '02/2025 - Present' }
  ];

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  // no remote fetch; projects are managed locally above

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Animated gradient blobs */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-tr from-blue-500/20 to-indigo-500/20 blur-3xl animate-blob"></div>
        <div className="absolute top-40 -right-16 w-96 h-96 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 blur-3xl animate-blob [animation-delay:2s]"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-3xl animate-blob [animation-delay:4s]"></div>
        {/* Starfield overlay */}
        <div className="starfield"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-slate-900/95 backdrop-blur-sm shadow-xl' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Jenil Rupapara
            </div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200 font-medium"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden text-slate-300 hover:text-blue-400 transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-slate-800/95 backdrop-blur-sm rounded-lg mt-2 p-4 shadow-xl">
              {['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-2 text-slate-300 hover:text-blue-400 transition-colors"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          
          
          <h1 className="text-2xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-white via-blue-300 to-indigo-300 bg-clip-text text-transparent leading-tight">
            Full Stack Developer
          </h1>
          
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-slate-300 mb-6 sm:mb-8 leading-relaxed px-4">
            Hi, I'm <span className="text-blue-400 font-semibold">Jenil Rupapara</span> — a results-driven Full-Stack Web Developer with 2+ years of experience building scalable, responsive, and user-centric web applications.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12 px-4">
            <button
              onClick={() => scrollToSection('projects')}
              className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:scale-105 transform transition-all duration-200 shadow-xl hover:shadow-2xl text-sm sm:text-base"
            >
              View My Work
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full sm:w-auto px-5 sm:px-8 py-3 sm:py-4 border-2 border-blue-500 text-blue-400 rounded-full font-semibold hover:bg-blue-500 hover:text-white transition-all duration-200 text-sm sm:text-base"
            >
              Get In Touch
            </button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 px-4 animate-fade-in-up">
            <a href="https://github.com/jenilrupapara001" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-blue-400 transition-colors transform hover:scale-110">
              <Github size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="https://www.linkedin.com/in/jenilrupapara-fullstack-developer/" target="_blank" rel="noopener noreferrer" className="text-slate-400 hover:text-indigo-400 transition-colors transform hover:scale-110">
              <Linkedin size={20} className="sm:w-6 sm:h-6" />
            </a>
            <a href="mailto:jenilrupapara48@gmail.com" className="text-slate-400 hover:text-purple-400 transition-colors transform hover:scale-110">
              <Mail size={20} className="sm:w-6 sm:h-6" />
            </a>
          </div>
        </div>

        
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-slate-300 leading-relaxed">
              Results-driven I am a full-stack web developer with over two years of experience in designing, developing, and optimizing web applications. I have a strong foundation in HTML, CSS, and JavaScript and am proficient in React.js, Node.js, Express.js, and MongoDB. Skilled in API integration, database management, and performance optimization to enhance user experience and functionality.
              </p>
              
              <p className="text-lg text-slate-300 leading-relaxed">
              I excel in collaborating with UI/UX teams, troubleshooting bugs, and implementing SEO best practices. I have gained experience in agile environments, actively participating in daily standups, code reviews, and sprint planning to ensure the timely delivery of high-quality results. I am passionate about creating scalable, responsive, and innovative web solutions.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <GraduationCap size={20} className="text-blue-400" />
                  <span className="text-slate-300">B.Tech IT (ASOIT)</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Star size={20} className="text-indigo-400" />
                  <span className="text-slate-300">2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 bg-slate-800/50 backdrop-blur-sm px-4 py-2 rounded-full">
                  <Briefcase size={20} className="text-purple-400" />
                  <span className="text-slate-300">10+ Projects Completed</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="w-full h-60 sm:h-72 md:h-80 bg-gradient-to-br from-blue-500/20 to-indigo-500/20 rounded-2xl backdrop-blur-sm border border-slate-700/50 flex items-center justify-center overflow-hidden">
                <img 
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800" 
                  alt="Coding workspace" 
                  className="w-full h-full object-cover rounded-2xl opacity-80"
                />
                <div className="text-center">
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent rounded-2xl flex items-center justify-center">
                    <div className="text-center">
                      <Code size={60} className="text-blue-400 mx-auto mb-4" />
                      <p className="text-slate-300 text-lg font-semibold">Building Digital Solutions</p>
                      <p className="text-slate-400">with Modern Technologies</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* Decorative 3D cube */}
              <div className="absolute -right-4 -bottom-4 hidden sm:block animate-float-y">
                <div className="cube animate-rotate-cube">
                  <div className="cube-face"></div>
                  <div className="cube-face"></div>
                  <div className="cube-face"></div>
                  <div className="cube-face"></div>
                  <div className="cube-face"></div>
                  <div className="cube-face"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Globe className="text-blue-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Server className="text-indigo-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-indigo-500/20 text-indigo-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Database className="text-purple-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 transform hover:scale-105">
              <div className="flex items-center gap-3 mb-4">
                <Palette className="text-slate-400" size={24} />
                <h3 className="text-xl font-semibold text-white">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 py-1 bg-slate-500/20 text-slate-300 rounded-full text-sm">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Professional Experience
          </h2>
          
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              
                {experience.map((exp, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{exp.title}</h4>
                      <p className="text-blue-400 font-medium">{exp.company}</p>
                      { (exp as any).location && (
                        <p className="text-slate-400 text-sm">{(exp as any).location}</p>
                      )}
                      </div>
                      <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1 rounded-full">
                      <Calendar size={16} className="text-indigo-400" />
                        <span className="text-slate-300 text-sm">{exp.period}</span>
                      </div>
                    </div>
                    
                    <p className="text-slate-300 mb-4 leading-relaxed">{exp.description}</p>
                    
                    <div className="space-y-2">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2">
                        <div className="w-2 h-2 bg-indigo-400 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-slate-400 text-sm">{achievement}</span>
                        </div>
                    ))}
                  </div>

                  {(exp as any).technologies && (
                    <div className="flex flex-wrap gap-2 mt-4">
                      {(exp as any).technologies.map((tech: string) => (
                        <span key={tech} className="px-3 py-1 bg-slate-700/60 text-slate-300 rounded-full text-xs">
                          {tech}
                        </span>
                      ))}
                    </div>
                  )}
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
                Education
          </h2>
              
          <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {education.map((edu, index) => (
                <div key={index} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300">
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h4 className="text-xl font-semibold text-white">{edu.degree}</h4>
                      <p className="text-indigo-400 font-medium">{edu.field}</p>
                        <p className="text-slate-400">{edu.institution}</p>
                      </div>
                      <div className="text-right">
                      <div className="inline-flex items-center gap-2 bg-slate-800/60 backdrop-blur px-4 py-2 rounded-2xl mb-2 shadow-inner border border-slate-700/60">
                        <Calendar size={16} className="text-blue-300" />
                        <span className="text-slate-200 text-sm whitespace-pre leading-tight">{edu.period.replace(' - ', '\n')}</span>
                        </div>
                      {edu.grade && (
                        <div className="inline-block bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-300 px-4 py-2 rounded-2xl text-sm font-semibold border border-blue-500/30">
                          {edu.grade}
                        </div>
                      )}
                      </div>
                    </div>
                    
                    <p className="text-slate-300 leading-relaxed">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Certificates
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {certificates.map((cert, idx) => (
              <div key={idx} className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-6 border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-white">{cert.title}</h3>
                    <p className="text-slate-400">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-slate-700/50 px-3 py-1 rounded-full">
                    <Calendar size={16} className="text-indigo-400" />
                    <span className="text-slate-300 text-sm">{cert.period}</span>
                  </div>
                </div>
                {Array.isArray((cert as any).notes) && (
                  <ul className="list-disc list-inside text-slate-400 space-y-1">
                    {(cert as any).notes.map((n: string, i: number) => (
                      <li key={i}>{n}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Projects
          </h2>

          {/* Featured Project: Ajio Return Tracking Dashboard */}
          {/* <div className="mb-16">
            <div className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-purple-500/50 transition-all duration-300">
              <div className="p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/60 to-slate-800/20">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h3 className="text-2xl font-semibold text-white">Ajio Return Tracking Dashboard</h3>
                    <p className="text-slate-300 mt-2">A comprehensive multifunctional dashboard for tracking returns across different shipping partners.</p>
                  </div>
                  <button
                    onClick={() => setShowAjioDetails((s) => !s)}
                    className="flex items-center gap-2 text-slate-300 hover:text-purple-300 transition-colors"
                    aria-expanded={showAjioDetails}
                  >
                    <span className="text-sm">{showAjioDetails ? 'Hide details' : 'Show details'}</span>
                    <ChevronDown size={18} className={`transition-transform ${showAjioDetails ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              </div>

              <div className="p-6 grid md:grid-cols-2 gap-8">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Features</h4>
                  <ul className="space-y-2 text-slate-300">
                    <li>📊 Real-time return tracking dashboard</li>
                    <li>🚚 Multiple shipping partner support (Blue Dart, Delhivery, FedEx, DTDC, Ecom Express)</li>
                    <li>🔍 Advanced filtering and search capabilities</li>
                    <li>📈 Key metrics and analytics</li>
                    <li>📋 Return status workflow management</li>
                    <li>📤 Export functionality (CSV)</li>
                    <li>📱 Fully responsive design</li>
                    <li>🎨 Modern UI with smooth animations</li>
                  </ul>

                  <h4 className="text-lg font-semibold text-white mt-6 mb-3">Tech Stack</h4>
                  <div className="flex flex-wrap gap-2">
                    {['React 18', 'TypeScript', 'Tailwind CSS', 'Lucide Icons', 'Vite'].map((t) => (
                      <span key={t} className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm">{t}</span>
                    ))}
                  </div>
            </div>

                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Local Setup</h4>
                  <ol className="list-decimal list-inside space-y-2 text-slate-300">
                    <li>Navigate to the project directory: <span className="text-slate-200">cd ajio-return-dashboard</span></li>
                    <li>Install dependencies: <span className="text-slate-200">npm install</span></li>
                    <li>Start the dev server: <span className="text-slate-200">npm run dev</span></li>
                    <li>Open <span className="text-slate-200">http://localhost:5173</span> in your browser</li>
                  </ol>

                  {showAjioDetails && (
                    <div className="mt-6 space-y-4">
                      <div>
                        <h5 className="text-white font-semibold mb-2">Available Scripts</h5>
                        <ul className="text-slate-300 space-y-1">
                          <li>npm run dev - Start development server</li>
                          <li>npm run build - Build for production</li>
                          <li>npm run preview - Preview production build</li>
                          <li>npm run lint - Run ESLint</li>
                        </ul>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold mb-2">Project Structure</h5>
                        <pre className="text-slate-300 text-sm bg-slate-900/60 p-4 rounded-lg overflow-auto">
{`src/
├── components/
│   └── Dashboard/
│       ├── MetricsCard.tsx
│       ├── StatusBadge.tsx
│       ├── PriorityBadge.tsx
│       ├── ReturnsTable.tsx
│       ├── SearchAndFilters.tsx
│       ├── ShippingPartners.tsx
│       └── ReturnDetailsModal.tsx
├── data/
│   └── mockData.ts
├── types/
│   └── dashboard.ts
├── App.tsx
├── main.tsx
└── index.css`}
                        </pre>
                      </div>
                      <div>
                        <h5 className="text-white font-semibold mb-2">Customization & APIs</h5>
                        <p className="text-slate-300">Replace mock data in <span className="text-slate-200">src/data/mockData.ts</span> with real API calls.</p>
                        <pre className="text-slate-300 text-sm bg-slate-900/60 p-4 rounded-lg overflow-auto">
{`// Example API integration
const fetchReturns = async () => {
  const response = await fetch('/api/returns');
  return response.json();
};`}
                        </pre>
                        <p className="text-slate-300 mt-2">Add new partners by updating <span className="text-slate-200">mockShippingPartners</span> and types in <span className="text-slate-200">src/types/dashboard.ts</span>.</p>
                      </div>
                    </div>
                  )}
                      </div>
                    </div>
                  </div>
          </div> */}

          {/* <h3 className="text-2xl font-bold text-white mb-6">Project Cards</h3> */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12">
            {projects.map((p, idx) => (
              <div key={idx} className="group bg-slate-800/30 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-blue-500/50 transition-all duration-300">
                <div className="p-5 md:p-6 border-b border-slate-700/50 bg-gradient-to-r from-slate-800/60 to-slate-800/20">
                  <h3 className="text-lg md:text-xl font-semibold text-white truncate">{p.title}</h3>
                </div>
                <div className="p-5 md:p-6">
                  <p className="text-slate-300 mb-4 leading-relaxed min-h-[48px] text-sm md:text-base">{p.description}</p>
                  {p.tags && (
                    <div className="flex flex-wrap gap-2">
                      {p.tags.map((t: string) => (
                        <span key={t} className="px-2.5 py-1 bg-slate-700/60 text-slate-300 rounded-full text-[10px] md:text-xs">{t}</span>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          
          <div className="bg-slate-800/30 backdrop-blur-sm rounded-2xl p-8 border border-slate-700/50">
            <div className="text-center mb-12">
              <p className="text-xl text-slate-300 leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on new projects 
                and collaborate with amazing people. Let's create something incredible together!
              </p>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Email</h3>
                <a href="mailto:jenilrupapara48@gmail.com" className="text-blue-400 hover:text-blue-300 transition-colors">
                  jenilrupapara48@gmail.com
                </a>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Linkedin size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/jenilrupapara-fullstack-developer/" target="_blank" rel="noopener noreferrer" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                  Connect with me
                </a>
              </div>

              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Phone</h3>
                <a href="tel:+918799257934" className="text-purple-400 hover:text-purple-300 transition-colors">
                  +91 8799257934
                </a>
              </div>
            </div>

            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mt-8">
              <div className="text-center group">
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-slate-600 to-slate-700 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-200">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-lg font-semibold text-white mb-2">Location</h3>
                <p className="text-slate-300">Surat, Gujarat</p>
              </div>
            </div>

            <div className="text-center mt-12">
              <p className="text-slate-400 mb-6">Available for freelance projects and full-time opportunities</p>
              <a 
                href="mailto:jenilrupapara001@gmail.com" 
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-full font-semibold hover:scale-105 transform transition-all duration-200 shadow-xl hover:shadow-2xl"
              >
                <Mail size={20} />
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-slate-800">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-slate-400">
            © 2025 Jenil Rupapara. Built with React.js and Tailwind CSS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;