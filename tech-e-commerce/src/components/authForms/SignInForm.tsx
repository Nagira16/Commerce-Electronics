"use client";

import { JSX, useActionState, useEffect } from "react";
import Swal from "sweetalert2";
import SignInStep from "./partials/SignInStep";
import { SignInWithEmail } from "@/app/auth/sign-in/action";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useRouter } from "next/navigation";

const SignInForm = (): JSX.Element => {
  const router: AppRouterInstance = useRouter();
  const [state, formAction, isLoading] = useActionState(SignInWithEmail, {
    success: false,
    message: "",
    result: null,
  });

  useEffect(() => {
    if (state.message) {
      Swal.fire({
        text: state.message,
        icon: state.success ? "success" : "error",
        toast: true,
        position: "top-right",
        showConfirmButton: false,
        timer: 3000,
      });

      if (state.success) router.push("/");
    }
  }, [state.message]);

  return (
    <form className="w-[350px] mx-auto" action={formAction}>
      <SignInStep />
      <div className="mt-10 flex justify-end">
        <button
          type="submit"
          className="text-white text-[15px] rounded-3xl py-2 px-4 bg-blue-500 hover:bg-blue-700"
          disabled={isLoading}
        >
          Sign Up
        </button>
      </div>
    </form>
  );
};

export default SignInForm;
