import React, { useState, useEffect } from "react";
import * as shad from "@/components/ui/shadBarrel";
import LoginInput from "./LoginInput";
const LoginLogin = ({ login }) => {
  const [loginTry, setLoginTry] = useState(false);
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const submitLogin = async (e) => {
    e.preventDefault();
    console.log(loginData);
    try {
      await login(loginData);
    } catch (err) {
      console.log(err.message);
    }
  };

  return (
    <shad.Card>
      <shad.CardHeader>
        <shad.CardTitle>VÄLKOMMEN!</shad.CardTitle>
        <shad.CardDescription>
          Logga in för att få handla av Hakim!
        </shad.CardDescription>
      </shad.CardHeader>
      <form onSubmit={submitLogin}>
        <shad.CardContent className="space-y-2 ">
          <LoginInput {...{ setLoginData, loginData }} />
        </shad.CardContent>
        <shad.CardFooter>
          <shad.DialogClose>
            <shad.Button className="bg-green-800" type={"submit"}>
              Logga in
            </shad.Button>
          </shad.DialogClose>
        </shad.CardFooter>
      </form>
    </shad.Card>
  );
};

export default LoginLogin;
