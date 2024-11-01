"use client";

import { checkUserSession, signOut } from "@/actions/authAciton";
import { User } from "@supabase/supabase-js";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const AuthButton = () => {
  const router: AppRouterInstance = useRouter();
  const path: string = usePathname();
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const fetchSession = async (): Promise<void> => {
      const currentUser: User | null = await checkUserSession();

      setUser(currentUser);
    };

    fetchSession();
  }, [path]);

  const handleSignOut = async (): Promise<void> => {
    await signOut();
    setUser(null);
  };

  return (
    <button onClick={user ? handleSignOut : () => router.push("/auth")}>
      {user ? "Sign Out" : "Sign In"}
    </button>
  );
};

export default AuthButton;
