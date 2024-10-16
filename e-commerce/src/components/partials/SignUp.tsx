"use client";

import { TabsContent } from "@radix-ui/react-tabs";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { signUp } from "@/actions/authAciton";
import { useRouter } from "next/navigation";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";

const SignUp = () => {
  const router: AppRouterInstance = useRouter();

  const signUpHandler = async (formData: FormData) => {
    const error: string | void = await signUp(formData);
    if (error) {
      alert(error);
    } else {
      router.push("/");
    }
  };

  return (
    <TabsContent value="signUp">
      <Card>
        <form action={signUpHandler}>
          <CardHeader>
            <CardTitle>SignUp</CardTitle>
            <CardDescription>Sign Up From Here !!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="username">UserName</Label>
              <Input
                name="username"
                id="username"
                type="text"
                placeholder="Alex"
                minLength={2}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                name="email"
                id="email"
                type="email"
                placeholder="alex@example.com"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="password">Password</Label>
              <Input
                name="password"
                id="password"
                type="password"
                placeholder="********"
                minLength={8}
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="confirmPassword">Confirm Password</Label>
              <Input
                name="confirmPassword"
                id="confirmPassword"
                type="password"
                minLength={8}
                placeholder="********"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">SignUp</Button>
          </CardFooter>
        </form>
      </Card>
    </TabsContent>
  );
};

export default SignUp;
