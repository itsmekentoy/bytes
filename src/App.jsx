import React, { useState, useEffect } from 'react';
import { Menu, X, Code, Smartphone, Cloud, Palette, Bot, Wrench, Monitor, Mail, Phone, MapPin, ChevronDown, ChevronLeft, ChevronRight, ExternalLink, Github } from 'lucide-react';
import { SpeedInsights } from "@vercel/speed-insights/next"
export default function ByteSolutionsLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [contactForm, setContactForm] = useState({ name: '', email: '', message: '' });
  const [currentProject, setCurrentProject] = useState(0);

  const projects = [
    {
      id: 1,
      title: "Car Rental Booking Management System",
      description: "a web-based application designed to streamline the process of renting vehicles for both customers and rental companies. This system allows users to easily browse, reserve, and manage car rentals while providing administrators with tools to oversee fleet availability, customer bookings, and payment tracking.",
      image: "https://etimg.etb2bimg.com/thumb/113932619.cms?width=400&height=300",
      technologies: ["PHP", "Wordpress", "MySQL", "Paypal API"],
      liveUrl: "https://appointment.touristdrivermanila.com/",
      githubUrl: "#"
    },
    {
      id: 2,
      title: "HRIS With Payroll Management System",
      description: "The HRIS with Payroll Management System is a web-based solution that streamlines employee data management, attendance tracking, and automates payroll processing with accurate computation of salaries, deductions, and government contributions. It improves HR efficiency and ensures timely, error-free payroll operations.",
      image: "https://shiftin.app/wp-content/uploads/2022/01/what-is-hris-and-how-does-it-work@2x.jpg",
      technologies: ["React.JS", "Laravel 12", "OracleDB", "Sockect.io", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 3,
      title: "School Management System",
      description: "An all-in-one web-based platform designed to automate and simplify daily academic and administrative tasks in educational institutions. It enhances communication between administrators, teachers, students, and parents, while ensuring efficient management of school operations.",
      image: "https://5.imimg.com/data5/BP/UG/RG/SELLER-73014895/school-management-system-500x500.png",
      technologies: ["Window Form .NET", "MSSQL","Laravel 12","PHP","Bootstrap", "Azure"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      id: 4,
      title: "Student Portal",
      description: "A secure web-based platform developed to give students centralized access to academic and administrative services. It simplifies communication between students, faculty, and school administration by providing real-time access to academic records, schedules, announcements, and more.",
      image: "https://static-blog.onlyoffice.com/wp-content/uploads/2023/08/04132048/onlyoffice-what-is-student-portal-in-2023.png",
      technologies: ["React", "PHP", "PostgreSQL", "Socket IO","Bootstrap","Firebase"],
      liveUrl: "https://student.lemerycolleges.edu.ph",
      githubUrl: "#"
    }
    
  ];

  const nextProject = () => {
    setCurrentProject((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProject((prev) => (prev - 1 + projects.length) % projects.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextProject();
    }, 5000); // Auto-advance every 5 seconds

    return () => clearInterval(timer);
  }, []);

  const goToProject = (index) => {
    setCurrentProject(index);
  };

  const services = [
    { icon: Code, title: "Web Development", desc: "Custom web applications built with modern technologies" },
    { icon: Smartphone, title: "Mobile App Development", desc: "iOS and Android applications for your business needs" },
    { icon: Cloud, title: "Cloud Server Setup", desc: "Scalable cloud infrastructure and deployment solutions" },
    { icon: Palette, title: "UI/UX Design", desc: "Beautiful and intuitive user interface designs" },
    { icon: Bot, title: "AI Automation", desc: "Intelligent automation solutions for business processes" },
    { icon: Wrench, title: "Support & Maintenance", desc: "Ongoing technical support and system maintenance" },
    { icon: Monitor, title: "Windows Applications", desc: "Desktop applications for Windows environments" },
    { icon: Monitor,title: "Cisco Packet Tracer",desc:"Network Management using a Packet Tracer"}
  ];

  const techStack = [
    // CSS Frameworks
    { name: "Tailwind CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "Bootstrap CSS", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/bootstrap/bootstrap-original.svg" },
    
    // Backend
    { name: "Laravel", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg" },
    { name: "CodeIgniter", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/codeigniter/codeigniter-plain.svg" },
    { name: "ASP.NET", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/dot-net/dot-net-original.svg" },
    { name: "PHP", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg" },
    { name: "Node.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg" },
    { name: "Express.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg" },
    
    // Frontend
    { name: "React", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg" },
    { name: "Vue.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vuejs/vuejs-original.svg" },
    { name: "Angular.js", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/angularjs/angularjs-original.svg" },
    
    // Database
    { name: "MySQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg" },
    { name: "MSSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/microsoftsqlserver/microsoftsqlserver-original.svg" },
    { name: "PostgreSQL", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg" },
    { name: "Oracle DB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/oracle/oracle-original.svg" },
    { name: "MongoDB", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg" },
    { name: "Firebase", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/firebase/firebase-original.svg" }
  ];

  const handleContactSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log('Form submitted:', contactForm);
    // Reset form
    setContactForm({ name: '', email: '', message: '' });
  };

  // Split tech stack into columns of 6
  const getColumns = () => {
    const columns = [];
    for (let i = 0; i < techStack.length; i += 6) {
      columns.push(techStack.slice(i, i + 6));
    }
    return columns;
  };

  return (
    
    <div className="w-full min-h-screen bg-white text-black">
      <SpeedInsights />
      {/* Navigation */}
      
      <nav className="fixed w-full z-50 bg-black shadow-lg border-b border-gray-300">
        <div className="w-full max-w-none px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center">
              <div className="text-2xl font-bold text-white">
                ByteS
              </div>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-white hover:text-gray-300 transition-colors">Home</a>
              <a href="#services" className="text-white hover:text-gray-300 transition-colors">Services</a>
              <a href="#projects" className="text-white hover:text-gray-300 transition-colors">Projects</a>
              <a href="#tech-stack" className="text-white hover:text-gray-300 transition-colors">Tech Stack</a>
              <a href="#about" className="text-white hover:text-gray-300 transition-colors">About</a>
              <a href="#contact" className="text-white hover:text-gray-300 transition-colors">Contact</a>
            </div>

            <button
              className="md:hidden text-white"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-black">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 text-white hover:text-gray-300">Home</a>
              <a href="#services" className="block px-3 py-2 text-white hover:text-gray-300">Services</a>
              <a href="#projects" className="block px-3 py-2 text-white hover:text-gray-300">Projects</a>
              <a href="#tech-stack" className="block px-3 py-2 text-white hover:text-gray-300">Tech Stack</a>
              <a href="#about" className="block px-3 py-2 text-white hover:text-gray-300">About</a>
              <a href="#contact" className="block px-3 py-2 text-white hover:text-gray-300">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&h=1080&fit=crop" 
            alt="Technology Background" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black bg-opacity-60"></div>
        </div>
        
        <div className="w-full max-w-none text-center relative z-10">
          <div className="animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-white">
                Byte Solutions
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-3xl mx-auto">
              Transforming ideas into digital reality with cutting-edge technology solutions
            </p>
            
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="w-full max-w-none">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="group p-6 bg-white rounded-xl border border-gray-200 hover:border-gray-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg">
                <service.icon className="w-12 h-12 text-black mb-4 group-hover:text-gray-600 transition-colors" />
                <h3 className="text-xl font-semibold text-black mb-3">{service.title}</h3>
                <p className="text-gray-600">{service.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
        <div className="w-full max-w-none">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Our Projects
          </h2>
          
          <div className="relative max-w-6xl mx-auto">
            {/* Carousel Container */}
            <div className="relative overflow-hidden rounded-2xl shadow-2xl">
              <div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentProject * 100}%)` }}>
                {projects.map((project, index) => (
                  <div key={project.id} className="w-full flex-shrink-0">
                    <div className="grid grid-cols-1 lg:grid-cols-2 bg-white">
                      {/* Project Image */}
                      <div className="relative h-96 lg:h-auto">
                        <img 
                          src={project.image} 
                          alt={project.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black bg-opacity-20"></div>
                      </div>
                      
                      {/* Project Details */}
                      <div className="p-8 lg:p-12 flex flex-col justify-center">
                        <h3 className="text-3xl font-bold text-black mb-4">{project.title}</h3>
                        <p className="text-gray-600 mb-6 leading-relaxed">{project.description}</p>
                        
                        {/* Technologies */}
                        <div className="mb-6">
                          <h4 className="text-sm font-semibold text-gray-800 mb-3">Technologies Used:</h4>
                          <div className="flex flex-wrap gap-2">
                            {project.technologies.map((tech, techIndex) => (
                              <span key={techIndex} className="px-3 py-1 bg-black text-white rounded-full text-sm">
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>
                        
                        {/* Action Buttons */}
                        <div className="flex gap-4">
                          <button className="flex items-center gap-2 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors">
                            <ExternalLink size={16} />
                            Live Demo
                          </button>
                          <button className="flex items-center gap-2 px-6 py-3 border-2 border-black text-black rounded-lg hover:bg-black hover:text-white transition-colors">
                            <Github size={16} />
                            View Code
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Navigation Arrows */}
            <button 
              onClick={prevProject}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 z-10"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={nextProject}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-80 text-white p-3 rounded-full hover:bg-opacity-100 transition-all duration-300 z-10"
            >
              <ChevronRight size={24} />
            </button>
            
            {/* Dot Indicators */}
            <div className="flex justify-center mt-8 space-x-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToProject(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentProject 
                      ? 'bg-black scale-125' 
                      : 'bg-gray-400 hover:bg-gray-600'
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section id="tech-stack" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-none">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Tech Stack
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {getColumns().map((column, columnIndex) => (
              <div key={columnIndex} className="space-y-4">
                {column.map((tech, techIndex) => (
                  <div key={techIndex} className="group p-4 bg-white rounded-xl border-2 border-gray-200 hover:border-gray-400 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg">
                    <div className="flex items-center space-x-4">
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-50 rounded-lg group-hover:bg-gray-100 transition-colors">
                        <img 
                          src={tech.logo} 
                          alt={tech.name} 
                          className="w-8 h-8 object-contain"
                          onError={(e) => {
                            e.target.style.display = 'none';
                            e.target.nextSibling.style.display = 'block';
                          }}
                        />
                        <div className="w-8 h-8 bg-black rounded flex items-center justify-center text-white text-xs font-bold hidden">
                          {tech.name.charAt(0)}
                        </div>
                      </div>
                      <div>
                        <h3 className="text-lg font-semibold text-black group-hover:text-gray-700 transition-colors">
                          {tech.name}
                        </h3>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Developer Section */}
      <section id="about" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-black">
        <div className="w-full max-w-none">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-white">
            About Developer
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="text-2xl font-semibold text-white mb-6">Meet Our Lead Developer</h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                Welcome to my digital space! I’m a Software Developer with 3 years of experience in building smart, scalable, and secure web applications. I specialize in backend development using PHP (Laravel) and modern frontend frameworks like React.js.
              </p>
              <p className="text-gray-300 mb-6 leading-relaxed">
                With 1 year of experience in the professional field and 2 years as a dedicated freelancer, I’ve worked on a range of real-world projects — from school management systems to custom online ordering platforms — helping clients bring their ideas to life through efficient, well-structured code.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Whether you're looking to collaborate on a project, need a reliable developer to bring your vision to life, or just want to connect — you're in the right place.
              </p>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-2xl blur-lg opacity-20"></div>
                <img 
                  src="https://scontent.fmnl37-2.fna.fbcdn.net/v/t39.30808-6/488905896_3616376695331755_7797062479073869346_n.jpg?stp=dst-jpg_tt6&cstp=mx960x1280&ctp=s960x1280&_nc_cat=108&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeGTfFNzTrL8XCVajfBpnxyXZfH6hqu-di5l8fqGq752LtZjYfI38vSEVtpRC1QpzMsu861-Lg4HczA5BiElZY_a&_nc_ohc=5hDfSJU9HjgQ7kNvwHHv0nt&_nc_oc=Adk7-WoLFf4dG2uMa_Ngay_tzcQDlUIx5OKJqxWkfWwTs6Pywn3bxAf7dhI5dRbpJlPLOSGG5R1VhkNmNHQ_cmuy&_nc_zt=23&_nc_ht=scontent.fmnl37-2.fna&_nc_gid=-cZjXOsvYbVAtdXc6Oa53g&oh=00_AfNV50j4LZx99yVd6kZr2xHRd0Gsl-wc6eVrYeiHMmOttg&oe=686C6340" 
                  alt="Lead Developer" 
                  className="relative w-full max-w-md mx-auto rounded-2xl shadow-2xl border-2 border-gray-600"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="min-h-screen flex items-center py-20 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="w-full max-w-none">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-black">
            Contact Us
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold text-black mb-8">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <Mail className="w-6 h-6 text-black mr-4" />
                  <span className="text-gray-700">kentcortiguerra.troubleshouter@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 text-black mr-4" />
                  <span className="text-gray-700">+639 5651 35253  </span> 
                </div>
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 text-black mr-4" />
                  <span className="text-gray-700">Bangin San Nicolas, Batangas</span>
                </div>
              </div>
            </div>
            <div>
              <div className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Your Name"
                    value={contactForm.name}
                    onChange={(e) => setContactForm({...contactForm, name: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Your Email"
                    value={contactForm.email}
                    onChange={(e) => setContactForm({...contactForm, email: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    rows={4}
                    placeholder="Your Message"
                    value={contactForm.message}
                    onChange={(e) => setContactForm({...contactForm, message: e.target.value})}
                    className="w-full px-4 py-3 bg-white border-2 border-gray-300 rounded-lg text-black placeholder-gray-500 focus:border-black focus:outline-none transition-colors resize-none"
                  ></textarea>
                </div>
                <button
                  onClick={handleContactSubmit}
                  className="w-full px-6 py-3 bg-black text-white font-semibold rounded-lg hover:bg-gray-800 transform hover:scale-105 transition-all duration-300 shadow-lg"
                >
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-black border-t border-gray-600">
        <div className="w-full max-w-none text-center">
          <div className="text-2xl font-bold text-white mb-4">
            ByteS
          </div>
          <p className="text-gray-400">
            © 2025 Byte Solutions. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}