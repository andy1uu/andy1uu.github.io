import { NextRequest, NextResponse } from "next/server";

const allowedOrigins =
  process.env.NODE_ENV === "production"
    ? ["https://andyluu.vercel.app"]
    : ["http://localhost:3000"];

export const middleware = (request: NextRequest) => {
  const origin = request.headers.get("origin");

     if (origin && !allowedOrigins.includes(origin) || !origin) {
    return new NextResponse(null, {
      status: 400,
      statusText: "Bad Request",
      headers: { "Content-Type": "text/plain" },
    });
  } 

  const apiKey = request.headers.get("API-Key");

  if (apiKey !== process.env.API_KEY) {
    return new NextResponse(null, {
      status: 401,
      statusText: "Invalid API Key",
      headers: { "Content-Type": "text/plain" },
    });
  }

  return NextResponse.next();
};

export const config = { matcher: "/api/:path*" };
