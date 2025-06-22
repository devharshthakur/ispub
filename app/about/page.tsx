import { Mail } from "lucide-react";
import { SiGithub, SiLinkedin } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";
import Container from "@/components/container";

export default function AboutPage() {
  return (
    <Container className="px-4 py-8">
      {/* Hero Section */}
      <section className="mb-8 text-center">
        <div className="bg-primary/10 mb-6 inline-flex h-25 w-25 items-center justify-center">
          <Avatar>
            <AvatarImage src="/dev.jpeg" />
            <AvatarFallback>HT</AvatarFallback>
          </Avatar>
        </div>
        <h1 className="from-primary to-primary/70 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
          Harsh Thakur
        </h1>
        <p className="text-muted-foreground mx-auto mb-6 max-w-lg text-lg">
          Full Stack Developer passionate about creating useful tools and web applications.
        </p>
        <div className="mb-8 flex justify-center gap-4">
          <a
            href="https://github.com/devharshthakur"
            className="bg-primary/10 hover:bg-primary/20 border-primary/20 flex h-10 w-10 items-center justify-center rounded-md border transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiGithub className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="bg-primary/10 hover:bg-primary/20 border-primary/20 flex h-10 w-10 items-center justify-center rounded-md border transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <RiTwitterXFill className="h-5 w-5" />
          </a>
          <a
            href="#"
            className="bg-primary/10 hover:bg-primary/20 border-primary/20 flex h-10 w-10 items-center justify-center rounded-md border transition-colors"
            target="_blank"
            rel="noopener noreferrer"
          >
            <SiLinkedin className="h-5 w-5" />
          </a>
          <a
            href="mailto:workharshthakur2002@gmail.com"
            className="bg-primary/10 hover:bg-primary/20 border-primary/20 flex h-10 w-10 items-center justify-center rounded-md border transition-colors"
          >
            <Mail className="h-5 w-5" />
          </a>
        </div>
        <div className="flex flex-wrap justify-center gap-2">
          <Button size="lg" asChild className="border-2">
            <Link href="/contact">Get in Touch</Link>
          </Button>
          <Button size="lg" variant="outline" asChild className="border-2">
            <a href="https://github.com/devahrsthakur" target="_blank" rel="noopener noreferrer">
              <SiGithub className="h-4 w-4" />
              GitHub
            </a>
          </Button>
        </div>
      </section>

      {/* About Section */}
      <section className="mb-8">
        <div className="mb-3 flex items-center gap-2">
          <h2 className="text-2xl font-bold">About Me</h2>
        </div>
        <Separator className="mb-6" />
        <div className="text-md space-y-4 leading-relaxed">
          <p>
            Hi there! I'm Harsh Thakur, a full-stack developer with a passion for building tools
            that make developers' lives easier. I specialize in JavaScript/TypeScript ecosystems,
            with expertise in React, Next.js, and Node.js.
          </p>
          <p>
            With over 5 years of experience in web development, I've worked on a variety of projects
            from small tools to large-scale applications. I'm particularly interested in developer
            experience, performance optimization, and creating intuitive interfaces.
          </p>
          <p>
            When I'm not coding, you can find me writing technical articles, contributing to
            open-source projects, or exploring new technologies to stay at the cutting edge of web
            development.
          </p>
        </div>
      </section>
    </Container>
  );
}
