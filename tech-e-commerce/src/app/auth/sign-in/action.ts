"use server";

import { getUserByEmail } from "@/actions/user";
import { FormReturnType } from "@/types";
import bcrypt from "bcryptjs";
import { createClient } from "@/utils/supabase/server";
import { User } from "@prisma/client";
import { AuthTokenResponse } from "@supabase/supabase-js";

export const SignInWithEmail = async (
  prevState: FormReturnType<null>,
  formData: FormData
): Promise<FormReturnType<null>> => {
  try {
    const supabase = await createClient();

    let email = formData.get("email") as string;
    let password = formData.get("password") as string;

    email.toLocaleLowerCase().trim();
    password.toLocaleLowerCase().trim();

    const user: User | null = await getUserByEmail(email);
    if (!user) {
      return {
        success: false,
        message: "Email Or Password is wrong",
        result: null,
      };
    }

    const isMatch: boolean = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return {
        success: false,
        message: "Email Or Password is wrong",
        result: null,
      };
    }

    const { error }: AuthTokenResponse = await supabase.auth.signInWithPassword(
      {
        email,
        password,
      }
    );
    if (error) {
      return { success: false, message: error.message, result: null };
    }

    return { success: true, message: "Sign in successfully", result: null };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Sign in failed", result: null };
  }
};
