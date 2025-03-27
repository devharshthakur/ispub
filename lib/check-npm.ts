import axios from "axios";

interface SuccessResult {
  isAvailable: boolean;
  error: null;
}

interface ErrorResult {
  isAvailable: null;
  error: {
    message: string;
    code: string;
    status?: number;
  };
}

export type CheckNpmResult = SuccessResult | ErrorResult;

export async function checkNpm(packageName: string): Promise<CheckNpmResult> {
  if (!packageName.trim()) {
    return {
      isAvailable: null,
      error: {
        message: "Package name is required",
        code: "MISSING_PACKAGE_NAME",
        status: 400,
      },
    };
  }

  try {
    const response = await axios.get(
      `/api/check-npm?packageName=${encodeURIComponent(packageName)}`
    );

    if (response.data.success) {
      return {
        isAvailable: response.data.isAvailable,
        error: null,
      };
    } else {
      // The API route returned an error
      return {
        isAvailable: null,
        error: response.data.error,
      };
    }
    /**
     * Handles errors that occur during the npm package availability check.
     * The goal is to always return a CheckNpmResult and not throw an exception.
     * @param {any} error - The error object caught during the process.
     */
  } catch (error: any) {
    console.error("Error in checkNpm:", error);
    return {
      isAvailable: null,
      error: {
        message: error.message || "An unexpected error occurred",
        code: "API_ERROR",
        status: error.response?.status,
      },
    };
  }
}
