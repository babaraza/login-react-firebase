import React, { useState } from "react";
import { auth } from "./firebase";
import "./Login.css";
import { customMessageState } from "./atoms";
import { useSetRecoilState } from "recoil";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const setCustomMessage = useSetRecoilState(customMessageState);

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then((auth) => {
        setCustomMessage(`Logged in as ${auth.user.email}`);
      })
      .catch((error) => {
        setCustomMessage(error.message);
      });
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        setCustomMessage(`User ${auth.user.email} created!`);
      })
      .catch((error) => {
        setCustomMessage(error.message);
      });
  };

  return (
    <div className="login">
      <form className="login__form">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login__formButton" type="submit" onClick={signIn}>
          Log In
        </button>
      </form>
      <button onClick={register}>Register</button>
    </div>
  );
}

export default Login;
