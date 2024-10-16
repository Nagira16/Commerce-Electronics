"use server";

import prisma from "@/lib/prismaClient";
import { supabase } from "@/lib/supabase";
import { User } from "@prisma/client";
import { AuthResponse } from "@supabase/supabase-js";
import bcrypt from "bcrypt";

export const signUp = async (formData: FormData): Promise<string | void> => {
  try {
    const username = formData.get("username") as string;
    let email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    if (password !== confirmPassword) return "password doesn't match";
    email = email.toLowerCase();

    const { data, error }: AuthResponse = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) return error.message;

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

export const signIn = async (formData: FormData): Promise<string | void> => {
  try {
    let email = formData.get("email") as string;
    const password = formData.get("password") as string;
    email = email.toLowerCase();

    const { data, error }: AuthResponse =
      await supabase.auth.signInWithPassword({
        email,
        password,
      });

    console.log(error, data);
    if (error) return "Invalid email or password";

    const user: User | null = await prisma.user.findFirst({
      where: {
        email,
      },
    });

    if (!user) return "Invalid email or password2";

    const isPasswordValid: boolean = await bcrypt.compare(
      password,
      user.password
    );

    if (!isPasswordValid) return "Invalid email or password3";

    console.log("User authenticated", user);
  } catch (error) {
    console.error("Sign-in error:", error);
    return "An error occurred during sign-in";
  }
};

export const checkUserSession = async () => {
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();

  if (error) {
    console.error("Error fetching session:", error);
    return null;
  }

  if (session) {
    return session;
  } else {
    return null;
  }
};
