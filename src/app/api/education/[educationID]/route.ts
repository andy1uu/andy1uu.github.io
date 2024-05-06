import clientPromise from "../../../../lib/mongodb";
import { limiter } from "@/app/limiter";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const GET = async (request: NextRequest, response: NextResponse) => {
  try {

    const remaining = await limiter.removeTokens(1);
    console.log("Remaining Tokens: " + remaining);

    if (remaining < 0) {
      return new NextResponse(null, {
        status: 429,
        statusText: "Too Many Requests For This Session",
        headers: {
          "Access-Control-Allow-Origin": "*",
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

export const PUT = async (request: NextRequest, response: NextResponse) => {
  try {
    const remaining = await limiter.removeTokens(1);
    console.log("Remaining Tokens: " + remaining);

    if (remaining < 0) {
      return new NextResponse(null, {
        status: 429,
        statusText: "Too Many Requests For This Session",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/plain",
        },
      });
    }

    // Change this to update logic
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

export const DELETE = async (request: NextRequest, response: NextResponse) => {
  try {
    const remaining = await limiter.removeTokens(1);
    console.log("Remaining Tokens: " + remaining);

    if (remaining < 0) {
      return new NextResponse(null, {
        status: 429,
        statusText: "Too Many Requests For This Session",
        headers: {
          "Access-Control-Allow-Origin": "*",
          "Content-Type": "text/plain",
        },
      });
    }

    // Change this to delete logic
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