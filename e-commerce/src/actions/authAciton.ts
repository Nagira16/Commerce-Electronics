"use server";

import { supabase } from "@/lib/supabase";
import { AuthResponse } from "@supabase/supabase-js";

export const signUp = async (
  username: string,
  email: string,
  password: string
) => {
  try {
    const user: AuthResponse = await supabase.auth.signUp({
      email,
      password,
    });

    console.log(user);
  } catch (error) {
    console.error(error);
  }
};
