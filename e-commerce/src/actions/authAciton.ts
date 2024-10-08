"use server";

import prisma from "@/lib/prismaClient";
import { supabase } from "@/lib/supabase";
import { User } from "@prisma/client";
import { AuthResponse } from "@supabase/supabase-js";
import bcrypt from "bcrypt";

export const signUp = async (
  username: string,
  email: string,
  password: string
): Promise<void> => {
  try {
    const { data, error }: AuthResponse = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) throw new Error(error.message);

    const hashedPassword: string = await bcrypt.hash(password, 10);

    const user: User = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    console.log("user created", user);
  } catch (error) {
    console.error(error);
  }
};
