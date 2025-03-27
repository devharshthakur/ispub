import { IconType } from "react-icons";
import { FaHtml5, FaCss3Alt, FaJsSquare, FaReact } from "react-icons/fa";
import {
  SiTypescript,
  SiNextdotjs,
  SiTailwindcss,
  SiDocker,
  SiNestjs,
  SiPrisma,
} from "react-icons/si";

interface Skill {
  name: string;
  icon: IconType;
}

interface Project {
  title: string;
  description: string;
  longDescription: string;
  githubUrl: string;
  liveDemoUrl: string;
  date: string;
  duration: string;
  tags: string[];
}

export const projects: Project[] = [
  {
    title: "Secure pass",
    description: "It encrypts then stores the data, it has search features using keys",
    longDescription:
      "A secure password manager that uses encryption to protect sensitive data. Features include password storage, search functionality, and secure encryption.",
    githubUrl: "https://github.com/devharshthakur/secure-pass.git",
    liveDemoUrl: "local",
    date: "2024-03",
    duration: "1 week",
    tags: ["Next.js", "TypeScript", "Encryption", "Security"],
  },
  {
    title: "Legal AI PDF (In Development)",
    description: "An AI based Legal Assistant (FINAL YEAR MAJOR PROJECT)",
    longDescription:
      "A comprehensive AI-driven legal assistant designed to streamline legal document processing and provide intelligent insights.",
    githubUrl: "https://github.com/Anuragc123/LegalPDF.git",
    liveDemoUrl: "#",
    date: "2024-04",
    duration: "6 months",
    tags: ["AI", "Legal Tech", "Machine Learning"],
  },
  {
    title: "BlockPredict",
    description: "A Simple ML based prediction simulation using BlockChain",
    longDescription:
      "An innovative tool that simulates the prediction done by ML models using blockchain for weight management.",
    githubUrl: "https://github.com/devharshthakur/blockpredict.git",
    liveDemoUrl: "local",
    date: "2024-05",
    duration: "1 month",
    tags: ["Machine Learning", "Blockchain", "Simulation"],
  },
  {
    title: "Orrbit",
    description: "A modern web-based PDF compression tool with secure client-side processing",
    longDescription:
      "A full-stack web application that enables users to compress PDF files efficiently without compromising quality, featuring real-time compression progress and secure file handling where files never leave the user's device.",
    githubUrl: "https://github.com/devharshthakur/orrbit.git",
    liveDemoUrl: "local",
    date: "2024-03",
    duration: "2 months",
    tags: ["Next.js", "NestJS", "TypeScript", "PDF Processing", "Prisma"],
  },
];

export const skills: Skill[] = [
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJsSquare },
  { name: "React", icon: FaReact },
  { name: "Tailwind", icon: SiTailwindcss },
  { name: "NextJs", icon: SiNextdotjs },
  { name: "Typescript", icon: SiTypescript },
  { name: "Prisma", icon: SiPrisma },
  { name: "NestJs", icon: SiNestjs },
  { name: "Docker", icon: SiDocker },
];
