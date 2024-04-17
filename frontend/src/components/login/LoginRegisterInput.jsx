import React from "react";
import * as shad from "@/components/ui/shadBarrel";
const LoginRegisterInput = ({}) => {
  return (
    <>
      {" "}
      <div className="space-y-1">
        <shad.Label htmlFor="username">Användarnamn</shad.Label>
        <shad.Input id="username" defaultValue="" />
      </div>
      <div className="space-y-1">
        <shad.Label htmlFor="password">Lösenord</shad.Label>
        <shad.Input id="password" defaultValue="" />
        <shad.Label htmlFor="password">Upprepa lösenord</shad.Label>
        <shad.Input id="password" defaultValue="" />
      </div>
    </>
  );
};

export default LoginRegisterInput;
