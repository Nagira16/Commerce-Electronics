"use server";

import prisma from "@/lib/prismaClient";
import { createClient } from "@/lib/supabase/server";
import { User } from "@prisma/client";
import {
  AuthResponse,
  SupabaseClient,
  User as UserType,
} from "@supabase/supabase-js";
import bcrypt from "bcrypt";

export const signUp = async (formData: FormData): Promise<string | void> => {
  try {
    const supabase: SupabaseClient = await createClient();

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
    const supabase: SupabaseClient = await createClient();

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

export const signOut = async (): Promise<void> => {
  const supabase: SupabaseClient = await createClient();

  const { error } = await supabase.auth.signOut();

  if (error) {
    console.error("Sign-out error:", error.message);
  } else {
    console.log("Successfully signed out.");
  }
};

export const checkUserSession = async (): Promise<UserType | null> => {
  const supabase: SupabaseClient = await createClient();

  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();

  if (error) {
    console.error("Error fetching session:", error);
    return null;
  }

  if (user) {
    return user;
  } else {
    return null;
  }
};
