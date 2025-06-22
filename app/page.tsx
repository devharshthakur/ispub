"use client";

import type React from "react";
import { useState } from "react";
import { Search, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ResultMessage } from "@/components/custom/result-message";
import { checkNpm } from "@/lib/check-npm";
import Container from "@/components/container";

export default function Home() {
  const [packageName, setPackageName] = useState<string>("");
  const [isAvailable, setIsAvailable] = useState<boolean | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
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
    <Container>
      <main className="mt-38 flex flex-col items-center justify-center">
        <div className="space-y-10 leading-relaxed">
          <div className="mt-3 space-y-5 text-center">
            <h1 className="flex items-center justify-center text-6xl font-bold tracking-tighter">
              Npm Package Checker
            </h1>
          </div>

          <div className="place-items-center space-y-6">
            <div className="relative mr-14 w-full max-w-lg">
              <div className="pointer-events-none absolute inset-0 left-3 flex items-center">
                <Search size={18} className="text-muted-foreground" />
              </div>
              <Input
                type="text"
                placeholder="Enter package name"
                value={packageName}
                onChange={(e) => setPackageName(e.target.value)}
                onKeyDown={handleKeyDown}
                className="focus:border-primary/40 w-xl rounded-lg border-2 py-6 pr-4 pl-10 text-lg shadow-sm transition-all"
              />
            </div>

            <div className="w-full max-w-sm">
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
          </div>

          <ResultMessage packageName={packageName} isAvailable={isAvailable} error={error} />
        </div>
      </main>
    </Container>
  );
}
