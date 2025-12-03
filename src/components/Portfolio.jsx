import React, { useState, useEffect, useRef } from "react";
import { Mail, Github, Linkedin, DownloadCloud, Instagram, Twitter } from "lucide-react";
import { motion } from "framer-motion";

// Contact Info
const CONTACT = {
  name: "Rithwik Srivastav",
  phone: "+91 8309824929",
  email: "rithwiksrivastav91@gmail.com",
  github: "https://github.com/rithwiksrivastav4",
  linkedin: "https://www.linkedin.com/in/rithwik-srivastav-152548323",
  instagram: "https://www.instagram.com/rithwiksrivastav9/",
  snapchat: "https://www.snapchat.com/add/rithwiksrivas21?share_id=py7Aksugy7I&locale=en-IN",
  x: "https://x.com/rithwiksri534",
  resume: "/Rithwik_devops_engineer.pdf",
};

// Data (skills, projects, education, internships, certificates)
const SKILL_LOGOS = [
  { name: "Ansible", src: "/logos/ansible.svg" },
  { name: "ArgoCD", src: "/logos/argocd.svg" },
  { name: "Azure DevOps", src: "/logos/azuredevops.svg" },
  { name: "Azure", src: "/logos/azure.svg" },
  { name: "Bash", src: "/logos/bash.svg" },
  { name: "Bootstrap", src: "/logos/bootstrap.svg" },
  { name: "CSS3", src: "/logos/css3.svg" },
  { name: "Docker", src: "/logos/docker.svg" },
  { name: "GitHub Actions", src: "/logos/githubactions.svg" },
  { name: "GitHub", src: "/logos/github.svg" },
  { name: "Git", src: "/logos/git.svg" },
  { name: "Grafana", src: "/logos/grafana.svg" },
  { name: "Helm", src: "/logos/helm.svg" },
  { name: "HTML5", src: "/logos/html5.svg" },
  { name: "Jenkins", src: "/logos/jenkins.svg" },
  { name: "JavaScript", src: "/logos/javascript.svg" },
  { name: "Kubernetes", src: "/logos/kubernetes.svg" },
  { name: "Linux", src: "/logos/linux.svg" },
  { name: "MySQL", src: "/logos/mysql.svg" },
  { name: "Nginx", src: "/logos/nginx.svg" },
  { name: "Prometheus", src: "/logos/prometheus.svg" },
  { name: "Python", src: "/logos/python.svg" },
  { name: "PowerShell", src: "/logos/powershell.svg" },
  { name: "SonarQube", src: "/logos/sonarqube.svg" },
  { name: "Ubuntu", src: "/logos/ubuntu.svg" },
  { name: "VS Code", src: "/logos/vscode.svg" },
  { name: "YAML", src: "/logos/yaml.svg" },
  { name: "Django", src: "/logos/django.svg" },
  { name: "Terraform", src: "/logos/terraform.svg" },
];

const PROJECTS = [
  { title: "Multi-cloud Deployment (Terraform)", desc: "Automated infrastructure provisioning across AWS and Azure using Terraform for scalability and consistency.", tags:["Terraform","AWS","Azure"]},
  { title: "Kubernetes Cluster Deployment", desc: "Provisioned a production-ready Kubernetes cluster using Terraform and Ansible.", tags:["Kubernetes","Ansible"]},
  { title: "Spring Boot on Kubernetes", desc: "Containerized a Spring Boot app with a multi-stage Dockerfile and deployed it on Kubernetes with autoscaling and rolling updates.", tags:["Docker","Kubernetes","CI/CD"]},
  { title: "Microservices (Python)", desc: "Built & deployed 5 containerized microservices with load balancing and persistent volumes on Kubernetes.", tags:["Microservices","Docker","Terraform"]},
  { title: "Ansible Automation (Java & React)", desc: "Automated Java and React app deployments using Ansible playbooks for repeatable, reliable releases.", tags:["Ansible","Automation"]},
  { title: "CI/CD with GitHub Actions", desc: "Designed GitHub Actions pipelines for automated testing, Docker builds, and Kubernetes deployments.", tags:["CI/CD","GitHub Actions","Docker"]},
  { title: "Monitoring with Prometheus & Grafana", desc: "Set up application and infrastructure monitoring with Prometheus metrics and Grafana dashboards.", tags:["Prometheus","Grafana","Monitoring"]},
];

const EDUCATION = [
  { school: "Trinity College of Engineering and Technology", degree: "B.Tech — CSE", year:"2020 – 2024", score:"CGPA: 7.31" },
  { school: "Sri Venkateshwera Junior College", degree: "Senior Secondary (12th)", score:"Score: 91.5%" },
  { school: "Brilliant Model High School", degree: "Secondary (10th)", score:"Score: 90%" },
];

const INTERNSHIPS = [
  { company:"VCUBE Software Solutions", role:"DevOps Intern", duration:"Mar 2025 – Apr 2025",
    work: [
      "Worked on Kubernetes, Docker, Jenkins, Terraform, and Ansible.",
      "Implemented CI/CD pipelines for automated deployments.",
      "Deployed and monitored microservices on cloud environments.",
    ], }
];

const CERTIFICATES = [
  { name: "AWS Scaler", src: "/certs/aws.png" },
  { name: "MySql", src: "/certs/mysql.png" },
  { name: "problem_solving_basic", src: "/certs/problem_solving_basic certificate.jpg" },
  { name: "PYTHON ASSIGNMENT", src: "/certs/PYTHON ASSIGNMENT.png" },
  { name: "python_basic", src: "/certs/python_basic certificate.jpg" },
  { name: "python_scaler", src: "/certs/python.png" },
  { name: "sql_basic_HackerRank", src: "/certs/sql_basic certificate.jpg" },
  { name: "sql_intermediate_HackerRank", src: "/certs/sql_intermediate certificate.jpg" },
];

export default function Portfolio() {
  // theme + UI state
  const [theme, setTheme] = useState("dark");
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showThemeToggle, setShowThemeToggle] = useState(false);

  // certificates modal state
  const [certModalOpen, setCertModalOpen] = useState(false);
  const [activeCert, setActiveCert] = useState(null);

  // 3D carousel state
  const [current3DIndex, setCurrent3DIndex] = useState(0);
  const [rotateDeg, setRotateDeg] = useState(0);
  const [autoRotateRunning, setAutoRotateRunning] = useState(true);
  const carouselRef = useRef(null);

  // additional features requested
  const [zoomingIndex, setZoomingIndex] = useState(null);
  const [carouselRadius, setCarouselRadius] = useState(520);
  const ROTATE_INTERVAL = 7000; // 7s per card (slower)

  // derived values
  const totalCerts = CERTIFICATES.length;
  const angleStep = totalCerts > 0 ? (360 / totalCerts) : 0;

  // detect touch devices
  const isTouch = typeof window !== 'undefined' && (('ontouchstart' in window) || (typeof navigator !== 'undefined' && navigator.maxTouchPoints && navigator.maxTouchPoints > 0));

  // persist theme to localStorage and apply on load
  useEffect(()=>{
    try{
      const saved = localStorage.getItem('site-theme');
      if(saved) setTheme(saved);
    }catch(e){}
  },[]);

  useEffect(()=>{
    if(theme==="dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
    try{ localStorage.setItem('site-theme', theme); }catch(e){}
  },[theme]);

  // show theme toggle on scroll
  useEffect(()=>{
    const onScroll = () => {
      setShowThemeToggle(window.scrollY > 80);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return ()=> window.removeEventListener('scroll', onScroll);
  },[]);

  // compute responsive radius
  useEffect(() => {
    const updateRadius = () => {
      const w = typeof window !== 'undefined' ? window.innerWidth : 1200;
      // smaller radius than before to keep cards closer when we reduced size
      setCarouselRadius(w < 768 ? 300 : 520);
    };
    updateRadius();
    window.addEventListener('resize', updateRadius);
    return () => window.removeEventListener('resize', updateRadius);
  }, []);

  // update rotation when index changes
  useEffect(()=>{
    setRotateDeg(-angleStep * current3DIndex);
  },[current3DIndex, angleStep]);

  // Robust auto-rotate effect
  useEffect(() => {
    if (!autoRotateRunning || totalCerts === 0) return undefined;

    const tick = () => {
      setCurrent3DIndex(prev => {
        const next = (prev + 1) % totalCerts;
        setRotateDeg(-angleStep * next);
        return next;
      });
    };

    const id = setInterval(tick, ROTATE_INTERVAL);

    return () => clearInterval(id);
  }, [autoRotateRunning, totalCerts, angleStep]);

  // close mobile on resize > md
  useEffect(()=>{
    const onResize = () => { if(window.innerWidth >= 768) setMobileOpen(false); };
    window.addEventListener('resize', onResize);
    return ()=> window.removeEventListener('resize', onResize);
  },[]);

  // Contact form handled via mailto (progressive enhancement)
  const handleSubmitMail = (e) => {
    e.preventDefault();
    try {
      const form = e.target;
      const subject = encodeURIComponent(form.subject?.value || "Contact via portfolio");
      const body = encodeURIComponent(form.body?.value || "");
      window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
    } catch (err) {
      console.error("Contact form submit failed:", err);
    }
  };

  // helper functions for certificates modal
  const openCert = (index) => { setActiveCert(CERTIFICATES[index]); setCertModalOpen(true); };
  const closeCert = () => { setCertModalOpen(false); setActiveCert(null); };

  // click-to-zoom before opening modal
  const handleCardClick = (index) => {
    setZoomingIndex(index);
    setAutoRotateRunning(false);
    setCurrent3DIndex(index);
    setRotateDeg(-angleStep * index);
    setTimeout(() => {
      setZoomingIndex(null);
      openCert(index);
    }, 300);
  };

  // helpers for theme-aware classes
  const glowClass = theme==="dark" ? "shadow-[0_0_16px_rgba(99,102,241,0.9)]" : "shadow-[0_0_10px_rgba(59,130,246,0.25)]";
  const cardBg = theme==="dark" ? "bg-black/20" : "bg-white";

  // pause/resume auto-rotate safely
  const pauseAutoRotate = () => setAutoRotateRunning(false);
  const resumeAutoRotate = () => setAutoRotateRunning(true);

  // rotate transform applied to outer carousel element
  const carouselStyle = { transform: `translate(-50%,-50%) rotateY(${rotateDeg}deg)` };

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-black text-gray-900 dark:text-slate-100 antialiased">
      {/* theme toggle */}
      <motion.button
        aria-label="toggle theme"
        onClick={()=>setTheme(t=>t==="dark"?"light":"dark")}
        className="fixed right-4 z-50 px-3 py-2 rounded-full bg-gray-200 dark:bg-slate-800 hover:scale-105 transition"
        initial={{ y: -80, opacity: 0 }}
        animate={ showThemeToggle ? { y: 0, opacity: 1 } : { y: -80, opacity: 0 } }
        transition={{ type: 'spring', stiffness: 120, damping: 18 }}
      >
        {theme==="dark" ? "🌙" : "☀️"}
      </motion.button>

      <header className="max-w-6xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">
            RS
          </div>
          <div>
            <div className="font-semibold text-gray-900 dark:text-slate-100">{CONTACT.name}</div>
            <div className="text-xs text-gray-600 dark:text-slate-400">DevOps / Cloud Engineer</div>
          </div>
        </div>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-3 text-sm">
          <a href="#projects" className="hover:underline">Projects</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#education" className="hover:underline">Education</a>
          <a href="#internship" className="hover:underline">Internship</a>
          <a href="#certificates" className="hover:underline">Certificates</a>
          <a href="#contact" className="hover:underline">Reach Me</a>
          <a href={CONTACT.resume} download className="ml-3 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-white text-sm shadow-md">
            <DownloadCloud size={16}/> Resume
          </a>
        </nav>

        {/* Mobile menu button */}
        <div className="md:hidden flex items-center gap-2">
          <button onClick={()=>setMobileOpen(o=>!o)} aria-label="toggle menu" className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 border">
            <span className={`block w-5 h-[2px] bg-gray-800 dark:bg-slate-200 transition-transform ${mobileOpen? 'rotate-45 translate-y-1.5' : ''}`}></span>
            <span className={`block w-5 h-[2px] bg-gray-800 dark:bg-slate-200 my-1 transition-opacity ${mobileOpen? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-[2px] bg-gray-800 dark:bg-slate-200 transition-transform ${mobileOpen? '-rotate-45 -translate-y-1.5' : ''}`}></span>
          </button>
        </div>

        {/* Mobile nav overlay */}
        {mobileOpen && (
          <div className="fixed inset-0 z-40 flex">
            <div className="w-full max-w-xs bg-white dark:bg-slate-900 border-r border-slate-200 dark:border-slate-800 p-6">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold">RS</div>
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-slate-100">{CONTACT.name}</div>
                    <div className="text-xs text-gray-600 dark:text-slate-400">DevOps / Cloud Engineer</div>
                  </div>
                </div>
                <button onClick={()=>setMobileOpen(false)} aria-label="close menu" className="p-2 rounded-md bg-gray-100 dark:bg-slate-800 border">✕</button>
              </div>

              <nav className="mt-6 flex flex-col gap-3 text-sm">
                <a href="#projects" onClick={()=>setMobileOpen(false)} className="py-2">Projects</a>
                <a href="#skills" onClick={()=>setMobileOpen(false)} className="py-2">Skills</a>
                <a href="#education" onClick={()=>setMobileOpen(false)} className="py-2">Education</a>
                <a href="#internship" onClick={()=>setMobileOpen(false)} className="py-2">Internship</a>
                <a href="#certificates" onClick={()=>setMobileOpen(false)} className="py-2">Certificates</a>
                <a href="#contact" onClick={()=>setMobileOpen(false)} className="py-2">Reach Me</a>
                <a href={CONTACT.resume} download onClick={()=>setMobileOpen(false)} className="mt-3 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-white text-sm shadow-md">
                  <DownloadCloud size={16}/> Resume
                </a>
              </nav>

              <div className="mt-6 text-sm text-gray-600 dark:text-slate-400">
                <div><strong>Email:</strong> <a href={`mailto:${CONTACT.email}`} className="text-indigo-600 dark:text-indigo-300">{CONTACT.email}</a></div>
                <div className="mt-2"><strong>Phone:</strong> <span>{CONTACT.phone}</span></div>
              </div>

            </div>
            <div className="flex-1" onClick={()=>setMobileOpen(false)} />
          </div>
        )}

      </header>

      <main className="max-w-6xl mx-auto px-6 pb-16">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center mt-6">
          <motion.div initial={{opacity:0, x:-80}} animate={{opacity:1, x:0}} transition={{duration:0.8}} className="space-y-6">
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi — I’m <span className="text-indigo-600 dark:text-indigo-400">{CONTACT.name}</span>.
              <br/> I build scalable cloud & DevOps solutions.
            </h1>
            <p className="text-gray-700 dark:text-slate-300 max-w-xl">DevOps & Cloud Engineer with hands-on experience in deploying, managing, and scaling applications on AWS and Azure.</p>
            <div className="flex flex-wrap gap-3">
              <a href={CONTACT.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-slate-800 border"><Github size={16}/> GitHub</a>
              <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-gray-100 dark:bg-slate-800 border"><Linkedin size={16}/> LinkedIn</a>
              <a href={`mailto:${CONTACT.email}`} className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-indigo-600 text-white"><Mail size={16}/> Email</a>
            </div>
          </motion.div>

          <motion.div initial={{opacity:0, x:120}} animate={{opacity:1, x:0}} transition={{duration:1}} className={`flex justify-center ${glowClass}`}>
            <motion.img src="/myimage.png" alt="profile" className="rounded-2xl border-4 border-indigo-500 max-h-[420px] object-cover w-full md:w-auto"
              initial={{opacity:0, x:-200}} animate={{opacity:1, x:0, y:[0,-8,0]}} transition={{opacity:{duration:0.9}, x:{duration:1}, y:{duration:4, repeat:Infinity}}}
            />
          </motion.div>
        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((p,i)=>( 
              <motion.article key={p.title} whileHover={{scale:1.02}} animate={{ boxShadow: theme==="dark" ? "0 0 18px rgba(99,102,241,0.9)" : "0 0 12px rgba(59,130,246,0.25)" }} transition={{duration:3, repeat:Infinity, delay:i*0.6, ease:"easeInOut"}} className={`rounded-xl border p-5 ${cardBg} border-slate-300`}>
                <h3 className="font-semibold text-lg text-gray-900 dark:text-slate-100">{p.title}</h3>
                <p className="mt-2 text-sm text-gray-700 dark:text-slate-300">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map(t=> <span key={t} className="text-xs px-2 py-1 rounded bg-gray-100 dark:bg-slate-700 text-gray-800 dark:text-slate-200">{t}</span>)}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-12">
          <h2 className="text-2xl font-bold">Skills & Tools</h2>
          <div className="mt-6 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {SKILL_LOGOS.map((s,i)=>( 
              <motion.div key={s.name} whileHover={{scale:1.08, rotate:360}} animate={{boxShadow: theme==="dark" ? "0 0 18px rgba(99,102,241,0.9)" : "0 0 12px rgba(59,130,246,0.25)"}} transition={{duration:3, repeat:Infinity, delay:i*0.15}} className={`flex items-center gap-3 p-3 rounded-xl border ${cardBg} border-slate-300`}>
                <img src={s.src} alt={s.name} className="h-8 w-8 object-contain"/>
                <span className="text-sm font-medium text-gray-900 dark:text-slate-100">{s.name}</span>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mt-12">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="mt-6 space-y-4">
            {EDUCATION.map(e=>(
              <motion.div key={e.school} initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} transition={{duration:0.9}} className={`rounded-lg p-4 border ${cardBg} border-slate-300`}>
                <h3 className="font-semibold text-gray-900 dark:text-slate-100">{e.school}</h3>
                <p className="text-sm text-gray-700 dark:text-slate-300">{e.degree}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{e.year} — {e.score}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Internship */}
        <section id="internship" className="mt-12">
          <h2 className="text-2xl font-bold">Internship</h2>
          <div className="mt-6 space-y-4">
            {INTERNSHIPS.map(intern=>(
              <motion.div key={intern.company} initial={{opacity:0,y:60}} whileInView={{opacity:1,y:0}} transition={{duration:0.9}} className={`rounded-lg p-4 border ${cardBg} border-slate-300`}>
                <h3 className="font-semibold text-gray-900 dark:text-slate-100">{intern.role} — {intern.company}</h3>
                <p className="text-sm text-gray-700 dark:text-slate-300">{intern.duration}</p>
                <ul className="text-xs text-gray-500 dark:text-gray-400 list-disc list-inside mt-2">
                  {intern.work.map((w,i)=>(<li key={i}>{w}</li>))}
                </ul>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Certificates */}
        <section id="certificates" className="mt-12">
          <h2 className="text-2xl font-bold">Certificates</h2>

          <style>{`
            .cert-3d-wrapper {
              width:100%;
              height:420px;
              position:relative;
              perspective:1600px;
              margin-top:60px;
              padding-top: 24px;
              overflow:visible;
            }
            .cert-3d-carousel {
              width:100%;
              height:100%;
              position:absolute;
              left:50%;
              top:50%;
              transform-style:preserve-3d;
              transform: translate(-50%,-50%) rotateY(0deg);
              transition: transform 900ms cubic-bezier(.22,.9,.2,1);
            }
            .cert-3d-item {
              width:220px;
              height:300px;
              position:absolute;
              left:50%;
              top:50%;
              transform-style:preserve-3d;
              transform-origin:center;
              border-radius:14px;
              overflow:hidden;
              transition: transform 420ms ease, box-shadow 420ms ease, opacity 420ms ease, filter 420ms ease;
              will-change: transform, opacity;
            }
            .cert-3d-item img { width:100%; height:100%; object-fit:cover; display:block; }
            .cert-3d-item.active { z-index:60; box-shadow: 0 36px 100px rgba(99,102,241,0.6); filter: contrast(1.04) saturate(1.05); }
            .cert-3d-item.side { box-shadow: 0 12px 40px rgba(0,0,0,0.16); filter: blur(0.8px) saturate(0.98); opacity:0.9; }
            .cert-3d-item.hidden { opacity:0.12; filter: blur(2px) saturate(0.9) brightness(0.9); pointer-events: none; }
            .cert-3d-item.zooming { transition: transform 260ms ease; box-shadow: 0 48px 140px rgba(99,102,241,0.72); }
            .cert-3d-item::after {
              content: "";
              position: absolute;
              left: 50%;
              bottom: -18px;
              width: 70%;
              height: 18px;
              transform: translateX(-50%) scaleX(1);
              border-radius: 9999px;
              background: radial-gradient(ellipse at center, rgba(0,0,0,0.35), rgba(0,0,0,0.08));
              filter: blur(10px);
              opacity: 0.9;
              transition: opacity 240ms ease, transform 240ms ease;
              pointer-events: none;
            }
            .cert-nav { position: absolute; top:50%; left:0; right:0; display:flex; justify-content:space-between; transform:translateY(-50%); pointer-events:none; padding:0 12px; }
            .cert-nav button { pointer-events:auto; background: rgba(0,0,0,0.45); color:#fff; border:none; width:44px; height:44px; border-radius:9999px; display:flex; align-items:center; justify-content:center; margin:0 8px; backdrop-filter: blur(6px); }
            .cert-indicator { margin-top:12px; text-align:center; color: rgba(148,163,184,1); }
            .dark .cert-3d-item.active { box-shadow: 0 48px 140px rgba(99,102,241,0.75); }
            .dark .cert-nav button { background: rgba(255,255,255,0.06); color: #fff; }
            @media (max-width: 1024px) { .cert-3d-wrapper { height:380px; margin-top:48px; padding-top:18px; } .cert-3d-item { width:190px; height:270px; } }
            @media (max-width: 768px) { .cert-3d-wrapper { height:320px; margin-top:38px; padding-top:12px; } .cert-3d-item { width:140px; height:210px; } }
            @media (prefers-reduced-motion: reduce) { .cert-3d-carousel { transition: none !important; } }
          `}</style>

          <div
            className="cert-3d-wrapper"
            onMouseEnter={() => { pauseAutoRotate(); }}
            onMouseLeave={() => { resumeAutoRotate(); }}
          >
            <div
              className="cert-3d-carousel"
              ref={carouselRef}
              style={carouselStyle}
            >
              {CERTIFICATES.map((c, i) => {
                const total = CERTIFICATES.length;
                const angle = (360 / total) * i;
                const radius = carouselRadius;
                // compute shortest difference around circle
                const diff = Math.abs(i - current3DIndex);
                const distance = Math.min(diff, total - diff);

                // decide scale: active gets large scale, others 1
                const scale = (i === current3DIndex) ? 1.18 : 1.0; // reduced center scale

                // translate center first (keeps perfect centering), then rotate+push out, then scale
                const transformStr = `translate(-50%,-50%) rotateY(${angle}deg) translateZ(${radius}px) scale(${scale})`;

                const cls = `${i === current3DIndex ? 'cert-3d-item active' : (distance <= 1 ? 'cert-3d-item side' : 'cert-3d-item hidden')} ${zoomingIndex === i ? 'zooming' : ''}`;

                return (
                  <div
                    key={i}
                    className={cls}
                    style={{ transform: transformStr }}
                    onClick={() => { handleCardClick(i); }}
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => { if(e.key === 'Enter') handleCardClick(i); }}
                    aria-label={`Open certificate ${c.name}`}
                  >
                    <img src={c.src} alt={c.name} />
                  </div>
                );
              })}
            </div>

            <div className="cert-nav">
              <button aria-label="prev" onClick={() => {
                const next = (current3DIndex - 1 + totalCerts) % totalCerts;
                setCurrent3DIndex(next);
                setAutoRotateRunning(false);
                setRotateDeg(-angleStep * next);
              }}>&lt;</button>
              <button aria-label="next" onClick={() => {
                const next = (current3DIndex + 1) % totalCerts;
                setCurrent3DIndex(next);
                setAutoRotateRunning(false);
                setRotateDeg(-angleStep * next);
              }}>&gt;</button>
            </div>
          </div>

          <div className="cert-indicator">Showing {current3DIndex+1} of {CERTIFICATES.length}</div>

          {/* Full-size lightbox / modal */}
          {certModalOpen && activeCert && (
            <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <div className="absolute inset-0 bg-black/75" onClick={closeCert} />
              <div className="relative z-10 max-w-[92vw] w-full bg-transparent rounded overflow-hidden">
                <button onClick={closeCert} aria-label="Close certificate" className="absolute top-3 right-3 z-20 p-2 rounded-full bg-white/90 dark:bg-slate-800/90 hover:scale-105 transition">✕</button>

                <div className="w-full flex items-center justify-center" style={{ background: 'transparent' }}>
                  <img
                    src={activeCert.src}
                    alt={activeCert.name}
                    style={{ maxWidth: '90vw', maxHeight: '90vh', width: 'auto', height: 'auto', objectFit: 'contain' }}
                  />
                </div>

                <div className="p-4 text-center">
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-slate-100">{activeCert.name}</h3>
                  <div className="mt-3 flex items-center justify-center gap-3">
                    <a href={activeCert.src} target="_blank" rel="noreferrer" className="px-3 py-2 rounded bg-indigo-600 text-white">Open in new tab</a>
                    <button onClick={closeCert} className="px-3 py-2 rounded border">Close</button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* Reach Me (Contact) */}
        <section id="contact" className="mt-12 rounded-xl p-6 border border-slate-300 dark:border-slate-700 bg-gray-50 dark:bg-slate-800/10">
          <h2 className="text-2xl font-bold">Reach Me</h2>
          <p className="text-gray-600 dark:text-slate-400 mt-2">Interested in collaborating or hiring? Let’s connect.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            {/* Left - info */}
            <div>
              <h4 className="font-medium text-gray-800 dark:text-slate-200">Contact Info</h4>
              <div className="mt-3 text-sm space-y-2 text-gray-700 dark:text-slate-300">
                <div><strong>Email:</strong> <a href={`mailto:${CONTACT.email}`} className="text-indigo-600 dark:text-indigo-300">{CONTACT.email}</a></div>
                <div><strong>Phone:</strong> <span>{CONTACT.phone}</span></div>
                <div className="flex flex-wrap gap-3 mt-3">
                  <a href={CONTACT.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-100 dark:bg-slate-700/40"><Github size={16}/> GitHub</a>
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-100 dark:bg-slate-700/40"><Linkedin size={16}/> LinkedIn</a>
                  <a href={CONTACT.instagram} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-100 dark:bg-slate-700/40"><Instagram size={16}/> Instagram</a>
                  <a href={CONTACT.x} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-100 dark:bg-slate-700/40"><Twitter size={16}/> X</a>
                  <a href={CONTACT.snapchat} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded bg-gray-100 dark:bg-slate-700/40">👻 Snapchat</a>
                </div>
              </div>
            </div>

            {/* Right - form */}
            <form action={`mailto:${CONTACT.email}`} method="get" encType="text/plain" onSubmit={handleSubmitMail} className="space-y-3">
              <label className="text-sm text-gray-700 dark:text-slate-200">Your Name</label>
              <input name="subject" placeholder="Your name" className="w-full p-3 rounded border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900/40 text-gray-900 dark:text-slate-100"/>
              <label className="text-sm text-gray-700 dark:text-slate-200">Message</label>
              <textarea name="body" rows={5} placeholder="Write a short message..." className="w-full p-3 rounded border border-gray-300 dark:border-slate-700 bg-white dark:bg-slate-900/40 text-gray-900 dark:text-slate-100"/>
              <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-indigo-600 text-white">Send via Email</button>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-gray-500 dark:text-slate-500 text-sm">
          © {new Date().getFullYear()} {CONTACT.name} — Built with ❤️ and DevOps.
        </footer>
      </main>
    </div>
  );
}
