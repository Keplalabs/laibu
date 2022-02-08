import type { NextApiRequest, NextApiResponse } from "next";
import prisma from "../../../prisma/client";
import { User } from '@prisma/client';
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const userData = req.body;
  if (req.method === "PUT") {
    const user = await prisma.user.update({
      where: {
        email: userData.email,
      },
      data: userData,
    });

    return res.json(user);
  } else if (req.method === "POST") {
    const user:User = await prisma.user.create({
      data: userData,
    });
    res.status(200).json(user);
  }
}
