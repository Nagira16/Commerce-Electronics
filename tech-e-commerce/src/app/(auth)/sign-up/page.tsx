import SignUpForm from "@/components/authForms/SignUpForm";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { JSX } from "react";

export default function SignUp(): JSX.Element {
  return (
    <div className="grid place-content-center h-screen w-screen">
      <Card className="w-[350px] h-fit text-center py-10 space-y-10 shadow-2xl">
        <CardHeader>
          <CardTitle>
            <h3 className="text-2xl font-semibold">Sign Up</h3>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <SignUpForm />
        </CardContent>
      </Card>
    </div>
  );
}
