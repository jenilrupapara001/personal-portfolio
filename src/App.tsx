import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, Phone, MapPin, Code, Database, Globe, Server, Palette, Star, Calendar, GraduationCap, Briefcase, ExternalLink, ChevronDown, Award, Users, Coffee } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tags: string[];
  url: string;
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [typedText, setTypedText] = useState('');
  const [projectsCount, setProjectsCount] = useState(0);
  const [experienceYears, setExperienceYears] = useState(0);
  const [happyClients, setHappyClients] = useState(0);

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

  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);

  const customDescriptions: { [key: string]: string } = {
    'ajio-return-tracking-dashboard': 'A comprehensive dashboard for tracking product returns across multiple shipping partners like Blue Dart, Delhivery, and FedEx. Features real-time analytics, filtering, and export capabilities.',
    'Amazon-FBA-Profit-Calculator---Complete-Source-Code': 'Complete source code for an Amazon FBA profit calculator that helps sellers analyze profitability including fees, shipping costs, and margins.',
    'Amazon-Scrapper': 'Web scraper for Amazon product data extraction, including prices, reviews, and product details for market research and analysis.',
    'asin-suppression-dashboard': 'Dashboard for monitoring and managing suppressed ASINs on Amazon, with status tracking and remediation workflows.',
    'Face-Recognition-System': 'Computer vision project implementing face detection and recognition using Python and machine learning libraries.',
    'Payment-Mail-Sender': 'Automated email system for sending payment notifications and receipts with customizable templates and logging.',
    'PDF-Trimmer': 'Utility tool for trimming, splitting, and processing PDF documents with a user-friendly interface.',
    'Tea-Stall-Management': 'Complete management system for tea stalls including inventory tracking, billing, and daily sales reporting.'
  };

  useEffect(() => {
    fetch('https://api.github.com/users/jenilrupapara001/repos')
      .then(res => res.json())
      .then(data => {
        const filtered = data.filter((repo: any) => repo.name !== 'personal-portfolio' && !repo.fork && !repo.private);
        setProjects(filtered.map((repo: any) => ({
          title: repo.name.replace(/-/g, ' ').replace(/\b\w/g, (l: string) => l.toUpperCase()),
          description: repo.description || customDescriptions[repo.name] || 'A software development project showcasing various programming skills and technologies.',
          tags: repo.language ? [repo.language] : ['Miscellaneous'],
          url: repo.html_url
        })));
        setLoading(false);
      })
      .catch(err => {
        console.error('Failed to fetch repos:', err);
        setLoading(false);
      });
  }, []);
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-blue-900 dark:to-indigo-900">
      {/* Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* iOS-style subtle gradients */}
        <div className="absolute -top-10 -left-10 w-72 h-72 bg-gradient-to-tr from-blue-400/10 to-indigo-400/10 blur-3xl animate-blob dark:from-blue-500/20 dark:to-indigo-500/20"></div>
        <div className="absolute top-40 -right-16 w-96 h-96 bg-gradient-to-tr from-indigo-400/10 to-purple-400/10 blur-3xl animate-blob [animation-delay:2s] dark:from-indigo-500/20 dark:to-purple-500/20"></div>
        <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-gradient-to-tr from-purple-400/10 to-blue-400/10 blur-3xl animate-blob [animation-delay:4s] dark:from-purple-500/20 dark:to-blue-500/20"></div>
        {/* Subtle pattern overlay */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,0,0,0.02),transparent_50%)] dark:bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.01),transparent_50%)]"></div>
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-white/80 dark:bg-slate-900/80 backdrop-blur-xl shadow-lg border-b border-gray-200/20 dark:border-slate-700/50' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-3 sm:py-4">
            <div className="text-lg sm:text-xl md:text-2xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Jenil Rupapara
            </div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-1">
              {['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="px-3 sm:px-4 py-2 text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 font-medium rounded-full hover:bg-blue-50 dark:hover:bg-slate-800/50 text-sm sm:text-base"
                >
                  {item}
                </button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm rounded-full text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors touch-manipulation"
            >
              {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>

          {/* Mobile Menu */}
          {isMenuOpen && (
            <div className="md:hidden bg-white/95 dark:bg-slate-800/95 backdrop-blur-xl rounded-2xl mt-2 mx-2 p-4 shadow-xl border border-gray-200/20 dark:border-slate-700/50">
              {['Home', 'About', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item.toLowerCase())}
                  className="block w-full text-left py-4 px-4 text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors rounded-xl hover:bg-blue-50 dark:hover:bg-slate-700/50 font-medium touch-manipulation"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative py-20">
        <div className="max-w-4xl mx-auto text-center relative z-10 w-full">
          <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 shadow-2xl border border-white/20 dark:border-slate-700/50">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-4 sm:mb-6 bg-gradient-to-r from-gray-900 dark:from-white via-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight">
              Full Stack Developer
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-gray-700 dark:text-slate-300 mb-6 sm:mb-8 leading-relaxed">
              Hi, I'm <span className="text-blue-600 dark:text-blue-400 font-semibold">Jenil Rupapara</span> — a results-driven Full-Stack Web Developer with 2+ years of experience building scalable, responsive, and user-centric web applications.
            </p>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center mb-8 sm:mb-12">
              <button
                onClick={() => scrollToSection('projects')}
                className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-semibold hover:scale-105 transform transition-all duration-200 shadow-lg hover:shadow-xl text-base sm:text-base touch-manipulation"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="w-full sm:w-auto px-6 sm:px-8 py-4 sm:py-4 bg-white/10 dark:bg-slate-700/50 backdrop-blur-sm border border-gray-200 dark:border-slate-600 text-gray-700 dark:text-slate-300 rounded-2xl font-semibold hover:bg-blue-50 dark:hover:bg-blue-900/20 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 text-base sm:text-base touch-manipulation"
              >
                Get In Touch
              </button>
            </div>

            {/* Social Links */}
            <div className="flex justify-center space-x-3 sm:space-x-4">
              <a href="https://github.com/jenilrupapara001" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-3 bg-white/10 dark:bg-slate-700/50 backdrop-blur-sm rounded-2xl text-gray-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-200 hover:scale-110 shadow-lg touch-manipulation">
                <Github size={24} />
              </a>
              <a href="https://www.linkedin.com/in/jenilrupapara-fullstack-developer/" target="_blank" rel="noopener noreferrer" className="p-3 sm:p-3 bg-white/10 dark:bg-slate-700/50 backdrop-blur-sm rounded-2xl text-gray-600 dark:text-slate-400 hover:text-indigo-600 dark:hover:text-indigo-400 transition-all duration-200 hover:scale-110 shadow-lg touch-manipulation">
                <Linkedin size={24} />
              </a>
              <a href="mailto:jenilrupapara48@gmail.com" className="p-3 sm:p-3 bg-white/10 dark:bg-slate-700/50 backdrop-blur-sm rounded-2xl text-gray-600 dark:text-slate-400 hover:text-purple-600 dark:hover:text-purple-400 transition-all duration-200 hover:scale-110 shadow-lg touch-manipulation">
                <Mail size={24} />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-12 sm:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              About Me
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div className="space-y-4 sm:space-y-6 order-2 md:order-1">
              <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/50">
                <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                Results-driven I am a full-stack web developer with over two years of experience in designing, developing, and optimizing web applications. I have a strong foundation in HTML, CSS, and JavaScript and am proficient in React.js, Node.js, Express.js, and MongoDB. Skilled in API integration, database management, and performance optimization to enhance user experience and functionality.
                </p>
              </div>

              <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/50">
                <p className="text-base sm:text-lg text-gray-700 dark:text-slate-300 leading-relaxed">
                I excel in collaborating with UI/UX teams, troubleshooting bugs, and implementing SEO best practices. I have gained experience in agile environments, actively participating in daily standups, code reviews, and sprint planning to ensure the timely delivery of high-quality results. I am passionate about creating scalable, responsive, and innovative web solutions.
                </p>
              </div>

              <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
                <div className="flex items-center gap-2 sm:gap-3 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-2xl border border-white/20 dark:border-slate-700/50">
                  <div className="p-2 bg-blue-100 dark:bg-blue-900/50 rounded-xl">
                    <GraduationCap size={18} className="text-blue-600 dark:text-blue-400" />
                  </div>
                  <span className="text-gray-700 dark:text-slate-300 font-medium text-sm sm:text-base">B.Tech IT (ASOIT)</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-2xl border border-white/20 dark:border-slate-700/50">
                  <div className="p-2 bg-indigo-100 dark:bg-indigo-900/50 rounded-xl">
                    <Star size={18} className="text-indigo-600 dark:text-indigo-400" />
                  </div>
                  <span className="text-gray-700 dark:text-slate-300 font-medium text-sm sm:text-base">2+ Years Experience</span>
                </div>
                <div className="flex items-center gap-2 sm:gap-3 bg-white/10 dark:bg-slate-800/50 backdrop-blur-sm px-4 sm:px-6 py-3 rounded-2xl border border-white/20 dark:border-slate-700/50">
                  <div className="p-2 bg-purple-100 dark:bg-purple-900/50 rounded-xl">
                    <Briefcase size={18} className="text-purple-600 dark:text-purple-400" />
                  </div>
                  <span className="text-gray-700 dark:text-slate-300 font-medium text-sm sm:text-base">10+ Projects Completed</span>
                </div>
              </div>
            </div>

            <div className="relative order-1 md:order-2">
              <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/50 overflow-hidden">
                <img
                  src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=800"
                  alt="Coding workspace"
                  className="w-full h-48 sm:h-64 object-cover rounded-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-2xl sm:rounded-3xl flex items-center justify-center">
                  <div className="text-center bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/50">
                    <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/50 rounded-2xl w-fit mx-auto mb-3 sm:mb-4">
                      <Code size={24} className="text-blue-600 dark:text-blue-400" />
                    </div>
                    <p className="text-gray-800 dark:text-slate-200 text-base sm:text-lg font-semibold">Building Digital Solutions</p>
                    <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base">with Modern Technologies</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-12 sm:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Skills & Expertise
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl touch-manipulation">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-blue-100 dark:bg-blue-900/50 rounded-2xl">
                  <Globe className="text-blue-600 dark:text-blue-400" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Frontend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.frontend.map((skill) => (
                  <span key={skill} className="px-3 sm:px-4 py-2 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-2xl text-xs sm:text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl touch-manipulation">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-indigo-100 dark:bg-indigo-900/50 rounded-2xl">
                  <Server className="text-indigo-600 dark:text-indigo-400" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Backend</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.backend.map((skill) => (
                  <span key={skill} className="px-3 sm:px-4 py-2 bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 rounded-2xl text-xs sm:text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/50 hover:border-purple-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl touch-manipulation">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-purple-100 dark:bg-purple-900/50 rounded-2xl">
                  <Database className="text-purple-600 dark:text-purple-400" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Database</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.database.map((skill) => (
                  <span key={skill} className="px-3 sm:px-4 py-2 bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 rounded-2xl text-xs sm:text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-4 sm:p-6 border border-white/20 dark:border-slate-700/50 hover:border-slate-500/50 transition-all duration-300 transform hover:scale-105 hover:shadow-xl touch-manipulation">
              <div className="flex items-center gap-3 mb-4 sm:mb-6">
                <div className="p-2 sm:p-3 bg-gray-100 dark:bg-slate-700/50 rounded-2xl">
                  <Palette className="text-gray-600 dark:text-slate-400" size={20} />
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-gray-900 dark:text-white">Tools</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {skills.tools.map((skill) => (
                  <span key={skill} className="px-3 sm:px-4 py-2 bg-gray-100 dark:bg-slate-700/30 text-gray-700 dark:text-slate-300 rounded-2xl text-xs sm:text-sm font-medium">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-12 sm:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Professional Experience
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
                {experience.map((exp, index) => (
                <div key={index} className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6 gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{exp.title}</h4>
                        <p className="text-blue-600 dark:text-blue-400 font-semibold text-base sm:text-lg mb-1">{exp.company}</p>
                        { (exp as any).location && (
                          <p className="text-gray-600 dark:text-slate-400 text-sm">{(exp as any).location}</p>
                        )}
                      </div>
                      <div className="flex items-center gap-2 bg-blue-100 dark:bg-slate-700/50 px-3 sm:px-4 py-2 rounded-2xl self-start">
                        <Calendar size={14} className="text-blue-600 dark:text-indigo-400" />
                        <span className="text-blue-700 dark:text-slate-300 text-xs sm:text-sm font-medium">{exp.period}</span>
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-slate-300 mb-4 sm:mb-6 leading-relaxed text-base sm:text-lg">{exp.description}</p>

                    <div className="space-y-2 sm:space-y-3 mb-4 sm:mb-6">
                      {exp.achievements.map((achievement, i) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-3">
                          <div className="w-1.5 sm:w-2 h-1.5 sm:h-2 bg-indigo-500 rounded-full mt-2 sm:mt-3 flex-shrink-0"></div>
                          <span className="text-gray-600 dark:text-slate-400 text-sm leading-relaxed">{achievement}</span>
                        </div>
                     ))}
                   </div>

                  {(exp as any).technologies && (
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {(exp as any).technologies.map((tech: string) => (
                        <span key={tech} className="px-3 sm:px-4 py-2 bg-gray-100 dark:bg-slate-700/60 text-gray-700 dark:text-slate-300 rounded-2xl text-xs sm:text-sm font-medium">
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
      <section id="education" className="py-12 sm:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Education
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          </div>

          <div className="max-w-4xl mx-auto">
              <div className="space-y-8">
                {education.map((edu, index) => (
                <div key={index} className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300 hover:shadow-xl">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 sm:mb-6 gap-4">
                      <div className="flex-1">
                        <h4 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white mb-2">{edu.degree}</h4>
                        <p className="text-indigo-600 dark:text-indigo-400 font-semibold text-base sm:text-lg mb-1">{edu.field}</p>
                        <p className="text-gray-600 dark:text-slate-400 text-sm sm:text-base">{edu.institution}</p>
                      </div>
                      <div className="flex flex-col items-end gap-2">
                        <div className="inline-flex items-center gap-2 bg-indigo-100 dark:bg-slate-700/50 px-3 sm:px-4 py-2 sm:py-3 rounded-2xl border border-indigo-200 dark:border-slate-600">
                          <Calendar size={14} className="text-indigo-600 dark:text-blue-300" />
                          <span className="text-indigo-700 dark:text-slate-200 text-xs sm:text-sm font-medium whitespace-pre leading-tight">{edu.period.replace(' - ', '\n')}</span>
                        </div>
                        {edu.grade && (
                          <div className="inline-block bg-gradient-to-br from-blue-500/20 to-indigo-500/20 text-blue-700 dark:text-blue-300 px-3 sm:px-4 py-2 rounded-2xl text-xs sm:text-sm font-bold border border-blue-500/30">
                            {edu.grade}
                          </div>
                        )}
                      </div>
                    </div>

                    <p className="text-gray-700 dark:text-slate-300 leading-relaxed text-base sm:text-lg">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-12 sm:py-20 px-4 relative">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Certificates
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {certificates.map((cert, idx) => (
              <div key={idx} className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 border border-white/20 dark:border-slate-700/50 hover:border-blue-500/50 transition-all duration-300 hover:shadow-xl">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between mb-4 gap-3">
                  <div className="flex-1">
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-1">{cert.title}</h3>
                    <p className="text-gray-600 dark:text-slate-400 font-medium text-sm sm:text-base">{cert.issuer}</p>
                  </div>
                  <div className="flex items-center gap-2 bg-blue-100 dark:bg-slate-700/50 px-3 sm:px-4 py-2 rounded-2xl border border-blue-200 dark:border-slate-600 self-start">
                    <Calendar size={14} className="text-blue-600 dark:text-indigo-400" />
                    <span className="text-blue-700 dark:text-slate-300 text-xs sm:text-sm font-medium">{cert.period}</span>
                  </div>
                </div>
                {Array.isArray((cert as any).notes) && (
                  <ul className="space-y-2">
                    {(cert as any).notes.map((n: string, i: number) => (
                      <li key={i} className="flex items-start gap-2 text-gray-600 dark:text-slate-400">
                        <div className="w-1.5 h-1.5 bg-indigo-500 rounded-full mt-2 flex-shrink-0"></div>
                        <span className="text-sm leading-relaxed">{n}</span>
                      </li>
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
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Projects
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          </div>

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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mb-12">
            {loading ? (
              Array.from({ length: 6 }).map((_, idx) => (
                <div key={idx} className="bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 animate-pulse">
                  <div className="p-4 sm:p-6 md:p-8">
                    <div className="h-5 sm:h-6 bg-white/10 rounded mb-3 sm:mb-4"></div>
                    <div className="h-3 sm:h-4 bg-white/10 rounded mb-2"></div>
                    <div className="h-3 sm:h-4 bg-white/10 rounded mb-4 sm:mb-6 w-3/4"></div>
                    <div className="flex gap-2 sm:gap-3">
                      <div className="h-5 sm:h-6 bg-white/10 rounded-full w-12 sm:w-16"></div>
                      <div className="h-5 sm:h-6 bg-white/10 rounded-full w-16 sm:w-20"></div>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              projects.map((p, idx) => (
                <div key={idx} className="group relative bg-white/5 backdrop-blur-xl rounded-2xl sm:rounded-3xl overflow-hidden border border-white/10 hover:border-white/20 transition-all duration-500 transform hover:scale-105 hover:-translate-y-2 shadow-2xl hover:shadow-blue-500/20 touch-manipulation">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-indigo-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="relative p-4 sm:p-6 md:p-8">
                    <div className="flex items-start justify-between mb-3 sm:mb-4">
                      <div className="flex-1">
                        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 leading-tight">{p.title}</h3>
                        <div className="flex items-center gap-2">
                          <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                          <span className="text-slate-400 text-xs sm:text-sm">Active Project</span>
                        </div>
                      </div>
                      <a href={p.url} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors group/link touch-manipulation">
                        <ExternalLink size={18} className="text-slate-300 group-hover/link:text-blue-400" />
                      </a>
                    </div>
                    <p className="text-slate-300 mb-4 sm:mb-6 leading-relaxed text-sm md:text-base line-clamp-3">{p.description}</p>
                    {p.tags && (
                      <div className="flex flex-wrap gap-2 sm:gap-3">
                        {p.tags.map((t: string) => (
                          <span key={t} className="px-3 sm:px-4 py-2 bg-gradient-to-r from-blue-500/20 to-purple-500/20 text-blue-300 rounded-full text-xs font-medium border border-blue-500/30 backdrop-blur-sm">
                            {t}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
                </div>
              ))
            )}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-12 sm:py-20 px-4 relative">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold bg-gradient-to-r from-gray-900 dark:from-white via-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">
              Let's Work Together
            </h2>
            <div className="w-16 sm:w-24 h-1 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-full mx-auto"></div>
          </div>

          <div className="bg-white/10 dark:bg-slate-800/20 backdrop-blur-xl rounded-2xl sm:rounded-3xl p-6 sm:p-8 md:p-12 border border-white/20 dark:border-slate-700/50 shadow-2xl">
            <div className="text-center mb-8 sm:mb-12">
              <p className="text-lg sm:text-xl text-gray-700 dark:text-slate-300 leading-relaxed">
                Ready to bring your ideas to life? I'm always excited to work on new projects
                and collaborate with amazing people. Let's create something incredible together!
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10">
              <div className="text-center group">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-blue-500/30 touch-manipulation">
                  <Mail size={24} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Email</h3>
                <a href="mailto:jenilrupapara48@gmail.com" className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors font-medium text-sm sm:text-base break-all">
                  jenilrupapara48@gmail.com
                </a>
              </div>

              <div className="text-center group">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-indigo-500/30 touch-manipulation">
                  <Linkedin size={24} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">LinkedIn</h3>
                <a href="https://www.linkedin.com/in/jenilrupapara-fullstack-developer/" target="_blank" rel="noopener noreferrer" className="text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 dark:hover:text-indigo-300 transition-colors font-medium text-sm sm:text-base">
                  Connect with me
                </a>
              </div>

              <div className="text-center group">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-purple-500 to-blue-500 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-purple-500/30 touch-manipulation">
                  <Phone size={24} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Phone</h3>
                <a href="tel:+918799257934" className="text-purple-600 dark:text-purple-400 hover:text-purple-700 dark:hover:text-purple-300 transition-colors font-medium text-sm sm:text-base">
                  +91 8799257934
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 md:gap-10 mt-6 sm:mt-8">
              <div className="text-center group">
                <div className="w-16 sm:w-20 h-16 sm:h-20 mx-auto mb-4 sm:mb-6 bg-gradient-to-br from-gray-500 to-slate-600 rounded-2xl sm:rounded-3xl flex items-center justify-center group-hover:scale-110 transition-all duration-300 shadow-lg group-hover:shadow-gray-500/30 touch-manipulation">
                  <MapPin size={24} className="text-white" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 sm:mb-3">Location</h3>
                <p className="text-gray-600 dark:text-slate-400 font-medium text-sm sm:text-base">Surat, Gujarat</p>
              </div>
            </div>

            <div className="text-center mt-8 sm:mt-12">
              <p className="text-gray-600 dark:text-slate-400 mb-6 sm:mb-8 font-medium text-sm sm:text-base">Available for freelance projects and full-time opportunities</p>
              <a
                href="mailto:jenilrupapara001@gmail.com"
                className="inline-flex items-center gap-2 sm:gap-3 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-2xl font-bold hover:scale-105 transform transition-all duration-300 shadow-xl hover:shadow-2xl text-sm sm:text-base touch-manipulation"
              >
                <Mail size={20} />
                Start a Project
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 px-4 bg-white/5 dark:bg-slate-900/50 backdrop-blur-sm border-t border-gray-200/20 dark:border-slate-700/50">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-600 dark:text-slate-400 font-medium text-sm sm:text-base">
            © 2025 Jenil Rupapara. Built with React.js and Tailwind CSS. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;