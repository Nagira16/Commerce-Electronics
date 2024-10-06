"use server";
import { Product } from "@prisma/client";
import prisma from "./prismaClient";

export const getAllProduct = async (): Promise<Product[]> => {
  return await prisma.product.findMany();
};
