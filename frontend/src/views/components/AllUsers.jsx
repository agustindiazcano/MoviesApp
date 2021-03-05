import React, { useState, useEffect } from "react";
import axios from "axios";
import { CgUserList } from "react-icons/cg";
import {getAllUsers} from '../../state/singleUser';
import { useSelector, useDispatch } from "react-redux";

//Traer todos los usuarios

function AllUsers() {
  const [data, setData] = useState(null);
  const allUsers = useSelector(state => state.singleUser)
  const dispatch = useDispatch();

  useEffect(() => {
    // Actualiza el título del documento usando la API del navegador
    dispatch(getAllUsers())
  }, []);


  // const handleClick = () => {
  // };

  return (
    <div>
      <div       className=" App paddingTodo">
        Users:
        {/* <button className="btn saldemesa" onClick={handleClick}>
          <CgUserList className="letrasbotonnav" />
        </button> */}

        <div>
        {allUsers.length > 0
          ? allUsers.slice(1).map((p) => {
              return (
                <div key={p.id}>
                  <h1>{p.username}</h1>
                </div>
              );
            })
          : null}
      </div>


      </div>
    </div>
  );
}

export default AllUsers;
