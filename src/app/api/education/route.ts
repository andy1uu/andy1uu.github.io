import clientPromise from "../../../../lib/mongodb";

export const GET = async (request: Request, response: Response) => {
  try {
    const client = await clientPromise;
    const database = client.db(process.env.DATABASE_NAME);
    const education = await database
      .collection(process.env.EDUCATION_DATABASE_NAME!)
      .find({})
      .toArray();
    return Response.json({ message: "OK", education }, { status: 200 });
  } catch (error) {
    return Response.json({ message: "Error", error }, { status: 500 });
  }
};
