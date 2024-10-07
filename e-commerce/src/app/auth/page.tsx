import SignIn from "@/components/partials/SignIn";
import SignUp from "@/components/partials/SignUp";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";

const auth = () => {
  return (
    <div className=" grid place-items-center m-10">
      <Tabs defaultValue="signIn" className="w-[400px]">
        <TabsList className="grid w-full grid-cols-2">
          <TabsTrigger value="signIn">SignIn</TabsTrigger>
          <TabsTrigger value="signUp">SignUp</TabsTrigger>
        </TabsList>

        {/* SignIn */}
        <SignIn />

        {/* SignUp */}
        <SignUp />
      </Tabs>
    </div>
  );
};

export default auth;
