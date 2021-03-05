import * as React from "react";
import { Route } from 'react-router-dom';

import Search from '../containers/Search'
import SingleMovie from '../components/SingleMovie'
import AllMovies from '../components/AllMovies'

import Navbars from '../components/Navbars'
import Carrousel from '../components/Carrousel'
import ImageCarousel from '../components/ImageCarousel'
import ActorsCarousel from '../components/ActorsCarousel'
import Footer from '../components/Footer'
import Login from '../containers/Login'
import Register from '../containers/Register'
//Redux

import {getSingleUser, sessionUser} from '../../state/singleUser'

import {useDispatch} from 'react-redux';
// import {getLoggedUser} from '../../state/singleUser'

import AllUsers from '../components/AllUsers'

export default function App() {

    // const dispatch = useDispatch();
    // React.useEffect(() => {
    //     dispatch(getLoggedUser())

    // })

    return (
        <>  
        <style>{'body { background-color: wheat; }'}</style>
            <Navbars/>
            
            <Route exact path = '/signin' component ={Login}/>
            <Route exact path = '/' component ={Carrousel}/>

            <Route exact path ='/search' component ={AllMovies}/>
            <Route exact path ='/users' component ={AllUsers}/>
            <Route exact path = '/register' component ={Register}/>
            <Route exact path ='/movie/:id' component ={SingleMovie}/>
            <Footer/>
        </>
    );
}
