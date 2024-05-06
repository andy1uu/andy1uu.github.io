import clientPromise from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const GET = async (request: NextRequest, response: NextResponse) => {
  try {
    const apiKey = request.headers.get("API_KEY");

    if (apiKey !== process.env.REACT_APP_API_KEY) {
      return new NextResponse(null, {
        status: 401,
        statusText: "Invalid API Key",
        headers: { "Content-Type": "application/json" },
      });
    }

    const client = await clientPromise;
    const database = client.db(process.env.DATABASE_NAME);
    const education = await database
      .collection(process.env.EDUCATION_DATABASE_NAME!)
      .find({})
      .toArray();

    return new NextResponse(JSON.stringify(education), {
      status: 200,
      statusText: "OK",
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    return new NextResponse(JSON.stringify(error), {
      status: 500,
      statusText: "Internal Server Error",
      headers: {
        "Content-Type": "application/json",
      },
    });
  }
};
