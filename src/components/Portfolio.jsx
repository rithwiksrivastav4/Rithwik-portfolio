import React, { useState, useEffect } from "react";
import { Mail, Github, Linkedin, DownloadCloud, Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

// Contact Info
const CONTACT = {
  name: "Rithwik Srivastav",
  phone: "+91 8309824929",
  email: "rithwiksrivastav91@gmail.com",
  github: "https://github.com/rithwiksrivastav4",
  linkedin: "https://www.linkedin.com/in/rithwik-srivastav-152548323",
  resume: "/Rithwik_srivastav_devops.pdf",
};

// Skills logos (SVGs from public/logos)
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
];

// Projects
const PROJECTS = [
  {
    title: "Multi-cloud Deployment (Terraform)",
    desc: "Automated infrastructure provisioning across AWS and Azure using Terraform for scalability and consistency.",
    tags: ["Terraform", "AWS", "Azure"],
  },
  {
    title: "Kubernetes Cluster Deployment",
    desc: "Provisioned a production-ready Kubernetes cluster using Terraform and Ansible.",
    tags: ["Kubernetes", "Ansible"],
  },
  {
    title: "Spring Boot on Kubernetes",
    desc: "Containerized a Spring Boot app with a multi-stage Dockerfile and deployed it on Kubernetes with autoscaling and rolling updates.",
    tags: ["Docker", "Kubernetes", "CI/CD"],
  },
  {
    title: "Microservices (Python)",
    desc: "Built & deployed 5 containerized microservices with load balancing and persistent volumes on Kubernetes.",
    tags: ["Microservices", "Docker", "Terraform"],
  },
  {
    title: "Ansible Automation (Java & React)",
    desc: "Automated Java and React app deployments using Ansible playbooks for repeatable, reliable releases.",
    tags: ["Ansible", "Automation"],
  },
  {
    title: "CI/CD with GitHub Actions",
    desc: "Designed GitHub Actions pipelines for automated testing, Docker builds, and Kubernetes deployments.",
    tags: ["CI/CD", "GitHub Actions", "Docker"],
  },
  {
    title: "Monitoring with Prometheus & Grafana",
    desc: "Set up application and infrastructure monitoring with Prometheus metrics and Grafana dashboards.",
    tags: ["Prometheus", "Grafana", "Monitoring"],
  },
];

// Education
const EDUCATION = [
  {
    school: "Trinity College of Engineering and Technology",
    degree: "Bachelor of Technology (B.Tech) in Computer Science & Engineering",
    year: "2020 – 2024",
    score: "CGPA: 7.31",
  },
  {
    school: "Sri Venkateshwera Junior College",
    degree: "Senior Secondary (12th Grade,TSBIE)",
    score: "Percentage: 91.5%",
  },
  {
    school: "Brilliant Model High School",
    degree: "Secondary (10th Grade,TS SSC)",
    score: "Percentage: 90%",
  },
];

// Internship
const INTERNSHIPS = [
  {
    company: "VCUBE Software Solutions",
    role: "DevOps Intern",
    duration: "March 2025 – April 2025",
    work: [
      "Worked on Kubernetes, Docker, Jenkins, Terraform, and Ansible.",
      "Implemented CI/CD pipelines for automated deployments.",
      "Deployed and monitored microservices on cloud environments.",
    ],
  },
];


// Certificates
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
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-100 antialiased transition-colors duration-500">
      {/* Header */}
      <header className="max-w-5xl mx-auto p-6 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center text-white font-bold text-lg">
            RS
          </div>
          <div>
            <div className="font-semibold">{CONTACT.name}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">DevOps / Cloud Engineer</div>
          </div>
        </div>
        <nav className="flex items-center gap-3">
          <a href="#projects" className="text-sm hover:underline">Projects</a>
          <a href="#skills" className="text-sm hover:underline">Skills</a>
          <a href="#education" className="text-sm hover:underline">Education</a>
          <a href="#internship" className="text-sm hover:underline">Internship</a>
          <a href="#contact" className="text-sm hover:underline">Contact</a>
          <a
            href={CONTACT.resume}
            download
            className="ml-3 inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-indigo-600 to-purple-600 px-4 py-2 text-sm font-medium shadow-md hover:scale-[1.02] transition-transform text-white"
          >
            <DownloadCloud size={16} /> Resume
          </a>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-3 p-2 rounded-full bg-slate-200 dark:bg-slate-700 hover:scale-105 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </nav>
      </header>

      <main className="max-w-5xl mx-auto px-6 pb-16">
        {/* HERO */}
        <section className="grid md:grid-cols-2 gap-8 items-center mt-6">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
              Hi — I’m {CONTACT.name}.
              <br /> I build scalable cloud & DevOps solutions.
            </h1>
            <p className="text-slate-600 dark:text-slate-300 max-w-xl">
              DevOps & Cloud Engineer with hands-on experience in deploying,
              managing, and scaling applications on AWS and Azure.
            </p>
          </motion.div>

          {/* Profile Image */}
          
<motion.div
  initial={{ opacity: 0, x: -100 }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ duration: 1 }}
  whileHover={{ scale: 1.05, rotate: 1 }}
  className="flex justify-center"
>
  <motion.img
    src="/myimage.png"
    alt="Rithwik Srivastav"
    initial={{ y: 0 }}
    animate={{ y: [0, -10, 0] }}
    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
    className="rounded-2xl shadow-[0_0_30px_rgba(99,102,241,0.9)] border-4 border-indigo-500 max-h-[420px] object-cover"
  />
</motion.div>

        </section>

        {/* Projects */}
        <section id="projects" className="mt-12">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="mt-6 grid sm:grid-cols-2 gap-6">
            {PROJECTS.map((p) => (
              <motion.article key={p.title} whileHover={{ scale: 1.02 }} className="rounded-xl border border-slate-300 dark:border-slate-700/60 p-5 bg-slate-100 dark:bg-slate-800/20">
                <h3 className="font-semibold text-lg">{p.title}</h3>
                <p className="text-slate-600 dark:text-slate-300 mt-2 text-sm">{p.desc}</p>
                <div className="flex flex-wrap gap-2 mt-4">
                  {p.tags.map((t) => (
                    <span key={t} className="text-xs px-2 py-1 rounded bg-slate-300 dark:bg-slate-700/50">{t}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="mt-12">
          <h2 className="text-2xl font-bold">Skills & Tools</h2>
          <div className="mt-6 grid sm:grid-cols-2 md:grid-cols-3 gap-6">
            {SKILL_LOGOS.map((skill, i) => (
              
<motion.div
  key={skill.name}
  animate={{ y: [0, -5, 0] }}
  transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
  whileHover={{
    scale: 1.2,
    rotate: 360,
    boxShadow: "0 0 30px rgba(99,102,241,1), 0 0 50px rgba(139,92,246,0.8)"
  }}
  className="flex items-center gap-3 p-4 rounded-xl border border-indigo-400/40 bg-slate-100 dark:bg-slate-800/20 shadow-lg"
>
  <img src={skill.src} alt={skill.name} className="h-8 w-8 object-contain" />
  <span className="text-sm font-medium">{skill.name}</span>
</motion.div>

            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="mt-12">
          <h2 className="text-2xl font-bold">Education</h2>
          <div className="mt-6 space-y-4">
            {EDUCATION.map((edu) => (
              <div key={edu.school} className="rounded-lg border border-slate-300 dark:border-slate-700/50 p-4 bg-slate-100 dark:bg-slate-800/20">
                <h3 className="font-semibold">{edu.school}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{edu.degree}</p>
                <p className="text-xs text-slate-500 dark:text-slate-400">{edu.year} — {edu.score}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Internship */}
        <section id="internship" className="mt-12">
          <h2 className="text-2xl font-bold">Internship</h2>
          <div className="mt-6 space-y-4">
            {INTERNSHIPS.map((intern) => (
              <div key={intern.company} className="rounded-lg border border-slate-300 dark:border-slate-700/50 p-4 bg-slate-100 dark:bg-slate-800/20">
                <h3 className="font-semibold">{intern.role} — {intern.company}</h3>
                <p className="text-sm text-slate-600 dark:text-slate-300">{intern.duration}</p>
                <ul className="list-disc list-inside text-xs text-slate-500 dark:text-slate-400 mt-2 space-y-1">
                  {intern.work.map((w, i) => (
                    <li key={i}>{w}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        
        
        
        {/* Certificates */}
        <section id="certificates" className="mt-12">
          <h2 className="text-2xl font-bold">Certificates</h2>
          <motion.div
            className="mt-6 flex space-x-6 overflow-x-auto pb-4 scrollbar-hide group"
            animate={{ x: [0, -200, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            whileHover={{ animationPlayState: "paused" }}
          >
            {CERTIFICATES.map((cert, i) => (
              <motion.div
                key={i}
                whileHover={{ scale: 1.2, zIndex: 10 }}
                className="flex-shrink-0 w-48 h-32 md:w-64 md:h-40 rounded-lg overflow-hidden border border-slate-300 dark:border-slate-700 bg-slate-100 dark:bg-slate-800 shadow-md"
              >
                <img src={cert.src} alt={cert.title} className="w-full h-full object-cover" />
              </motion.div>
            ))}
          </motion.div>
        </section>



        {/* Contact */}
        <section id="contact" className="mt-12 rounded-xl p-6 border border-slate-300 dark:border-slate-700/40 bg-slate-100 dark:bg-slate-800/20">
          <h2 className="text-2xl font-bold">Reach Me</h2>
          <p className="text-slate-600 dark:text-slate-400 mt-2">Interested in collaborating or hiring? Let’s connect.</p>

          <div className="mt-6 grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium">Contact Info</h4>
              <div className="mt-3 text-sm text-slate-600 dark:text-slate-300 space-y-2">
                <div><strong>Email:</strong> <a href={`mailto:${CONTACT.email}`} className="text-indigo-600 dark:text-indigo-300">{CONTACT.email}</a></div>
                <div><strong>Phone:</strong> <span>{CONTACT.phone}</span></div>
                <div className="flex items-center gap-3 mt-2">
                  <a href={CONTACT.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 dark:bg-slate-700"> <Github size={16} /> GitHub</a>
                  <a href={CONTACT.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-3 py-1 rounded bg-slate-200 dark:bg-slate-700"> <Linkedin size={16} /> LinkedIn</a>
                </div>
              </div>
            </div>

            <form action={`mailto:${CONTACT.email}`} method="get" className="space-y-3">
              <label className="text-sm text-slate-600 dark:text-slate-300">Your Name</label>
              <input name="subject" placeholder="Your name" className="w-full p-3 rounded bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm" />
              <label className="text-sm text-slate-600 dark:text-slate-300">Message</label>
              <textarea name="body" rows={5} placeholder="Write a short message..." className="w-full p-3 rounded bg-slate-200 dark:bg-slate-900 border border-slate-300 dark:border-slate-700 text-sm"></textarea>
              <button type="submit" className="inline-flex items-center gap-2 px-4 py-2 rounded bg-indigo-600 text-white font-medium">Send via Email</button>
            </form>
          </div>
        </section>

        <footer className="mt-12 text-center text-slate-500 dark:text-slate-400 text-sm">
          © {new Date().getFullYear()} {CONTACT.name} — Built with ❤️ and DevOps.
        </footer>
      

      </main>
    </div>
  );
}
