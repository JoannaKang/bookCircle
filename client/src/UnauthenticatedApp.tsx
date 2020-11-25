import React, { useState, FunctionComponent, useEffect } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom"
import Search from './Pages/Search'
import AuthHeader from './Components/AuthHeader'
import Bookcase from './Pages/Bookcase'
import Friends from './Pages/Friends'
import Dashboard from './Pages/Dashboard'
import FriendSearch from './Pages/FriendSearch'
import Register from './Pages/Register'
import RegisterBookInfo from './Pages/RegisterBookInfo'
import { getUser, requestBook } from './ApiService/serverApiService'
import Welcome from './Pages/Welcome'
import { User, Book } from './Interfaces'

type unAuthAppProps = {
  // user: User,
  setUserLoggedIn: Function,
  getUserData: Function,
}

const UnauthenticatedApp: FunctionComponent<unAuthAppProps> = ({ setUserLoggedIn, getUserData }) => {
  console.log('UNAUTH')
  return (
    <Router>

  <AuthHeader />
    <Switch>
      <Route path="/welcome" >
          <Welcome setUserLoggedIn={setUserLoggedIn} getUserData={getUserData}></Welcome>
      </Route>
      <Route path="/register">
        <Register setUserLoggedIn={setUserLoggedIn} getUserData={getUserData}></Register>
      </Route>
    </Switch>
    </Router>

  )
}

export default UnauthenticatedApp;