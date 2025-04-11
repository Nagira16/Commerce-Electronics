import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Mail, User } from "lucide-react";
import { JSX } from "react";

const Step1 = (): JSX.Element => {
  return (
    <article className="space-y-10">
      <div className="flex justify-center items-center gap-2">
        <Label htmlFor="username">
          <User />
        </Label>
        <Input
          type="text"
          placeholder="Enter your username"
          name="username"
          className="h-8 ring-2 ring-blue-500 focus:!ring-3 focus:!ring-blue-600"
          minLength={2}
          required
        />
      </div>

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
    </article>
  );
};

export default Step1;
