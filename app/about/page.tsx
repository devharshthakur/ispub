import { Mail, Code, Package, User } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";

import { RiTwitterXFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { projects } from "./about.data";
import { skills } from "./about.data";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function AboutPage() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="from-background to-muted/30 min-h-screen bg-gradient-to-b">
      <div className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Hero Section */}
          <section className="mb-16 text-center">
            <div className="bg-primary/10 mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full">
              <Avatar>
                <AvatarImage src="/dev.jpeg" />
                <AvatarFallback>HT</AvatarFallback>
              </Avatar>
            </div>
            <h1 className="from-primary to-primary/70 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
              Harsh Thakur
            </h1>
            <p className="text-muted-foreground mx-auto mb-6 max-w-2xl text-xl">
              Full Stack Developer passionate about creating useful tools and web applications.
            </p>
            <div className="mb-8 flex justify-center gap-4">
              <a
                href="https://github.com/devharshthakur"
                className="bg-primary/10 hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiGithub className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary/10 hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <RiTwitterXFill className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="bg-primary/10 hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SiLinkedin className="h-5 w-5" />
              </a>
              <a
                href="mailto:workharshthakur2002@gmail.com"
                className="bg-primary/10 hover:bg-primary/20 flex h-10 w-10 items-center justify-center rounded-full transition-colors"
              >
                <Mail className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-wrap justify-center gap-2">
              <Button asChild className="border-2">
                <Link href="/contact">Get in Touch</Link>
              </Button>
              <Button variant="outline" asChild className="border-2">
                <a
                  href="https://github.com/devahrsthakur"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiGithub className="mr-2 h-4 w-4" />
                  GitHub Profile
                </a>
              </Button>
            </div>
          </section>

          {/* About Section */}
          <section className="mb-16">
            <div className="mb-4 flex items-center gap-2">
              <User className="text-primary h-5 w-5" />
              <h2 className="text-2xl font-bold">About Me</h2>
            </div>
            <Separator className="mb-6" />
            <div className="space-y-4 text-lg">
              <p>
                Hi there! I'm Harsh Thakur, a full-stack developer with a passion for building tools
                that make developers' lives easier. I specialize in JavaScript/TypeScript
                ecosystems, with expertise in React, Next.js, and Node.js.
              </p>
              <p>
                With over 5 years of experience in web development, I've worked on a variety of
                projects from small tools to large-scale applications. I'm particularly interested
                in developer experience, performance optimization, and creating intuitive
                interfaces.
              </p>
              <p>
                When I'm not coding, you can find me writing technical articles, contributing to
                open-source projects, or exploring new technologies to stay at the cutting edge of
                web development.
              </p>
            </div>
          </section>

          {/* Skills Section */}
          <section className="mb-16">
            <div className="mb-4 flex items-center gap-2">
              <Code className="text-primary h-5 w-5" />
              <h2 className="text-2xl font-bold">Skills & Technologies</h2>
            </div>
            <Separator className="mb-6" />

            <div className="grid grid-cols-2 gap-4 md:grid-cols-5">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-primary/5 hover:bg-primary/10 flex flex-col items-center rounded-lg p-4 text-center transition-colors"
                >
                  <div className="mb-2 text-2xl">
                    <skill.icon className="h-5 w-5" />
                  </div>
                  <span className="text-sm font-medium">{skill.name}</span>
                </div>
              ))}
            </div>
          </section>

          {/* Projects Section */}
          <section className="mb-16">
            <div className="mb-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Package className="text-primary h-5 w-5" />
                <h2 className="text-2xl font-bold">Featured Projects</h2>
              </div>
              <Button variant="outline" asChild className="border-2">
                <Link href="/projects">View All Projects</Link>
              </Button>
            </div>
            <Separator className="mb-6" />

            <div className="space-y-6">
              {featuredProjects.map((project, index) => (
                <div
                  key={index}
                  className="bg-primary/5 hover:bg-primary/10 rounded-lg p-6 transition-colors"
                >
                  <div className="flex items-start gap-4">
                    <div className="bg-background flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-lg">
                      <div className="text-primary text-2xl font-bold">
                        {project.title.charAt(0)}
                      </div>
                    </div>

                    <div className="flex-1">
                      <div className="mb-2 flex flex-wrap items-center justify-between gap-2">
                        <h3 className="text-lg font-bold">{project.title}</h3>
                        <div className="flex items-center gap-2">
                          <span className="text-muted-foreground bg-background rounded-full px-2 py-1 text-xs">
                            {project.date} • {project.duration}
                          </span>
                          <a
                            href={project.githubUrl}
                            className="text-primary inline-flex items-center gap-1 text-sm hover:underline"
                            target="_blank"
                            rel="noopener noreferrer"
                          >
                            <SiGithub className="h-4 w-4" />
                          </a>
                        </div>
                      </div>

                      <p className="text-muted-foreground mb-3">{project.description}</p>

                      <div className="flex flex-wrap gap-2">
                        {project.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="bg-background rounded-full px-2 py-1 text-xs font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
