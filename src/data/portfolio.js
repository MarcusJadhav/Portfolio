import { Github, Linkedin } from '../components/BrandIcons';
import { 
  Code2, 
  Database, 
  Globe, 
  Cpu, 
  Mail, 
  ExternalLink,
  BookOpen,
  Cloud,
  Award,
  Server
} from 'lucide-react';

export const personalInfo = {
  name: "Marcus Jadhav",
  role: "Java Full Stack Developer",
  tagline: "Building scalable backend systems, modern web applications, and seamless digital experiences.",
  about: "I'm a Master of Computer Science graduate passionate about building scalable backend systems, secure REST APIs, and modern responsive web applications using Java, Spring Boot, React.js, and Microservices.",
  email: "marcusjadhav@gmail.com",
  github: "https://github.com/MarcusJadhav/",
  linkedin: "https://www.linkedin.com/in/marcus-jadhav/",
  resume: "/MarcusJadhav-Resume.pdf",
};

export const skills = [
  {
    category: "Frontend",
    icon: Globe,
    items: ["React.js", "Tailwind CSS", "JavaScript", "HTML5", "CSS3", "Vite"]
  },
  {
    category: "Backend",
    icon: Server,
    items: ["Java", "Spring Boot", "Spring Security", "Hibernate", "REST APIs", "JWT Authentication", "Microservices"]
  },
  {
    category: "Database & Tools",
    icon: Database,
    items: ["MySQL", "PostgreSQL", "Git", "GitHub", "Docker", "Postman", "AWS"]
  }
];

export const projects = [
  {
    id: 1,
    title: "EduManage",
    description: "Enterprise Institute Management System",
    longDescription: "A comprehensive solution for educational institutions to manage students, staff, and curriculum efficiently.",
    tech: ["Java 17", "Spring Boot 3", "React.js", "JWT", "Microservices", "MySQL"],
    image: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=1000",
    github: "#",
    live: "#"
  },
  {
    id: 2,
    title: "Being Rider",
    description: "Travel & Tour Website",
    longDescription: "A modern, responsive travel platform showcasing destinations and booking services.",
    tech: ["HTML5", "CSS3", "JavaScript", "Netlify"],
    image: "https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&q=80&w=1000",
    github: "#",
    live: "#"
  }
];

export const education = [
  {
    degree: "Master of Computer Science",
    institution: "Your University Name",
    duration: "2022 - 2024",
    description: "Specialized in Software Engineering and Distributed Systems."
  },
  {
    degree: "Bachelor of Computer Science",
    institution: "Your University Name",
    duration: "2019 - 2022",
    description: "Foundational knowledge in algorithms, data structures, and web development."
  },
  {
    degree: "AWS Cloud Foundations Certification",
    institution: "Amazon Web Services",
    duration: "2023",
    description: "Certified Cloud Practitioner - AWS Cloud Concepts & Core Services."
  }
];

export const stats = [
  { label: "Projects Built", value: "10+" },
  { label: "Technologies", value: "15+" },
  { label: "Experience", value: "2+ Years" },
  { label: "Certifications", value: "5+" }
];
