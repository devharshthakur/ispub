import { ExternalLink, ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { projects } from "./project.data";
import { FaGithub } from "react-icons/fa";

export default function AllProjectsPage() {
  return (
    <div className="from-background to-muted/30 min-h-screen bg-gradient-to-b">
      <div className="px-4 py-16">
        <div className="mx-auto max-w-6xl">
          <div className="mb-8">
            <Link
              href="/about"
              className="text-primary mb-6 inline-flex items-center hover:underline"
            >
              <ArrowLeft className="mr-1 h-4 w-4" />
              Back to About
            </Link>
            <h1 className="from-primary to-primary/70 mb-4 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
              All Projects
            </h1>
            <p className="text-muted-foreground mb-6 max-w-2xl text-xl">
              A collection of my work across various technologies and domains.
            </p>
            <Separator />
          </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-card overflow-hidden rounded-xl border shadow-sm transition-shadow hover:shadow-md"
              >
                <div className="bg-primary/5 flex items-center justify-between border-b p-5">
                  <div className="flex items-center gap-3">
                    <div className="bg-background flex h-10 w-10 items-center justify-center rounded-lg">
                      <div className="text-primary text-2xl font-bold">
                        {project.title.charAt(0)}
                      </div>
                    </div>
                    <h3 className="text-xl font-bold">{project.title}</h3>
                  </div>
                  <span className="text-muted-foreground bg-background rounded-full px-2 py-1 text-xs">
                    {project.date}
                  </span>
                </div>

                <div className="space-y-4 p-6">
                  <div>
                    <h4 className="text-muted-foreground mb-2 text-sm font-medium">Description</h4>
                    <p className="mb-4">{project.longDescription}</p>
                  </div>

                  <div>
                    <h4 className="text-muted-foreground mb-2 text-sm font-medium">
                      Project Details
                    </h4>
                    <div className="mb-4 grid grid-cols-2 gap-2">
                      <div>
                        <span className="text-muted-foreground block text-xs">Duration</span>
                        <span className="font-medium">{project.duration}</span>
                      </div>
                      <div>
                        <span className="text-muted-foreground block text-xs">Demo</span>
                        <span className="font-medium">
                          {project.liveDemoUrl === "local"
                            ? "Local Development"
                            : "Available Online"}
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="text-muted-foreground mb-2 text-sm font-medium">Technologies</h4>
                    <div className="mb-4 flex flex-wrap gap-2">
                      {project.tags.map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="bg-primary/5 rounded-full px-2 py-1 text-xs font-medium"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button asChild variant="outline" size="sm" className="flex-1 border-2">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2"
                      >
                        <FaGithub className="h-4 w-4" />
                        View Source
                      </a>
                    </Button>

                    {project.liveDemoUrl !== "local" && project.liveDemoUrl !== "#" && (
                      <Button asChild size="sm" className="flex-1 border-2">
                        <a
                          href={project.liveDemoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <ExternalLink className="h-4 w-4" />
                          Live Demo
                        </a>
                      </Button>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
