import { limiter } from "../config/limiter";
import clientPromise from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const GET = async (request: NextRequest, response: NextResponse) => {
  try {
    const apiKey = request.headers.get("API-Key");

    if (apiKey !== process.env.API_KEY) {
      return new NextResponse(null, {
        status: 401,
        statusText: "Invalid API Key",
        headers: { "Content-Type": "text/plain" },
      });
    }

    const remaining = await limiter.removeTokens(1);
    console.log("Remaining Tokens: " + remaining);

    if (remaining < 0) {
      return new NextResponse(null, {
        status: 429,
        statusText: "Too Many Requests For This Session",
        headers: {
          "Content-Type": "text/plain",
        },
      });
    }

    const client = await clientPromise;
    const database = client.db(process.env.DATABASE_NAME);
    const education = await database
      .collection(process.env.EDUCATION_DATABASE_NAME!)
      .find({})
      .toArray();

    return NextResponse.json({ message: "OK", education }, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ message: "Error", error }, { status: 500 });
  }
};
