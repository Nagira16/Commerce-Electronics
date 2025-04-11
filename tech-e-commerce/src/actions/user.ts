import prisma from "@/lib/prisma";
import { User } from "@prisma/client";

export const getUserByEmail = async (email: string): Promise<User | null> => {
  try {
    return await prisma.user.findUnique({
      where: { email },
    });
  } catch (error) {
    console.error(error);
    throw Error("Error: getUserByEmail");
  }
};

export const getUserByUsername = async (
  username: string
): Promise<User | null> => {
  try {
    return await prisma.user.findUnique({
      where: {
        username,
      },
    });
  } catch (error) {
    throw Error("Error getUserByUsername");
  }
};
