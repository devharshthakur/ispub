import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const url = new URL(request.url);
  const packagename = url.searchParams.get("packageName");

  if (!packagename) {
    return NextResponse.json({
      success: false,
      error: {
        message: "Package name is required",
        code: "MISSING_PACKAGE_NAME",
      },
    });
  }

  try {
    const response = await axios.get(`https://registry.npmjs.org/${packagename}`);

    if (response.status === 404) {
      return NextResponse.json({
        success: true,
        isAvailable: true,
      });
    } else if (response.status === 200) {
      return NextResponse.json({
        success: true,
        isAvailable: false,
      });
    } else {
      return NextResponse.json({
        success: false,
        error: {
          message: `Unexpected response from npm registry: ${response.status}`,
          code: "UNEXPECTED_RESPONSE",
          status: response.status,
        },
      });
    }
  } catch (error: any) {
    console.error("Error checking npm package:", error);
    return NextResponse.json({
      success: false,
      error: {
        message: "Failed to connect to npm registry. Please check your internet connection.",
        code: "CONNECTION_ERROR",
        status: error.response?.status,
      },
    });
  }
}
