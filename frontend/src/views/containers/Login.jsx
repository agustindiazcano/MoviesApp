import React, { useState } from "react";
import axios from "axios";
import UserLogged from '../components/UserLogged'
//Login user
import { loginUser } from '../../state/loggedUser'
import { useDispatch } from "react-redux";
function Login() {

  const [loginUsername, setLoginUsername] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  

  const dispatch = useDispatch()
  const loginClick = () => {
    dispatch(loginUser({
      username: loginUsername,
      password: loginPassword
    }))
  }



  return (
    <div className="App paddingTodo">


      <div>
        <h1 className="fuenteNueva2">Login</h1>
        <input
          placeholder="username"
          type="text"
          
          onChange={(e) => setLoginUsername(e.target.value)}
        />
        <input
          placeholder="password"
          type="password"
          onChange={(e) => setLoginPassword(e.target.value)}
        />
        <button className="btn saldemesa " onClick={loginClick}><span className="letrasbotonnav">Login</span></button>
        <UserLogged />
      </div>

    </div>
  );
}

export default Login;
