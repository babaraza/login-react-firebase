import React, { useEffect } from "react";
import "./App.css";
import firebase from "firebase";
import { auth } from "./firebase";
import Login from "./Login";
import { userState, customMessageState } from "./atoms";
import { useRecoilValue, useRecoilState } from "recoil";

function App() {
  const [user, setUser] = useRecoilState(userState);
  const customMessage = useRecoilValue(customMessageState);

  useEffect(() => {
    auth.setPersistence(firebase.auth.Auth.Persistence.NONE);
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        setUser(null);
      }
    });
  }, [setUser]);

  return (
    <div className="app">
      <Login />
      <div className="debug">
        <span>The user is: {user ? user.email : "no user signed in"}</span>
        <p>
          <strong>{customMessage ? customMessage : ""}</strong>
        </p>
      </div>
    </div>
  );
}

export default App;
