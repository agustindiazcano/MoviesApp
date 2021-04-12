import React, { useState} from 'react';
import { Link } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Badge } from 'react-bootstrap';
import SearchComponent from '../containers/Search'
import AllUsers from './AllUsers'
import { Turn as Hamburger } from 'hamburger-react'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import UserLogged from './UserLogged'
import Logout from './Logout'

import { CgUserList } from "react-icons/cg";

import { FaBeer, GiLotus, GiCottonFlower, IoIosAddCircleOutline, MdAddToPhotos, MdSearch, HiOutlineLogin, HiOutlineLogout, HiOutlineX, MdStar, MdPerson, MdAdd } from "react-icons/gi";
// logo GiLotus
// import { faCoffee } from '@fortawesome/free-solid-svg-icons'

{/* <Hamburger color="#00072D" toggled={isOpen} toggle={setOpen} /> */}

function Navbars() {
  const [isOpen, setOpen] = useState(false)
  return (
    <div className="sticky">

      <Navbar className="color-nav" bg="color-nav" expand="lg" >

        <Navbar.Brand href="/"> 
        <span className="coffee coffee2"> <GiCottonFlower className="coffee2 "/><span className="coffee2 fuenteNueva2">Orchid</span></span>

 
        </Navbar.Brand>

        <SearchComponent type="text" placeholder="Search" className="mr-sm-2 text-secondary" />
        <Link to="/users">
        <CgUserList className="letrasbotonnav" />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Form inline>


          </Form>

        </Navbar.Collapse>
        <Nav className="mr-auto">

        <UserLogged/> 

        <Link to="/signin">
        <button className="saldemesa fuenteTexto btn text-secondary " >Login</button>
        </Link>

        <Link to="/register">
          <button className="btn saldemesa fuenteTexto text-secondary" to="/register" >Register</button>
        </Link>
        { UserLogged ? <Logout/>: null}
        

        </Nav>
      </Navbar>

    </div>
  )
}

export default Navbars;