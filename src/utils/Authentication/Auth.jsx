import React, { useState, useContext } from "react";
import axios from "axios";
import AuthContext from "../../store/AuthContext";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

const Auth = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [register, setRegister] = useState();

  const authCtx = useContext(AuthContext);

  const navigate = useNavigate();

  const enterUsername = (e) => {
    setUsername(e.target.value);
  };

  const enterPassword = (e) => {
    setPassword(e.target.value);
  };

  const submitHandler = (e) => {
    console.log("are we logging in or register", register);
    e.preventDefault();

    const body = {
      username,
      password,
    };

    const url = "http://localhost:4000";

    axios
      .post(register ? `${url}/register` : `${url}/login`, body)
      .then((res) => {
        console.log("AFTER AUTH", res.data);
        authCtx.login(res.data.token, res.data.exp, res.data.userId);
        navigate("/");
      })
      .catch((err) => {
        setUsername("");
        setPassword("");
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
            onChange={enterUsername}
          />
          <input
            className="login-form-input"
            type="password"
            placeholder="Password"
            value={password}
            onChange={enterPassword}
          />
          <button className="login-btn" onClick={() => setRegister(false)}>
            Login
          </button>
          <button className="create-acct-btn" onClick={() => setRegister(true)}>
            Create new account
          </button>
        </form>
      </div>
    </main>
  );
};

export default Auth;
