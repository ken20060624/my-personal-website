import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Github,
  Linkedin,
  Mail,
  ExternalLink,
  Code,
  User,
  Briefcase,
  MessageSquare,
  Menu,
  X,
  ChevronRight,
  Download
} from 'lucide-react';
import { personalInfo } from './config';
import profileImg from './assets/profile.jpg';

// --- Shared Components ---

const SectionHeading = ({ children, subtitle }) => (
  <div className="mb-12 text-center">
    <motion.h2
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-3xl md:text-4xl font-bold text-white mb-4"
    >
      {children}
    </motion.h2>
    {subtitle && (
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className="text-slate-400 max-w-2xl mx-auto"
      >
        {subtitle}
      </motion.p>
    )}
    <motion.div
      initial={{ width: 0 }}
      whileInView={{ width: "80px" }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, duration: 0.8 }}
      className="h-1 bg-indigo-500 mx-auto mt-4 rounded-full"
    />
  </div>
);

// --- Main Application ---

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: '關於我', href: '#about', icon: <User size={18} /> },
    { name: '技能', href: '#skills', icon: <Code size={18} /> },
    { name: '專案作品', href: '#projects', icon: <Briefcase size={18} /> },
    { name: '聯絡我', href: '#contact', icon: <MessageSquare size={18} /> },
  ];

  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'glass py-4 shadow-lg' : 'bg-transparent py-6'}`}>
        <div className="container mx-auto px-6 flex justify-between items-center">
          <motion.a
            href="#"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-2xl font-bold text-gradient"
          >
            {personalInfo.name}.
          </motion.a>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-slate-300 hover:text-indigo-400 transition-colors flex items-center gap-2 text-sm font-medium"
              >
                {link.name}
              </a>
            ))}
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-5 py-2 rounded-full bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              與我聯絡
            </motion.a>
          </div>

          {/* Mobile Menu Toggle */}
          <button className="md:hidden text-white" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </div>

        {/* Mobile Nav Menu */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-[#0f172a] border-t border-slate-800"
            >
              <div className="flex flex-col p-6 space-y-4">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="text-slate-300 hover:text-indigo-400 flex items-center gap-3 text-lg"
                  >
                    {link.icon} {link.name}
                  </a>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/3 h-1/3 bg-indigo-500/10 blur-[120px] -z-10 rounded-full" />
        <div className="absolute bottom-0 left-0 w-1/4 h-1/4 bg-blue-500/10 blur-[100px] -z-10 rounded-full" />

        <div className="container mx-auto px-6 text-center md:text-left flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="md:w-3/5">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-indigo-400 font-medium mb-4 tracking-wider uppercase text-sm">歡迎來到我的個人世界</h2>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white mb-6 leading-tight">
                嗨，我是 <span className="text-gradient">{personalInfo.name}</span>
              </h1>
              <p className="text-xl text-slate-400 mb-8 max-w-2xl leading-relaxed">
                {personalInfo.role}。{personalInfo.bio}
              </p>

              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <motion.a
                  whileHover={{ y: -5 }}
                  href="#projects"
                  className="px-8 py-3 rounded-xl bg-indigo-600 text-white font-semibold flex items-center gap-2 shadow-lg shadow-indigo-600/25"
                >
                  查看作品 <ChevronRight size={18} />
                </motion.a>
                <motion.a
                  whileHover={{ y: -5 }}
                  href={personalInfo.github}
                  target="_blank"
                  className="px-8 py-3 rounded-xl glass text-white font-semibold flex items-center gap-2"
                >
                  GitHub
                </motion.a>
              </div>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="md:w-2/5 flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden glass p-2 rotate-3 hover:rotate-0 transition-transform duration-500">
                <img
                  src={profileImg}
                  alt="Avatar"
                  className="w-full h-full object-cover rounded-2xl"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 glass p-4 rounded-2xl shadow-xl animate-bounce">
                <div className="flex items-center gap-3">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-medium text-white italic">開放合作中</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="關於我的成長歷程與持續前進的動力。">
            關於我
          </SectionHeading>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <p className="text-slate-300 leading-relaxed text-lg">
                我是一名學習網頁應用的軟體工程師，專注於使用者體驗與簡潔的架構設計。
              </p>
              <p className="text-slate-300 leading-relaxed text-lg">
                我的開發理念結合了技術上的嚴謹與創意解決問題的能力。無論是使用 Framer Motion 打造精緻的動畫，還是建構穩健的雲端架構，我均享受迎接各種複雜挑戰的過程。
              </p>
              <div className="grid grid-cols-2 gap-6 pt-4">
                <div className="glass p-4 rounded-xl text-center">
                  <span className="block text-3xl font-bold text-indigo-400">大一</span>
                  <span className="text-sm text-slate-400">在學學生</span>
                </div>
                <div className="glass p-4 rounded-xl text-center">
                  <span className="block text-3xl font-bold text-indigo-400">多項</span>
                  <span className="text-sm text-slate-400">實戰專案</span>
                </div>
              </div>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="h-48 rounded-2xl bg-indigo-500/20 flex items-center justify-center border border-indigo-500/30"
                >
                  <Code className="text-indigo-400" size={48} />
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="h-32 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700"
                >
                  <a href={`mailto:${personalInfo.secondaryEmail}`}><Mail className="text-blue-400" size={32} /></a>
                </motion.div>
              </div>
              <div className="space-y-4 pt-8">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="h-32 rounded-2xl bg-slate-800 flex items-center justify-center border border-slate-700"
                >
                  <a href={personalInfo.github} target="_blank"><Github className="text-white" size={32} /></a>
                </motion.div>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="h-48 rounded-2xl bg-blue-500/20 flex items-center justify-center border border-blue-500/30"
                >
                  <MessageSquare className="text-blue-400" size={48} />
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="我所掌握的技術與工具，將構思轉化為現實。">
            技術技能
          </SectionHeading>

          <div className="max-w-4xl mx-auto space-y-8">
            {personalInfo.skills.map((skill, index) => (
              <div key={skill.name}>
                <div className="flex justify-between mb-2">
                  <span className="font-semibold text-white">{skill.name}</span>
                  <span className="text-indigo-400">{skill.level}%</span>
                </div>
                <div className="h-3 bg-slate-800 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${skill.level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-indigo-600 rounded-full shadow-[0_0_15px_rgba(79,70,229,0.5)]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-24 bg-slate-900/50">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="展示我近期最引以為傲的開源專案與實作。">
            精選作品
          </SectionHeading>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {personalInfo.projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group glass rounded-3xl overflow-hidden h-full flex flex-col"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-indigo-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <motion.a
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      href={project.link}
                      className="p-4 bg-white rounded-full text-indigo-900"
                    >
                      <ExternalLink size={24} />
                    </motion.a>
                  </div>
                </div>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
                  <p className="text-slate-400 mb-6 flex-grow">{project.description}</p>
                  <div className="flex flex-wrap gap-2 text-xs font-semibold text-indigo-400">
                    {project.tech.map(t => (
                      <span key={t} className="px-3 py-1 rounded-lg bg-indigo-500/10 border border-indigo-500/20">{t}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24">
        <div className="container mx-auto px-6">
          <SectionHeading subtitle="讓我們攜手打造精彩的作品！您可以透過下表與我聯絡。">
            與我聯絡
          </SectionHeading>

          <div className="max-w-5xl mx-auto flex flex-col md:flex-row gap-12">
            <div className="md:w-1/3 space-y-8">
              <div className="glass p-8 rounded-3xl">
                <h4 className="text-xl font-bold text-white mb-6">聯絡資訊</h4>
                <div className="space-y-6">
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="block text-slate-400 text-xs">Email 1</span>
                      <span className="text-white font-medium">{personalInfo.email}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-indigo-500/10 flex items-center justify-center text-indigo-500 border border-indigo-500/20 group-hover:bg-indigo-500 group-hover:text-white transition-all">
                      <Mail size={20} />
                    </div>
                    <div>
                      <span className="block text-slate-400 text-xs">Email 2</span>
                      <span className="text-white font-medium">{personalInfo.secondaryEmail}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="md:w-2/3">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">姓名</label>
                    <input
                      type="text"
                      placeholder="您的姓名"
                      className="w-full px-6 py-4 rounded-2xl glass focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white placeholder:text-slate-600 shadow-inner"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-300 ml-1">電子郵件</label>
                    <input
                      type="email"
                      placeholder="您的電子郵件"
                      className="w-full px-6 py-4 rounded-2xl glass focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white placeholder:text-slate-600 shadow-inner"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-300 ml-1">訊息內容</label>
                  <textarea
                    rows="6"
                    placeholder="告訴我您的想法或是合作計畫..."
                    className="w-full px-6 py-4 rounded-2xl glass focus:outline-none focus:ring-2 focus:ring-indigo-500 transition-all text-white placeholder:text-slate-600 shadow-inner resize-none"
                  ></textarea>
                </div>
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-4 rounded-2xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold shadow-xl shadow-indigo-600/20 transition-all flex items-center justify-center gap-2"
                >
                  送出訊息 <ChevronRight size={18} />
                </motion.button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-slate-800 bg-slate-900">
        <div className="container mx-auto px-6 text-center">
          <div className="text-2xl font-bold text-gradient mb-6">{personalInfo.name}。</div>
          <div className="flex justify-center gap-6 mb-8">
            <a href={personalInfo.github} target="_blank" className="p-3 glass rounded-xl text-slate-400 hover:text-white transition-all"><Github size={20} /></a>
            <a href={`mailto:${personalInfo.email}`} className="p-3 glass rounded-xl text-slate-400 hover:text-white transition-all"><Mail size={20} /></a>
            <a href={`mailto:${personalInfo.secondaryEmail}`} className="p-3 glass rounded-xl text-slate-400 hover:text-white transition-all"><Mail size={20} /></a>
          </div>
          <p className="text-slate-500 text-sm">
            © {new Date().getFullYear()} {personalInfo.name}. 保留所有權利。
          </p>
        </div>
      </footer>
    </div>
  );
}
