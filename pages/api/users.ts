import { PrismaClient } from '@prisma/client'
import type { NextApiRequest, NextApiResponse } from 'next';
const prisma=new PrismaClient()
type User={
  email:string,
  name:string,
  year:number,
  semester:number
  registeredUnits:string[]
}
export default async function handle(req:NextApiRequest, res:NextApiResponse) {
  const user:User={
    email:"dummy@gmail.com",
    name:"alex",
    year:4,
    semester:2,
    registeredUnits:['SPH401','SPH402']
  }
  const users = await prisma.user.create({data:user})
  console.log(users)
  res.json(users)

}