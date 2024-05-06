import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const middleware = (request: NextRequest) => {

  const apiKey = request.headers.get("API-Key");

  if (apiKey !== process.env.API_KEY) {
    return new NextResponse(null, {
      status: 401,
      statusText: "Invalid API Key",
      headers: { "Content-Type": "application/json" },
    });
  }

  return NextResponse.next();
};

export const config = { matcher: "/api/:path*" };
