"use client";

import { Button } from "@/components/ui/button";
import { FaGithub } from "react-icons/fa";
import { ThemeSwitcher } from "@/components/theme-switcher";
import Link from "next/link";

export function Navbar() {
  return (
    <nav className="bg-background/80 backdrop-blur-sm">
      <div className="mx-3 flex items-center justify-between p-4">
        <div className="flex items-center">
          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-md border-3 border-neutral-500 transition-colors"
          >
            <Link href="https://github.com/devharshthakur">
              <FaGithub className="text-primary" />
              <span>@devharshthakur</span>
            </Link>
          </Button>
        </div>

        <div className="flex items-center space-x-6">
          <Button
            size="lg"
            asChild
            className="rounded-md border-3 border-neutral-500"
            variant="outline"
          >
            <Link href="/about">About</Link>
          </Button>

          <Button
            variant="outline"
            size="lg"
            asChild
            className="rounded-md border-3 border-neutral-500 transition-colors"
          >
            <a href="https://github.com/devharshthakur/npm-package-checker">
              <FaGithub />
              <span>Repo</span>
            </a>
          </Button>

          <ThemeSwitcher className="border-3 border-neutral-500" />
        </div>
      </div>
    </nav>
  );
}
