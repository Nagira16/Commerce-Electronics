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

const SignUp = () => {
  const signUpHandler = (formData: FormData) => {
    const username = formData.get("username") as string;
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const confirmPassword = formData.get("confirmPassword") as string;
    if (password !== confirmPassword) return alert("password doesn't match");

    signUp(username, email, password);
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
                id="unsername"
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
