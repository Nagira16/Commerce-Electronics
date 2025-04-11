"use client";

import { SignUpWithEmail } from "@/app/auth/sign-up/action";
import { useActionState, useEffect } from "react";
import Step1 from "./partials/Step1";
import Step2 from "./partials/Step2";
import Step3 from "./partials/Step3";
import Swal from "sweetalert2";

const SignUpForm = () => {
  const [state, formAction, isLoading] = useActionState(SignUpWithEmail, {
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
    }
  }, [state.message]);

  return (
    <form className="w-[350px] mx-auto" action={formAction}>
      <Step1 />
      <Step2 />
      <Step3 />
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

export default SignUpForm;
