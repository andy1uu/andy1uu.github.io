import clientPromise from "../../../../../lib/mongodb";
import { limiter } from "@/app/limiter";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import type { Education } from "@/app/education/interfaces";
import { ObjectId } from "mongodb";

export const GET = async (
  request: NextRequest,
  { params }: { params: { educationID: string } },
  response: NextResponse,
) => {
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

    const educationID = params.educationID;

    const client = await clientPromise;
    const database = client.db(process.env.DATABASE_NAME);
    const result = await database
      .collection(process.env.EDUCATION_DATABASE_NAME!)
      .findOne({ _id: new ObjectId(educationID) });

    return new NextResponse(JSON.stringify(result), {
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

export const PUT = async (request: NextRequest, { params }: { params: { educationID: string } }, response: NextResponse) => {
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

    const educationID = params.educationID;

    const updatedEducation: Education =
      (await request.json()) as unknown as Education;

    const client = await clientPromise;
    const database = client.db(process.env.DATABASE_NAME);
    const result = await database
      .collection(process.env.EDUCATION_DATABASE_NAME!)
      .updateOne({ _id: new ObjectId(educationID) }, {$set: updatedEducation});

    return new NextResponse(JSON.stringify(result), {
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

export const DELETE = async (request: NextRequest,{ params }: { params: { educationID: string } }, response: NextResponse) => {
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

    const educationID = params.educationID;

    const client = await clientPromise;
    const database = client.db(process.env.DATABASE_NAME);
    const result = await database
      .collection(process.env.EDUCATION_DATABASE_NAME!)
      .deleteOne({ _id: new ObjectId(educationID) });

    return new NextResponse(JSON.stringify(result), {
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
