import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Eye, EyeClosed, Lock, Mail } from "lucide-react";
import React, { useState } from "react";

const SignInStep = () => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <article className="space-y-10">
      <div className="flex justify-center items-center gap-2">
        <Label htmlFor="email">
          <Mail />
        </Label>
        <Input
          type="email"
          placeholder="Enter your email"
          name="email"
          className="h-8 ring-2 ring-blue-500 focus:!ring-3 focus:!ring-blue-600"
          required
        />
      </div>

      <div className="flex justify-center items-center gap-2 relative">
        <Label htmlFor="password">
          <Lock />
        </Label>
        <Input
          type={showPassword ? "text" : "password"}
          placeholder="Enter your password"
          name="password"
          className="h-8 ring-2 ring-blue-500 focus:!ring-3 focus:!ring-blue-600"
          minLength={8}
          required
        />
        <button
          type="button"
          className="absolute top-1 right-2"
          onClick={() => setShowPassword((prev) => !prev)}
        >
          {showPassword ? <Eye /> : <EyeClosed />}
        </button>
      </div>
    </article>
  );
};

export default SignInStep;
