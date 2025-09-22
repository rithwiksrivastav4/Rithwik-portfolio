import React, { useState, useEffect } from "react";
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
  resume: "/Rithwik_srivastav_devops.pdf",
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
  const [theme, setTheme] = useState("dark");
  useEffect(()=>{
    if(theme==="dark") document.documentElement.classList.add("dark");
    else document.documentElement.classList.remove("dark");
  },[theme]);

  // Contact form handled via mailto (works across devices)
  const handleSubmitMail = (e) => {
    // form uses action mailto so no JS needed; keep for progressive enhancement
    e.preventDefault();
    const form = e.target;
    const subject = encodeURIComponent(form.subject?.value || "Contact via portfolio");
    const body = encodeURIComponent(form.body?.value || "");
    window.location.href = `mailto:${CONTACT.email}?subject=${subject}&body=${body}`;
  };

  // Helpers for theme-aware glow classes
  const glowClass = theme==="dark" ? "shadow-[0_0_16px_rgba(99,102,241,0.9)]" : "shadow-[0_0_10px_rgba(59,130,246,0.25)]";
  const cardBg = theme==="dark" ? "bg-slate-800/20" : "bg-white";

  return (
    <div className="min-h-screen transition-colors duration-300 bg-white dark:bg-gradient-to-b dark:from-slate-900 dark:via-slate-900 dark:to-gray-900 text-gray-900 dark:text-slate-100 antialiased">
      {/* theme toggle */}
      <button
        aria-label="toggle theme"
        onClick={()=>setTheme(t=>t==="dark"?"light":"dark")}
        className="fixed top-4 right-4 z-50 px-3 py-2 rounded-full bg-gray-200 dark:bg-slate-800 hover:scale-105 transition"
      >
        {theme==="dark" ? "🌙" : "☀️"}
      </button>

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

        <nav className="flex items-center gap-3 text-sm">
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
            <motion.img src="/myimage.png" alt="profile" className="rounded-2xl border-4 border-indigo-500 max-h-[420px] object-cover"
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
          <motion.div className="mt-6 flex space-x-4 overflow-x-auto pb-4" animate={{x:[0,-700,0]}} transition={{duration:38, repeat:Infinity, ease:"linear"}}>
            {CERTIFICATES.concat(CERTIFICATES).map((c,i)=>(
              <motion.div key={i} whileHover={{scale:1.08}} className={`flex-shrink-0 w-56 h-36 rounded-lg overflow-hidden border ${cardBg} border-slate-300`}>
                <img src={c.src} alt={c.title} className="w-full h-full object-cover"/>
              </motion.div>
            ))}
          </motion.div>
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
