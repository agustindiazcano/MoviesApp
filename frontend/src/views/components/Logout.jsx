import React, { useState } from "react";
import axios from "axios";

import { logoutUser } from '../../state/loggedUser'
import UserLogged from './UserLogged'
import { useDispatch } from "react-redux";

function Logout() {

    const [logoutUsername, setLogoutUsername] = useState("");
    const [logoutPassword, setLogoutPassword] = useState("");
    const [data, setData] = useState(null);
    const dispatch = useDispatch()
    const logoutClick = () => {dispatch(logoutUser())}

    return(
        <div>

        <div>
        {UserLogged ? <button className=" text-secondary btn saldemesa " onClick={logoutClick}>Logout</button> : null}
      </div>

        </div>
    )

}

export default Logout;