import { motion, AnimatePresence } from 'motion/react';
import { 
  Code, 
  Database, 
  Layout, 
  MessageSquare, 
  ExternalLink, 
  Github, 
  Send, 
  CheckCircle, 
  Menu, 
  X,
  Smartphone,
  Globe,
  Settings,
  Star
} from 'lucide-react';
import { useState, useEffect } from 'react';

// --- Types ---
interface Project {
  title: string;
  problem: string;
  solution: string;
  technologies: string[];
  outcome: string;
  image: string;
  github?: string;
  demo?: string;
}

interface Service {
  title: string;
  description: string;
  icon: any;
}

interface Skill {
  name: string;
  level: number; // 0-100
}

interface Testimonial {
  name: string;
  role: string;
  text: string;
  avatar: string;
}

// --- Data ---
const SKILLS: Skill[] = [
  { name: 'PHP (CodeIgniter)', level: 85 },
  { name: 'Python (Django)', level: 80 },
  { name: 'MySQL / SQLite', level: 85 },
  { name: 'HTML / CSS / Bootstrap', level: 95 },
  { name: 'JavaScript', level: 75 },
  { name: 'Git / GitHub', level: 80 },
];

const PROJECTS: Project[] = [
  {
    title: 'SBBUVAS LMS (Final Year Project)',
    problem: 'Academic staff and students at Shaheed Benazir Bhutto University lacked a centralized platform for material sharing and progress tracking.',
    solution: 'Engineered a full-featured Learning Management System using Django for secure backend and clean HTML/CSS/JS for the interface.',
    technologies: ['Django', 'Python', 'SQLite', 'JavaScript'],
    outcome: 'Streamlined course material distribution and automated grade tracking for the entire university department.',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800',
    github: '#',
    demo: '#'
  },
  {
    title: 'SBBUVAS Attendance Management',
    problem: 'Manual attendance tracking led to high error rates and time-consuming record-keeping in classroom settings.',
    solution: 'Developed a high-speed web-based management system using PHP and the CodeIgniter framework (MVC architecture).',
    technologies: ['PHP', 'CodeIgniter', 'MySQL', 'Bootstrap'],
    outcome: 'Eliminated manual tracking errors and reduced administrative workload by 60% through automated reporting.',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800',
    github: '#',
    demo: '#'
  }
];

const SERVICES: Service[] = [
  {
    title: 'Fast Web Development',
    description: 'Expertise in Django and CodeIgniter to build reliable, high-performance web applications rapidly.',
    icon: Settings
  },
  {
    title: 'Functional UX Design',
    description: 'Responsive, user-friendly interfaces using Bootstrap and JavaScript, focused on solving real-world usability issues.',
    icon: Globe
  },
  {
    title: 'Database Management',
    description: 'Structured MySQL and SQLite database design to ensure data integrity and efficient record keeping.',
    icon: Code
  }
];

// --- Components ---

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Projects', href: '#projects' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-3' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 flex justify-between items-center">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-8 h-8 bg-brand rounded-lg flex items-center justify-center font-bold text-black rotate-3 group-hover:rotate-0 transition-transform">R</div>
          <span className="text-xl font-bold tracking-tighter text-white">REHMAN<span className="text-brand">ALI</span></span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href} 
              className="text-[10px] font-black uppercase tracking-widest text-zinc-400 hover:text-brand transition-colors"
            >
              {link.name}
            </a>
          ))}
          <a 
            href="#contact" 
            className="flex items-center gap-2 px-6 py-2 border border-brand text-brand rounded-full text-[10px] font-black uppercase tracking-widest hover:bg-brand hover:text-black transition-all"
          >
            Work with me
          </a>
        </div>

        {/* Mobile Toggle */}
        <button className="md:hidden text-white" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden glass absolute top-full left-0 w-full overflow-hidden"
          >
            <div className="px-6 py-10 space-y-6 flex flex-col items-center">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href} 
                  onClick={() => setIsOpen(false)}
                  className="text-xl font-bold text-white uppercase tracking-tighter"
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                onClick={() => setIsOpen(false)}
                className="w-full text-center bg-brand text-black py-4 rounded-2xl font-black uppercase tracking-widest"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

const WhatsAppButton = () => (
  <motion.a
    href="https://wa.me/923042463163" 
    target="_blank"
    rel="noopener noreferrer"
    whileHover={{ scale: 1.1, rotate: 5 }}
    whileTap={{ scale: 0.9 }}
    className="fixed bottom-8 right-8 z-50 bg-[#25D366] text-white p-5 rounded-full shadow-[0_0_30px_rgba(37,211,102,0.3)] flex items-center justify-center border-4 border-black/20"
    aria-label="Contact on WhatsApp"
  >
    <MessageSquare className="w-7 h-7" />
  </motion.a>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-surface grid-pattern">
    <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-brand/10 rounded-full blur-[120px] -z-10 animate-pulse" />
    <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-blue-600/5 rounded-full blur-[120px] -z-10" />
    
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 w-full">
      <div className="grid lg:grid-cols-12 gap-12 items-center text-center lg:text-left">
        <motion.div
           className="lg:col-span-8"
           initial={{ opacity: 0, y: 30 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.8 }}
        >
          <div className="inline-flex items-center gap-3 glass px-4 py-2 rounded-full mb-8">
            <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-[10px] font-black uppercase tracking-widest text-zinc-300">Available for 2026 Internships</span>
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-[-0.06em] text-white leading-[0.85] mb-8">
            CODE <br /> 
            <span className="text-brand text-glow italic">SOLUTIONS,</span> <br /> 
            NOT JUST <br /> 
            WEBSITES.
          </h1>

          <div className="max-w-xl mx-auto lg:mx-0">
            <p className="text-lg md:text-xl text-zinc-400 mb-10 leading-relaxed font-medium">
              I'm <span className="text-white font-bold">Rehman Ali</span>. I engineer high-performance backends and user-centric interfaces. From SBBUVAS academic systems to custom Laravel/Django logic.
            </p>
            
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              <a 
                href="#contact" 
                className="px-10 py-5 bg-brand text-black rounded-2xl font-black uppercase tracking-widest text-sm hover:scale-105 active:scale-95 transition-all shadow-[0_0_40px_rgba(59,130,246,0.3)]"
              >
                Let's Build It
              </a>
              <a 
                href="#projects" 
                className="px-10 py-5 glass text-white rounded-2xl font-black uppercase tracking-widest text-sm hover:bg-white/5 transition-all"
              >
                View Stack
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="lg:col-span-4 hidden lg:block"
          initial={{ opacity: 0, scale: 0.9, rotate: 2 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
           <div className="relative group">
              <div className="absolute -inset-4 bg-brand/20 blur-[80px] -z-10 group-hover:bg-brand/30 transition-colors duration-500" />
              
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden glass border-white/5 shadow-2xl">
                 <img 
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                    alt="Rehman Ali" 
                    className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                 />
                 
                 <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-60" />
                 
                 <div className="absolute bottom-0 left-0 w-full p-8 z-10">
                    <motion.div 
                      initial={{ y: 20, opacity: 0 }}
                      animate={{ y: 0, opacity: 1 }}
                      transition={{ delay: 0.8 }}
                      className="flex justify-between items-end"
                    >
                       <div>
                          <div className="text-[10px] font-mono text-brand mb-1 flex items-center gap-2">
                             <span className="w-2 h-2 rounded-full bg-brand animate-pulse" />
                             CORE_ARCHITECT
                          </div>
                          <div className="text-3xl font-black text-white uppercase tracking-tighter">REHMAN ALI</div>
                       </div>
                    </motion.div>
                 </div>
              </div>

              {/* Floating Tech Indicator */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -right-6 top-1/3 glass px-4 py-3 rounded-2xl border-white/10 shadow-2xl z-20 hidden xl:flex items-center gap-3"
              >
                 <div className="w-2 h-2 rounded-full bg-green-500" />
                 <div className="font-mono text-[10px] text-zinc-300 font-bold uppercase tracking-widest">System Online</div>
              </motion.div>

              {/* Decorative Element */}
              <div className="absolute -bottom-6 -left-6 w-24 h-24 border-l-4 border-b-4 border-brand/20 rounded-bl-3xl -z-10" />
           </div>
        </motion.div>
      </div>
    </div>
  </section>
);

const Skills = () => (
  <section id="skills" className="py-24 bg-surface relative">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
       <div className="grid lg:grid-cols-2 gap-16 items-end mb-16">
          <div>
            <div className="text-brand font-mono text-xs mb-4 flex items-center gap-2">
               <div className="h-px w-8 bg-brand" /> TECH STACK 01
            </div>
            <h2 className="text-4xl md:text-6xl font-black text-white uppercase leading-none">Engineering <br /> Efficiency.</h2>
          </div>
          <p className="text-zinc-500 max-w-sm mb-2 font-medium">
            Mastering the balance between rapid deployment and long-term stability using professional-grade frameworks.
          </p>
       </div>

       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
         {SKILLS.map((skill, index) => (
           <motion.div 
             key={skill.name}
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             transition={{ delay: index * 0.1 }}
             className="glass p-8 rounded-3xl group hover:border-brand/40 transition-colors"
           >
              <div className="flex justify-between items-baseline mb-4">
                 <h3 className="font-mono text-sm font-bold text-white uppercase tracking-tighter">{skill.name}</h3>
                 <span className="font-mono text-xs text-brand">{skill.level}%</span>
              </div>
              <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
                 <motion.div 
                   initial={{ width: 0 }}
                   whileInView={{ width: `${skill.level}%` }}
                   transition={{ duration: 1.5, ease: "circOut" }}
                   className="h-full bg-brand"
                 />
              </div>
           </motion.div>
         ))}
       </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 bg-surface border-y border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-10">
           <div>
              <div className="text-brand font-mono text-xs mb-4 flex items-center gap-2">
                 <div className="h-px w-8 bg-brand" /> PROFILE
              </div>
              <h2 className="text-5xl md:text-7xl font-black text-white italic uppercase tracking-tighter leading-tight">
                IT GRADUATE <br />
                <span className="text-zinc-400 not-italic">2022–2025.</span>
              </h2>
           </div>
           
           <div className="space-y-6">
              <p className="text-xl text-zinc-400 leading-relaxed font-medium">
                I help enterprises and organizations solve problems with code. My focus is on <span className="text-white underline decoration-brand underline-offset-4">fast, reliable, and user-friendly</span> architectures.
              </p>
              <p className="text-zinc-500 font-medium leading-relaxed">
                From SBBUVAS Learning Management Systems (Django) to high-speed Attendance portals (CodeIgniter), I specialize in systems that reduce administrative friction.
              </p>
           </div>
           
           <div className="flex gap-12">
              <div>
                 <div className="text-4xl font-black text-white">12+</div>
                 <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-1">Deployments</div>
              </div>
              <div>
                 <div className="text-4xl font-black text-white">100%</div>
                 <div className="text-[10px] font-mono text-zinc-600 uppercase tracking-widest mt-1">Commitment</div>
              </div>
           </div>
        </div>
        
        <div className="lg:col-span-5">
           <div className="relative">
              <div className="absolute -inset-4 bg-brand/20 blur-[80px] -z-10" />
              <div className="relative aspect-[4/5] rounded-[3rem] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700">
                <img 
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=600" 
                  alt="Rehman Ali" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 w-full p-8 bg-gradient-to-t from-black/80 to-transparent">
                   <div className="text-xs font-mono text-brand mb-1">DEV_ID_001</div>
                   <div className="text-xl font-bold text-white uppercase tracking-tighter">REHMAN ALI</div>
                </div>
              </div>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Projects = () => (
  <section id="projects" className="py-24 bg-surface">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-20">
        <div>
          <div className="text-brand font-mono text-xs mb-4 flex items-center gap-2">
             <div className="h-px w-8 bg-brand" /> CASE STUDIES
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter leading-tight">Featured <br /> Deployments.</h2>
        </div>
        <p className="text-zinc-500 max-w-sm font-medium mb-2">Detailed looks into systems that delivered measurable impact for academic institutions.</p>
      </div>

      <div className="space-y-32">
        {PROJECTS.map((project, index) => (
          <motion.div 
            key={project.title}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className={`grid lg:grid-cols-2 gap-16 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
          >
            <div className={`relative group`}>
               <div className="absolute -inset-2 bg-brand/20 blur-2xl opacity-0 group-hover:opacity-100 transition-opacity" />
               <div className="relative aspect-[16/10] overflow-hidden rounded-[2.5rem] glass border-white/5">
                 <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover grayscale group-hover:scale-105 group-hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-black/40 group-hover:bg-black/10 transition-colors" />
                  <div className="absolute top-6 left-6 px-4 py-1 glass rounded-full text-[10px] font-black uppercase tracking-widest text-white">PROJECT_{index + 1}</div>
               </div>
            </div>
            
            <div className="space-y-8">
               <h3 className="text-3xl md:text-5xl font-black text-white uppercase tracking-tighter">{project.title}</h3>
               
               <div className="space-y-6">
                  <div className="p-6 glass rounded-2xl border-l-4 border-red-500/50">
                     <div className="text-[10px] font-mono text-red-400 uppercase tracking-widest mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-red-500 rounded-full" /> CRITICAL PROBLEM
                     </div>
                     <p className="text-zinc-400 text-sm italic">"{project.problem}"</p>
                  </div>
                  
                  <div className="p-6 glass rounded-2xl border-l-4 border-brand/50">
                     <div className="text-[10px] font-mono text-brand uppercase tracking-widest mb-2 flex items-center gap-2">
                        <div className="w-1.5 h-1.5 bg-brand rounded-full" /> IMPLEMENTED SOLUTION
                     </div>
                     <p className="text-zinc-300 font-medium">{project.solution}</p>
                  </div>
               </div>

               <div className="flex flex-wrap gap-2">
                 {project.technologies.map(tech => (
                   <span key={tech} className="px-4 py-1 glass rounded-lg text-[10px] font-mono text-zinc-500 uppercase">
                     {tech}
                   </span>
                 ))}
               </div>

               <div className="flex items-center gap-8 pt-4">
                 <a href={project.demo} className="text-xs font-black uppercase tracking-widest text-white border-b-2 border-brand pb-1 flex items-center gap-2 hover:gap-4 transition-all group">
                   Launch System <ExternalLink className="w-4 h-4 group-hover:text-brand transition-colors" />
                 </a>
                 <div className="text-[10px] font-mono text-zinc-600 font-bold uppercase tracking-widest">
                   Status: Deployed
                 </div>
               </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const Services = () => (
  <section id="services" className="py-24 bg-surface border-t border-white/5">
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      <div className="grid lg:grid-cols-2 gap-12 mb-20 items-end">
        <div>
           <div className="text-brand font-mono text-xs mb-4 flex items-center gap-2">
              <div className="h-px w-8 bg-brand" /> CAPABILITIES
           </div>
           <h2 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter">Strategic <br /> Value.</h2>
        </div>
        <p className="text-zinc-500 max-w-sm font-medium mb-2">My services are designed to bridge the gap between complex requirements and production-ready software.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-4">
        {SERVICES.map((service) => (
          <div key={service.title} className="glass p-12 rounded-[2.5rem] group hover:bg-brand transition-all duration-500">
             <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-brand mb-8 group-hover:bg-white group-hover:text-black group-hover:scale-110 transition-all">
                <service.icon className="w-6 h-6" />
             </div>
             <h3 className="text-xl font-bold mb-4 text-white uppercase tracking-tighter group-hover:text-black">{service.title}</h3>
             <p className="text-zinc-500 text-sm leading-relaxed group-hover:text-black/80 font-medium">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Contact = () => (
  <section id="contact" className="py-24 md:py-32 bg-surface grid-pattern relative">
    <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand/5 to-transparent pointer-events-none" />
    <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 text-center lg:text-left">
      <div className="grid lg:grid-cols-2 gap-20">
        <div>
           <div className="text-brand font-mono text-xs mb-4 flex items-center gap-2 justify-center lg:justify-start">
              <div className="h-px w-8 bg-brand" /> INQUIRIES
           </div>
           <h2 className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-[0.85] mb-8 text-center lg:text-left">INITIATE <br /> SESSION.</h2>
           <p className="text-xl text-zinc-400 mb-12 max-w-md font-medium leading-relaxed mx-auto lg:mx-0">
             Facing a technical bottleneck? Let's discuss your system requirements. Response time: &lt; 12 hours.
           </p>
           
           <div className="space-y-6 max-w-md mx-auto lg:mx-0">
              <a href="https://wa.me/923042463163" className="flex items-center gap-6 glass p-6 rounded-3xl group hover:border-brand/40 transition-all text-left">
                 <div className="w-14 h-14 bg-green-500/10 rounded-2xl flex items-center justify-center text-green-500 group-hover:scale-110 group-hover:bg-green-500 group-hover:text-black transition-all shrink-0">
                    <MessageSquare className="w-6 h-6" />
                 </div>
                 <div>
                    <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1 font-mono">Live Chat</div>
                    <div className="text-xl font-bold text-white group-hover:text-brand transition-colors tracking-tighter">03042463163</div>
                 </div>
              </a>
              <a href="mailto:arkorejomorai@gmail.com" className="flex items-center gap-6 glass p-6 rounded-3xl group hover:border-brand/40 transition-all text-left">
                 <div className="w-14 h-14 bg-brand/10 rounded-2xl flex items-center justify-center text-brand group-hover:scale-110 group-hover:bg-brand group-hover:text-black transition-all shrink-0">
                    <Send className="w-6 h-6" />
                 </div>
                 <div>
                    <div className="text-[10px] text-zinc-500 font-black uppercase tracking-widest mb-1 font-mono">Direct SMTP</div>
                    <div className="text-sm md:text-xl font-bold text-white group-hover:text-brand transition-colors tracking-tighter break-all">arkorejomorai@gmail.com</div>
                 </div>
              </a>
           </div>
        </div>
        
        <div className="glass p-8 md:p-14 rounded-[3rem] border-white/5 relative text-left">
           <div className="absolute top-8 right-8 text-[10px] font-mono text-zinc-700 hidden md:block">SRVR_US_01</div>
           <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-2">
                 <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest font-mono">Identification</label>
                 <input type="text" placeholder="YOUR NAME" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-sm text-white focus:ring-1 focus:ring-brand focus:border-brand transition-all font-bold placeholder:text-zinc-700" />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest font-mono">Network Handle</label>
                 <input type="email" placeholder="YOUR@EMAIL.COM" className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-sm text-white focus:ring-1 focus:ring-brand focus:border-brand transition-all font-bold placeholder:text-zinc-700" />
              </div>
              <div className="space-y-2">
                 <label className="text-[10px] font-black text-zinc-500 uppercase tracking-widest font-mono">Mission Details</label>
                 <textarea rows={4} placeholder="DESCRIBE YOUR PROJECT..." className="w-full bg-white/5 border border-white/5 rounded-2xl px-6 py-5 text-sm text-white focus:ring-1 focus:ring-brand focus:border-brand transition-all font-bold placeholder:text-zinc-700 resize-none"></textarea>
              </div>
              <button className="w-full bg-brand text-black py-6 rounded-2xl font-black uppercase tracking-[0.2em] text-sm flex items-center justify-center gap-4 hover:tracking-[0.3em] transition-all shadow-[0_0_50px_rgba(59,130,246,0.3)] group">
                Establish Contact <Send className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
           </form>
           <div className="flex justify-between mt-10">
              <div className="flex gap-1">
                 {[...Array(4)].map((_, i) => <div key={i} className="w-1 h-1 bg-zinc-800 rounded-full" />)}
              </div>
              <p className="text-[9px] text-zinc-800 font-mono italic">{"// encrypted_tunnel_ready"}</p>
           </div>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="py-16 bg-surface border-t border-white/5 overflow-hidden relative">
     <div className="absolute top-0 right-0 text-[15rem] font-black text-white/[0.02] leading-none select-none translate-y-1/4 translate-x-1/4 italic tracking-tighter">REHMAN_ALI</div>
     
     <div className="max-w-7xl mx-auto px-4 md:px-6 relative z-10 flex flex-col md:flex-row justify-between items-start md:items-center gap-12">
        <div className="space-y-4">
           <div className="text-3xl font-black tracking-[-0.06em] text-white">
             REHMAN<span className="text-zinc-600">ALI</span>
           </div>
           <p className="text-xs text-zinc-600 font-bold uppercase tracking-widest">Full Stack Architecture_</p>
        </div>
        
        <div className="flex flex-wrap gap-10">
           <div className="space-y-4">
              <div className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Sitemap</div>
              <div className="flex flex-col gap-2">
                 <a href="#about" className="text-xs text-zinc-600 hover:text-brand transition-colors font-bold uppercase tracking-tighter">Profile</a>
                 <a href="#projects" className="text-xs text-zinc-600 hover:text-brand transition-colors font-bold uppercase tracking-tighter">Works</a>
                 <a href="#services" className="text-xs text-zinc-600 hover:text-brand transition-colors font-bold uppercase tracking-tighter">Stack</a>
                 <a href="#contact" className="text-xs text-zinc-600 hover:text-brand transition-colors font-bold uppercase tracking-tighter">Contact</a>
              </div>
           </div>
           <div className="space-y-4">
              <div className="text-[10px] font-black text-zinc-300 uppercase tracking-widest">Connect</div>
              <div className="flex flex-col gap-2">
                 <a href="#" className="text-xs text-zinc-600 hover:text-brand transition-colors font-bold uppercase tracking-tighter">GitHub</a>
                 <a href="#" className="text-xs text-zinc-600 hover:text-brand transition-colors font-bold uppercase tracking-tighter">LinkedIn</a>
                 <a href="#" className="text-xs text-zinc-600 hover:text-brand transition-colors font-bold uppercase tracking-tighter">Twitter</a>
              </div>
           </div>
        </div>
        
        <div className="text-right flex flex-col items-end">
           <div className="glass p-4 rounded-2xl text-[9px] font-mono text-zinc-500 max-w-[200px] leading-relaxed">
              {"{ status: 'production', v: '2.0.4', build: '2026-05-04' }"}
           </div>
           <div className="mt-6 text-[10px] text-zinc-700 font-bold uppercase tracking-widest text-right">
             © {new Date().getFullYear()} REHMAN ALI. <br /> All rights reserved.
           </div>
        </div>
     </div>
  </footer>
);

export default function App() {
  return (
    <div className="min-h-screen bg-surface font-sans text-white selection:bg-brand selection:text-black scroll-smooth antialiased">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Services />
        <Contact />
      </main>
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
