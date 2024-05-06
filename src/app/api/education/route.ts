import { limiter } from "../config/limiter";
import clientPromise from "../../../../lib/mongodb";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const GET = async (request: NextRequest, response: NextResponse) => {
  try {

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
