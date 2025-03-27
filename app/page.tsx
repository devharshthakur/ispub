"use client";

import type React from "react";
import { useState } from "react";
import { Search, Check, Loader2 } from "lucide-react";
import { SiNpm } from "react-icons/si";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResultMessage } from "@/components/custom/result-message";
import { checkNpm } from "@/lib/check-npm";

export default function Home() {
  const [packageName, setPackageName] = useState("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleCheckAvailability = async () => {
    if (!packageName.trim()) return;

    setIsLoading(true);
    setError(null);

    const result = await checkNpm(packageName);

    setIsAvailable(result.isAvailable);
    if (result.error) {
      setError(result.error.message);
    }

    setIsLoading(false);
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && packageName.trim()) {
      handleCheckAvailability();
    }
  };

  return (
    <div className="from-background to-muted/30 flex min-h-screen flex-col bg-gradient-to-b">
      <main className="flex flex-1 flex-col items-center justify-center p-4">
        <div className="w-full max-w-md space-y-10">
          <div className="space-y-3 text-center">
            <h1 className="from-primary to-primary/70 flex items-center justify-center gap-3 bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent">
              <SiNpm className="text-primary text-5xl" /> Package Checker
            </h1>
            <p className="text-muted-foreground text-lg">
              Check if your package name is available on npm
            </p>
          </div>

          <div className="space-y-4">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-3 flex items-center">
                <Search size={18} className="text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Enter package name"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                onKeyDown={handleKeyDown}
                className="border-primary/20 focus:ring-primary/30 focus:border-primary/40 rounded-lg border-2 py-6 pr-4 pl-10 text-lg shadow-sm transition-all focus:ring-2"
              />
            </div>

            <Button
              onClick={handleCheckAvailability}
              disabled={isLoading || !packageName.trim()}
              className="w-full rounded-lg py-6 text-lg font-medium shadow-md transition-all hover:shadow-lg dark:bg-white dark:text-black"
            >
              {isLoading ? (
                <span className="flex items-center gap-2">
                  <Loader2 size={20} className="animate-spin" />
                  Checking...
                </span>
              ) : (
                <span className="flex items-center gap-2">
                  <Check size={20} />
                  Check Availability
                </span>
              )}
            </Button>
          </div>

          <ResultMessage packageName={packageName} isAvailable={isAvailable} error={error} />
        </div>
      </main>
    </div>
  );
}
