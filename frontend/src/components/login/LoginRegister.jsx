import * as shad from "@/components/ui/shadBarrel";
import React, { useEffect } from "react";
import LoginRegisterInput from "./LoginRegisterInput";
import { useState } from "react";
const LoginRegister = ({ register }) => {
  const [registerData, setregisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    username: "",
    password: "",
    password_again: "",
  });
  const submitRegister = async (e) => {
    e.preventDefault();
    console.log("SUBMIT!");
    try {
      if (registerData.password === registerData.password_again) {
        await register(registerData);
      }
      console.log("DUBMIT!");
    } catch (err) {
      console.log(err.message);
    }
  };
  useEffect(() => {
    console.log(registerData);
  }, [registerData]);
  return (
    <>
      <shad.Card>
        <shad.CardHeader>
          <shad.CardTitle>Registrera</shad.CardTitle>
          <shad.CardDescription>
            Maxa dina besparingar med Hakim!
          </shad.CardDescription>
        </shad.CardHeader>
        <form onSubmit={submitRegister}>
          <shad.CardContent className="space-y-2">
            <LoginRegisterInput {...{ registerData, setregisterData }} />
          </shad.CardContent>
          <shad.CardFooter>
            <shad.Button type={"submit"} className="bg-green-800">
              Skapa konto!
            </shad.Button>
          </shad.CardFooter>
        </form>
      </shad.Card>
    </>
  );
};

export default LoginRegister;
