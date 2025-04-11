import SignInForm from "@/components/authForms/SignInForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JSX } from "react";

export default function SignIn(): JSX.Element {
  return (
    <div className="grid place-content-center h-screen w-screen">
      <Card className="w-[500px] h-fit text-center py-10 space-y-10 shadow-2xl">
        <CardHeader>
          <CardTitle>
            <h3 className="text-3xl font-semibold font-serif">Sign In</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignInForm />
        </CardContent>
      </Card>
    </div>
  );
}
