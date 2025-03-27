"use client";

import type React from "react";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Send, CheckCircle, MessageSquare, Globe, MapPin } from "lucide-react";
import { SiNpm, SiGithub, SiLinkedin } from "react-icons/si";
import { RiTwitterXFill } from "react-icons/ri";
import Link from "next/link";

type FormData = {
  name: string;
  email: string;
  message: string;
};

export default function ContactPage() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
    }, 1500);
  };

  const contactMethods = [
    {
      icon: <Mail className="text-primary h-5 w-5" />,
      title: "Email",
      value: "workharshthakur2002@gmail.com",
    },
    {
      icon: <SiGithub className="text-primary h-5 w-5" />,
      title: "GitHub",
      value: "https://github.com/devharshthakur",
    },
    {
      icon: <Globe className="text-primary h-5 w-5" />,
      title: "Website",
      value: "devharshthakur.in",
    },
    {
      icon: <MapPin className="text-primary h-5 w-5" />,
      title: "Location",
      value: "Mumbai, India",
    },
  ];

  return (
    <>
      <div className="from-background to-muted/30 flex min-h-screen flex-col items-center justify-center bg-gradient-to-b">
        <div className="px-4 py-12">
          <div className="container mx-auto max-w-5xl">
            <div className="mb-10 text-center">
              <h1 className="from-primary to-primary/70 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
                Get in Touch (Not Working yet)
              </h1>
            </div>

            {isSubmitted ? (
              <div className="bg-card mx-auto max-w-2xl rounded-xl border p-8 shadow-md">
                <div className="flex flex-col items-center justify-center py-8 text-center">
                  <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/30">
                    <CheckCircle className="h-8 w-8 text-green-600 dark:text-green-400" />
                  </div>
                  <h2 className="mb-2 text-2xl font-bold text-green-700 dark:text-green-400">
                    Message Sent Successfully!
                  </h2>
                  <p className="text-muted-foreground mb-8 max-w-md">
                    Thank you for reaching out. I'll get back to you as soon as possible.
                  </p>
                  <Button asChild className="border-2">
                    <Link href="/">Return to Home</Link>
                  </Button>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 gap-6 lg:grid-cols-12">
                {/* Left Column - Contact Form */}
                <div className="bg-card overflow-hidden rounded-xl border shadow-md lg:col-span-7">
                  <div className="bg-primary/5 border-b p-5">
                    <div className="flex items-center gap-3">
                      <div className="bg-primary/10 flex h-10 w-10 items-center justify-center rounded-full">
                        <MessageSquare className="text-primary h-5 w-5" />
                      </div>
                      <div>
                        <h2 className="text-xl font-bold">Send a Message</h2>
                        <p className="text-muted-foreground text-sm">
                          I'll get back to you as soon as possible
                        </p>
                      </div>
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-6 p-6">
                    <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                      <div className="space-y-2">
                        <label htmlFor="name" className="block text-sm font-medium">
                          Name
                        </label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="rounded-md border-2 px-4 py-2"
                          required
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium">
                          Email
                        </label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="rounded-md border-2 px-4 py-2"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="block text-sm font-medium">
                        Message
                      </label>
                      <Textarea
                        id="message"
                        name="message"
                        rows={7}
                        value={formData.message}
                        onChange={handleChange}
                        className="resize-none rounded-md border-2 px-4 py-2 text-lg"
                        required
                        placeholder="How can I help you?"
                      />
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full rounded-md border-2 py-3 text-lg"
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <span className="h-4 w-4 animate-spin rounded-full border-2 border-current border-t-transparent"></span>
                          Sending...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          <Send className="h-4 w-4" />
                          Send Message
                        </span>
                      )}
                    </Button>
                  </form>
                </div>

                {/* Right Column - Info Cards */}
                <div className="space-y-6 lg:col-span-5">
                  {/* Contact Info Card */}
                  <div className="bg-card overflow-hidden rounded-xl border shadow-md">
                    <div className="bg-primary/5 border-b p-5">
                      <h3 className="flex items-center gap-2 text-lg font-semibold">
                        <Mail className="text-primary h-5 w-5" />
                        Contact Information
                      </h3>
                    </div>
                    <div className="p-5">
                      <div className="grid grid-cols-1 gap-4">
                        {contactMethods.map((method, index) => (
                          <div key={index} className="flex items-start gap-3">
                            <div className="bg-primary/10 mt-0.5 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                              {method.icon}
                            </div>
                            <div>
                              <h4 className="text-sm font-medium">{method.title}</h4>
                              <p className="text-muted-foreground font-mono text-sm">
                                {method.value}
                              </p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Connect Card */}
                  <div className="bg-card overflow-hidden rounded-xl border shadow-md">
                    <div className="bg-primary/5 border-b p-5">
                      <h3 className="flex items-center gap-2 text-lg font-semibold">
                        <SiLinkedin className="text-primary h-5 w-5" />
                        Connect
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-muted-foreground mb-4 text-sm">
                        Follow me on social media to stay updated with my latest projects.
                      </p>
                      <div className="flex justify-center gap-3">
                        <a
                          href="https://github.com/devahrsthakur"
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
                      </div>
                    </div>
                  </div>

                  {/* About Project Card */}
                  <div className="bg-card overflow-hidden rounded-xl border shadow-md">
                    <div className="bg-primary/5 border-b p-5">
                      <h3 className="flex items-center gap-2 text-lg font-semibold">
                        <SiNpm className="text-primary text-lg" />
                        About the Project
                      </h3>
                    </div>
                    <div className="p-5">
                      <p className="text-muted-foreground mb-4 text-sm">
                        The NPM Package Checker is an open-source tool to help developers check
                        package name availability.
                      </p>
                      <Button variant="outline" asChild size="sm" className="w-full border-2">
                        <a
                          href="https://github.com/devahrsthakur/npm-checker"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center justify-center gap-2"
                        >
                          <SiGithub className="h-4 w-4" />
                          View on GitHub
                        </a>
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
