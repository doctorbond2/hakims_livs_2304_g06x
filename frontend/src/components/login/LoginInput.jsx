import React from "react";
import * as shad from "@/components/ui/shadBarrel";
const LoginInput = ({ setLoginData, loginData }) => {
  return (
    <>
      {" "}
      <div className="space-y-1">
        <shad.Label htmlFor="username" required={true}>
          Användarnamn
        </shad.Label>
        <shad.Input
          id="username"
          defaultValue=""
          onChange={(e) => {
            setLoginData({ ...loginData, username: e.target.value });
          }}
        />
      </div>
      <div className="space-y-1">
        <shad.Label htmlFor="password" required={true}>
          Lösenord
        </shad.Label>
        <shad.Input
          id="password"
          value={loginData.password}
          onChange={(e) => {
            setLoginData({ ...loginData, password: e.target.value });
          }}
        />
      </div>
    </>
  );
};

export default LoginInput;
