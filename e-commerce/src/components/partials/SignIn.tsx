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

const SignIn = () => {
  const signInHandler = () => {};
  return (
    <TabsContent value="signIn">
      <Card>
        <form>
          <CardHeader>
            <CardTitle>SignIn</CardTitle>
            <CardDescription>Sign In From Here !!</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                placeholder="alex@example.com"
                type="email"
                required
              />
            </div>
            <div className="space-y-1">
              <Label htmlFor="Password">Password</Label>
              <Input
                id="Password"
                placeholder="********"
                minLength={8}
                type="password"
                required
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button type="submit">SignIn</Button>
          </CardFooter>
        </form>
      </Card>
    </TabsContent>
  );
};

export default SignIn;
