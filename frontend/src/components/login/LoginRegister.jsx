import * as shad from "@/components/ui/shadBarrel";
import React from "react";
import LoginRegisterInput from "./LoginRegisterInput";
import { useState } from "react";
const LoginRegister = ({}) => {
  const [registerData, setregisterData] = useState({
    username: "",
    password: "",
    password_again: "",
  });
  const submitRegister = async () => {
    console.log(registerData);
    // try {
    //   login();
    // } catch (err) {
    //   console.log(err.message);
    // }
  };
  return (
    <>
      {" "}
      COMING SOON
      <shad.Card>
        <shad.CardHeader>
          <shad.CardTitle>Registrera</shad.CardTitle>
          <shad.CardDescription>
            Maxa dina besparingar med Hakim!
          </shad.CardDescription>
        </shad.CardHeader>
        <shad.CardContent className="space-y-2">
          <LoginRegisterInput {...{ registerData, setregisterData }} />
        </shad.CardContent>
        <shad.CardFooter>
          <shad.DialogClose>
            <shad.Button>Skapa konto!</shad.Button>
          </shad.DialogClose>
        </shad.CardFooter>
      </shad.Card>
    </>
  );
};

export default LoginRegister;
