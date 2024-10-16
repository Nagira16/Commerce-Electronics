"use server";
import { Product } from "@prisma/client";
import prisma from "../lib/prismaClient";

export const getAllProduct = async (): Promise<Product[]> => {
  return await prisma.product.findMany();
};

// export const postProduct = async () => {
//   const username = await supabase
// }
