"use client";

import { Button } from "@/components/ui/button";
import { FaGithub, FaEnvelope, FaHome } from "react-icons/fa";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export function Navbar() {
  return (
    <header className="bg-background/80 sticky top-0 z-10 border-b backdrop-blur-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="flex items-center space-x-6">
          <Button
            variant="outline"
            asChild
            className="hover:bg-muted flex items-center gap-2 rounded-md border-2 p-5 transition-colors dark:border-white"
          >
            <Link href="/">
              <FaHome size={18} className="text-primary" />
            </Link>
          </Button>
          <Button
            variant="outline"
            asChild
            className="hover:bg-muted flex items-center gap-2 rounded-md border-2 p-5 transition-colors dark:border-white"
          >
            <Link href="https://github.com/devharshthakur">
              <FaGithub size={18} className="text-primary" />
              <span>@devharshthakur</span>
            </Link>
          </Button>

          <Link
            href="/contact"
            className="hover:bg-muted flex items-center gap-2 rounded-md border-2 border-dashed border-black px-3 py-2 transition-colors dark:border-white"
          >
            <FaEnvelope size={16} className="text-primary" />
            <span>Contact Me</span>
          </Link>
        </div>

        <div className="flex items-center space-x-6">
          <Button
            asChild
            className="rounded-md border-2 border-black p-5 transition-colors dark:border-white"
          >
            <Link href="/about">About Me</Link>
          </Button>

          <Button
            variant="outline"
            asChild
            className="flex items-center gap-2 rounded-md border-2 border-black p-5 transition-colors dark:border-white"
          >
            <a href="https://github.com/devahrsthakur/npm-package-checker">
              <FaGithub size={18} />
              <span>Repo</span>
            </a>
          </Button>

          <ThemeSwitcher />
        </div>
      </div>
    </header>
  );
}
