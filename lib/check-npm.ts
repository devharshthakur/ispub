import axios from "axios";

export type CheckNpmResult = {
  isAvailable: boolean | null;
  error: {
    message: string;
    code: string;
    status?: number;
  } | null;
};

export async function checkNpm(packageName: string): Promise<CheckNpmResult> {
  if (!packageName.trim()) {
    return {
      isAvailable: null,
      error: {
        message: "Package name is required",
        code: "MISSING_PACKAGE_NAME",
      },
    };
  }

  try {
    const response = await axios.get(
      `/api/check-npm?packageName=${encodeURIComponent(packageName)}`
    );
    const data = response.data;

    if (data.success) {
      return {
        isAvailable: data.isAvailable,
        error: null,
      };
    } else {
      return {
        isAvailable: null,
        error: data.error,
      };
    }
  } catch (error: any) {
    return {
      isAvailable: null,
      error: {
        message: error.message,
        code: "API_ERROR",
        status: error.response?.status,
      },
    };
  }
}
