import { Check, X, AlertCircle, ExternalLink } from "lucide-react";
import { SiNpm } from "react-icons/si";
import { cn } from "@/lib/utils";

type ResultMessageProps = {
  packageName: string;
  isAvailable: boolean | null;
  error: string | null;
};

export function ResultMessage({ packageName, isAvailable, error }: ResultMessageProps) {
  if (error) {
    return (
      <div className="animate-fadeIn overflow-hidden rounded-xl border-2 border-yellow-200 shadow-md dark:border-yellow-800">
        <div className="flex items-center gap-3 bg-yellow-50 p-4 dark:bg-yellow-950/30">
          <div className="flex h-8 w-8 items-center justify-center rounded-full bg-yellow-100 dark:bg-yellow-900/50">
            <AlertCircle size={18} className="text-yellow-600 dark:text-yellow-400" />
          </div>
          <div>
            <h3 className="font-bold text-yellow-700 dark:text-yellow-400">Error</h3>
            <p className="text-sm text-yellow-600/80 dark:text-yellow-400/80">
              We encountered a problem
            </p>
          </div>
        </div>
        <div className="bg-card p-4">
          <p className="font-medium text-yellow-700 dark:text-yellow-400">{error}</p>
          <div className="text-muted-foreground mt-2 text-sm">
            Please check your internet connection and try again.
          </div>
        </div>
      </div>
    );
  }

  if (isAvailable === null) {
    return null;
  }

  return (
    <div
      className={cn(
        "animate-fadeIn mx-auto max-w-lg overflow-hidden rounded-xl shadow-md transition-all",
        isAvailable
          ? "border-2 border-green-200 dark:border-green-800"
          : "border-2 border-red-200 dark:border-red-800"
      )}
    >
      {/* Header */}
      <div
        className={cn(
          "flex items-center justify-between p-4",
          isAvailable ? "bg-green-50 dark:bg-green-950/30" : "bg-red-50 dark:bg-red-950/30"
        )}
      >
        <div className="flex items-center gap-2">
          {isAvailable ? (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-green-100 dark:bg-green-900/50">
              <Check size={18} className="text-green-600 dark:text-green-400" />
            </div>
          ) : (
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/50">
              <X size={18} className="text-red-600 dark:text-red-400" />
            </div>
          )}
          <div>
            <h3
              className={cn(
                "font-bold",
                isAvailable
                  ? "text-green-700 dark:text-green-400"
                  : "text-red-700 dark:text-red-400"
              )}
            >
              {isAvailable ? "Available" : "Unavailable"}
            </h3>
            <p
              className={cn(
                "text-sm",
                isAvailable
                  ? "text-green-600/80 dark:text-green-400/80"
                  : "text-red-600/80 dark:text-red-400/80"
              )}
            >
              Package name: <span className="font-mono font-medium">{packageName}</span>
            </p>
          </div>
        </div>
        <div className="flex items-center">
          <SiNpm
            className={cn(
              "text-2xl",
              isAvailable ? "text-green-600 dark:text-green-400" : "text-red-600 dark:text-red-400"
            )}
          />
        </div>
      </div>

      {/* Content */}
      <div className="bg-card p-5">
        {isAvailable ? (
          <div className="space-y-2">
            <p className="font-medium text-green-700 dark:text-green-400">
              Great news! This package name is available for publishing.
            </p>
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <Check size={14} className="text-green-600" />
                <span>You can use this name for your new package</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <Check size={14} className="text-green-600" />
                <span>No naming conflicts with existing packages</span>
              </div>
            </div>
          </div>
        ) : (
          <div className="space-y-2">
            <p className="font-medium text-red-700 dark:text-red-400">
              This package name is already taken.
            </p>
            <div className="flex flex-col gap-2">
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <AlertCircle size={14} className="text-red-600" />
                <span>Consider using a different name for your package</span>
              </div>
              <div className="text-muted-foreground flex items-center gap-2 text-sm">
                <AlertCircle size={14} className="text-red-600" />
                <span>You might try adding a scope like @username/package</span>
              </div>
            </div>
            <div className="pt-2">
              <a
                href={`https://www.npmjs.com/package/${packageName}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-muted hover:bg-muted/80 inline-flex items-center gap-1 rounded p-2 text-sm font-medium transition-colors"
              >
                <SiNpm className="text-primary mr-1" />
                <span>View package on npmjs.com</span>
                <ExternalLink size={14} className="ml-1" />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
