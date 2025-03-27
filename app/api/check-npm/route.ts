import { NextResponse } from "next/server";
import axios from "axios";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const packageName = searchParams.get("packageName");

  if (!packageName) {
    return NextResponse.json(
      {
        success: false,
        error: {
          message: "Package name is required.",
          code: "MISSING_PACKAGE_NAME",
        },
      },
      { status: 400 }
    );
  }

  try {
    const response = await axios.get(`https://registry.npmjs.org/${packageName}`, {
      timeout: 5000,
    });

    if (response.status === 200) {
      return NextResponse.json({
        success: true,
        isAvailable: false,
      });
    }
  } catch (error: any) {
    if (error.response?.status === 404) {
      return NextResponse.json({
        success: true,
        isAvailable: true,
      });
    }

    console.error("Error checking npm package:", error);
    return NextResponse.json(
      {
        success: false,
        error: {
          message: `Failed to check package name: ${error.message}`,
          code: "PACKAGE_CHECK_ERROR",
        },
      },
      { status: error.response?.status || 500 }
    );
  }

  // If no response was sent until now, send a default error
  return NextResponse.json(
    {
      success: false,
      error: {
        message: "An unexpected error occurred.",
        code: "UNEXPECTED_ERROR",
      },
    },
    { status: 500 }
  );
}
