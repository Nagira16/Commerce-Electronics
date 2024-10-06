import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const auth = () => {
  return (
    <div className=" grid place-items-center m-10">
      <Tabs defaultValue="account" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="account">SignIn</TabsTrigger>
          <TabsTrigger value="password">SignUp</TabsTrigger>
        </TabsList>
        <TabsContent value="account">
          <Card>
            <form>
              <CardHeader>
                <CardTitle>SignIn</CardTitle>
                <CardDescription>
                  Make changes to your account here. Click save when you're
                  done.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="nameOrEmail">Username or Email</Label>
                  <Input
                    id="nameOrEmail"
                    placeholder="alex@example.com"
                    minLength={2}
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
        <TabsContent value="password">
          <Card>
            <form>
              <CardHeader>
                <CardTitle>SignUp</CardTitle>
                <CardDescription>
                  Change your password here. After saving, you'll be logged out.
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-2">
                <div className="space-y-1">
                  <Label htmlFor="username">UserName</Label>
                  <Input
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
                    id="email"
                    type="email"
                    placeholder="alex@example.com"
                    required
                  />
                </div>
                <div className="space-y-1">
                  <Label htmlFor="password">Password</Label>
                  <Input
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
      </Tabs>
    </div>
  );
};

export default auth;
