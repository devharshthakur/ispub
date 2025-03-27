"use client";

import { FaArrowLeft } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import { usePathname, useRouter } from "next/navigation";

export function BackButton() {
  const router = useRouter();
  const pathname = usePathname();

  const handleBack = () => {
    router.back();
  };

  if (pathname === "/") {
    return null;
  }

  return (
    <Button
      variant="outline"
      onClick={handleBack}
      className="hover:bg-muted fixed top-20 left-4 z-50 ml-12 flex items-center gap-2 rounded-full border-2 p-5 transition-colors dark:border-white"
      aria-label="Go back"
      title="Go back"
    >
      <FaArrowLeft size={16} className="text-primary" />
    </Button>
  );
}
