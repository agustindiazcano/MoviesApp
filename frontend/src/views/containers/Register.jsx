import React, { useState } from "react";
import axios from "axios";
import { Button, Form } from 'react-bootstrap';

function Register() {

    const [registerUsername, setRegisterUsername] = useState("");
    const [registerPassword, setRegisterPassword] = useState("");

    const [data, setData] = useState(null);

    const register = () => {
        axios({
          method: "POST",
          data: {
            username: registerUsername,
            password: registerPassword,
          },
          withCredentials: true,
          url: "http://localhost:5000/register",
        }).then((res) => console.log(res));
      };

    return(
        <div>

        <div className="paddingTodo">
        <h1>Create account</h1>
        <input
          placeholder="username"
          onChange={(e) => setRegisterUsername(e.target.value)}
        />
        <input
          placeholder="password"
          onChange={(e) => setRegisterPassword(e.target.value)}
        />
        <button onClick={register}>Register</button>
      </div>
        </div>
    )

}

export default Register;