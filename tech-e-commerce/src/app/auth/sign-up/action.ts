"use server";

import { FormReturnType } from "@/types";
import { User } from "@prisma/client";
import { uploadFile } from "../../../actions/fileUpload";
import { getUserByEmail, getUserByUsername } from "../../../actions/user";
import prisma from "@/utils/prisma/prisma";
import { AuthResponse } from "@supabase/supabase-js";
import bcrypt from "bcryptjs";
import { createClient } from "@/utils/supabase/server";

export const SignUpWithEmail = async (
  prevState: FormReturnType<null>,
  formData: FormData
): Promise<FormReturnType<null>> => {
  try {
    const supabase = await createClient();

    let username = formData.get("username") as string;
    let email = formData.get("email") as string;
    let password = formData.get("password") as string;
    let confirm_password = formData.get("confirm_password") as string;
    let avatarFile = formData.get("avatarFile") as File;
    let address = formData.get("address") as string;

    username.toLocaleLowerCase().trim();
    email.toLocaleLowerCase().trim();
    password.toLocaleLowerCase().trim();
    confirm_password.toLocaleLowerCase().trim();

    const usernameExist: User | null = await getUserByUsername(username);
    if (usernameExist) {
      return {
        success: false,
        message: "Username already token",
        result: null,
      };
    }

    const emailEsist: User | null = await getUserByEmail(email);
    if (emailEsist) {
      return { success: false, message: "Email already used", result: null };
    }

    if (password !== confirm_password) {
      return {
        success: false,
        message: "Password not matched with Confirm Password",
        result: null,
      };
    }

    let avatarUrl = "/uploads/DefaultIcon.png";

    if (avatarFile.size > 0) {
      const fileUrl = await uploadFile(avatarFile);
      if (fileUrl) {
        avatarUrl = fileUrl;
      }
    }

    const hashedPassword: string = await bcrypt.hash(password, 10);

    const { error }: AuthResponse = await supabase.auth.signUp({
      email,
      password,
    });

    if (error) {
      return { success: false, message: error.message, result: null };
    }

    const newUser: User = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
        avatarUrl,
      },
    });

    await prisma.shippingAddress.create({
      data: {
        userId: newUser.id,
        address: address,
      },
    });

    return { success: true, message: "Sign up successfully", result: null };
  } catch (error) {
    console.error(error);
    return { success: false, message: "Sign up failed", result: null };
  }
};

// const SignInWithGithub = async () => {};

// const SignInWithGoogle = async () => {};
