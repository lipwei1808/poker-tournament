// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import clientPromise from "../../libs/mongodb";

type Data = {
  data: any;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  console.log("ADDING USer");
  const client = await clientPromise;
  const db = client.db("poker-tournament");
  const result = await db.collection("users").insertOne({});

  res.status(200).json({ data: result });
}
