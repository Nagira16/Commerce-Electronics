import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StepProps } from "@/types";
import { Eye, EyeClosed, Lock, LockKeyhole } from "lucide-react";
import React, { useState } from "react";

const Step2 = ({ nextStep, prevStep }: StepProps) => {
  const [showPassword1, setShowPassword1] = useState(false);

  const [showPassword2, setShowPassword2] = useState(false);

  return (
    <article className="space-y-10 my-10">
      <div className="flex justify-center items-center gap-2 relative">
        <Label htmlFor="password">
          <Lock />
        </Label>
        <Input
          type={showPassword1 ? "text" : "password"}
          placeholder="Enter your password"
          name="password"
          className="h-8 ring-2 ring-blue-500 focus:!ring-3 focus:!ring-blue-600"
          minLength={8}
          required
        />
        <button
          type="button"
          className="absolute top-1 right-2"
          onClick={() => setShowPassword1((prev) => !prev)}
        >
          {showPassword1 ? <Eye /> : <EyeClosed />}
        </button>
      </div>

      <div className="flex justify-center items-center gap-2 relative">
        <Label htmlFor="email">
          <LockKeyhole />
        </Label>
        <Input
          type={showPassword2 ? "text" : "password"}
          placeholder="Enter your confirm password"
          name="confirm_password"
          className="h-8 ring-2 ring-blue-500 focus:!ring-3 focus:!ring-blue-600"
          minLength={8}
          required
        />
        <button
          type="button"
          className="absolute top-1 right-2"
          onClick={() => setShowPassword2((prev) => !prev)}
        >
          {showPassword2 ? <Eye /> : <EyeClosed />}
        </button>
      </div>
    </article>
  );
};

export default Step2;
