import React, { useState, useEffect } from "react";
import * as shad from "@/components/ui/shadBarrel";
import LoginInput from "./LoginInput";
const LoginLogin = ({ login }) => {
  const [loginData, setLoginData] = useState({ username: "", password: "" });
  const submitLogin = async () => {
    console.log(loginData);
    // try {
    //   login();
    // } catch (err) {
    //   console.log(err.message);
    // }
  };

  return (
    <shad.Card>
      <shad.CardHeader>
        <shad.CardTitle>VÄLKOMMEN!</shad.CardTitle>
        <shad.CardDescription>
          Logga in för att få handla av Hakim!
        </shad.CardDescription>
      </shad.CardHeader>
      <shad.CardContent className="space-y-2">
        <LoginInput {...{ setLoginData, loginData }} />
      </shad.CardContent>
      <shad.CardFooter>
        <shad.Button className="bg-green-700" onClick={submitLogin}>
          Logga in
        </shad.Button>
      </shad.CardFooter>
    </shad.Card>
  );
};

export default LoginLogin;
