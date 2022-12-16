import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../store/AuthContext";
import "./Auth.css";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState(true);
  const [message, setMessage] = useState("");
  const [display, setDisplay] = useState("none");

  const authCtx = useContext(AuthContext);

  const submitHandler = (e) => {
    e.preventDefault();

    setDisplay("none");

    const body = {
      username,
      password,
    };

    const url = "http://localhost:3000";
    console.log("login");
    axios
      .post(`${url}/login`, body)
      .then((res) => {
        console.log("AFTER AUTH", res.data);
        authCtx.login(res.data.token, res.data.exp, res.data.userId);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <main>
      <div className="login-left-column">
        <h1 className="login-title">Lore</h1>
        <h2 className="login-mission-stmt">Preserve your family traditions.</h2>
      </div>
      <div className="login-right-column">
        <form className="login-form" onSubmit={submitHandler}>
          <input
            className="login-form-input"
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            className="login-form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login-btn">Login</button>
          <button className="create-acct-btn">Create new account</button>
        </form>
      </div>
    </main>
  );
};

export default Auth;
