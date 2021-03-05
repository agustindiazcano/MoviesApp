import React, { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux'
import {getSingleUser} from '../../state/singleUser'

import {sessionUser} from '../../state/loggedUser'


function UserLogged() {
  const [data, setData] = useState(null);
  const loggedUse = useSelector(state => state.loggedUser)
  const dispatch = useDispatch()
  React.useEffect (() => {
    dispatch(sessionUser())
},[]) 

  return (
    <div>
      <div className="userlogueado">
        {loggedUse.username ? <span >{loggedUse.username} </span>: null}
      </div>
    </div>
  );
}

export default UserLogged;
