import { User } from "@prisma/client";
import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
export default async function handle(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userData: User = req.body;
  if (req.method === "POST") {
    const user = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });
    res.json(user);
  }
}
