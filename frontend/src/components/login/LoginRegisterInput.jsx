import React from 'react';
import * as shad from '@/components/ui/shadBarrel';
const LoginRegisterInput = ({ registerData, setregisterData }) => {
  return (
    <>
      {' '}
      <div className="flex">
        <div className="space-y-1">
          <shad.Label htmlFor="username">Förnamn</shad.Label>
          <shad.Input
            required={'true'}
            id="firstname"
            type="text"
            value={registerData.firstName}
            onChange={(e) => {
              setregisterData({ ...registerData, firstName: e.target.value });
            }}
          />
        </div>
        <div className="space-y-1">
          <shad.Label htmlFor="username">Efternamn</shad.Label>
          <shad.Input
            required={'true'}
            id="lastname"
            type="text"
            value={registerData.lastName}
            onChange={(e) => {
              setregisterData({ ...registerData, lastName: e.target.value });
            }}
          />
        </div>
      </div>
      <div className="space-y-1">
        <shad.Label htmlFor="username">Användarnamn</shad.Label>
        <shad.Input
          required={'true'}
          type="text"
          id="username"
          value={registerData.username}
          onChange={(e) => {
            setregisterData({ ...registerData, username: e.target.value });
          }}
        />
      </div>
      <div className="space-y-1">
        <shad.Label htmlFor="username">email</shad.Label>
        <shad.Input
          required={'true'}
          type="email"
          id="email"
          value={registerData.email}
          onChange={(e) => {
            setregisterData({ ...registerData, email: e.target.value });
          }}
        />
      </div>
      <div className="space-y-1">
        <shad.Label htmlFor="password">Lösenord</shad.Label>
        <shad.Input
          required={'true'}
          onChange={(e) => {
            setregisterData({ ...registerData, password: e.target.value });
          }}
          id="register-input-password"
          value={registerData.password}
          type={'password'}
        />
        <shad.Label htmlFor="password">Upprepa lösenord</shad.Label>
        <shad.Input
          required={'true'}
          onChange={(e) => {
            setregisterData({
              ...registerData,
              password_again: e.target.value,
            });
          }}
          id="register-input-password-again"
          value={registerData.password_again}
          type={'password'}
        />
      </div>
    </>
  );
};

export default LoginRegisterInput;
