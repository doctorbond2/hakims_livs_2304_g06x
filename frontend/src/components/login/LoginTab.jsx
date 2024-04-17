import * as shad from "@/components/ui/shadBarrel";
import LoginInput from "./LoginInput";
import LoginLogin from "./LoginLogin";
import LoginRegister from "./LoginRegister";
import { useAuth } from "@/utils/hooks/AuthContext";
import { useEffect } from "react";
export function TabsDemo() {
  const { login, register, loggedIn } = useAuth();
  useEffect(() => {
    console.log(loggedIn);
  }, [loggedIn]);
  return (
    <shad.Tabs defaultValue="loginTab" className="w-[400px] ">
      <shad.TabsList className="grid w-full grid-cols-2 bg-slate-100">
        <shad.TabsTrigger value="loginTab" className="bg-slate-100">
          Logga in
        </shad.TabsTrigger>
        <shad.TabsTrigger value="registerTab" className="bg-slate-100">
          Skapa nytt konto
        </shad.TabsTrigger>
      </shad.TabsList>
      <shad.TabsContent value="loginTab">
        <LoginLogin {...{ login }} />
      </shad.TabsContent>
      <shad.TabsContent value="registerTab">
        <LoginRegister {...{ register }} />
      </shad.TabsContent>
    </shad.Tabs>
  );
}

export default TabsDemo;
