import { createClient } from "@/utils/supabase/server";

export default async function Home() {
  // const supabase = await createClient();

  // const {
  //   data: { user },
  // } = await supabase.auth.getUser();
  // console.log({ user });

  return (
    <div className="grid items-center justify-items-center min-h-screen">
      <p>as</p>
    </div>
  );
}
