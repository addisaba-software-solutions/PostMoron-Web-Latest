import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import "./assets/css/fontawesome.min.css"


import "assets/css/nucleo-icons.css";
import "assets/scss/blk-design-system-react.scss?v=1.0.0";
import "assets/demo/demo.css";


import Index from "views/Index.jsx";

import SecondForm from "views/mainComponents/SecondForm.jsx";

import FourthPage from "views/mainComponents/FourthPage.jsx";
import LoginPage from "views/mainComponents/LoginPage.jsx";
import Home from "views/mainComponents/Home.jsx";
import Register from "views/mainComponents/RegisterPage.jsx";

import Message2 from "views/mainComponents/Message2.jsx";
import Explorer from "views/mainComponents/Explorer.jsx";
import MatchForm from "views/mainComponents/MatchForm.jsx";
import FormFirst from "./views/IndexSections/FormFirst.jsx";
import ProfilePageHeader from "./components/PageHeader/ProfilePageHeader.jsx";
import ProfilePage from "views/mainComponents/ProfilePage.jsx";
import Search from "views/Search.jsx";

import {Provider} from 'react-redux'
import Store from './store/store.js'
import LoginAuth from './auth/loginAuth'
import AuthRoute from './auth/AuthRoute'

let storeInstance = Store();
ReactDOM.render(
  <Provider store={storeInstance}>
   <BrowserRouter>

    <Switch>
        <Route
            path="/"
            component={Index}
            exact
          />
          <Route
            path="/second-form"
            component={SecondForm}
            exact
          />       
          <Route
            path="/first-form"
            component={FormFirst}
            exact
          /> 
           <Route
            path="/sign-up"
            component={Register}
            exact
          />
       <Route
        path="/fourth-form"
        component={FourthPage}
        exact
      />
      <LoginAuth
        path="/login-page"
        component={LoginPage}
        exact
      />
       <AuthRoute
        path="/home"
        component={Home}
        exact
      />
        <AuthRoute
        path="/pro-page"
        component={ProfilePageHeader}
        exact
      />
     <AuthRoute
        path="/profile-post"
        component={ProfilePage}
        exact
      />
     <Route
        path="/match-form"
        component={MatchForm}
        exact
      />
       <AuthRoute
        path="/msg-page"
        component={Message2}
        exact
      />
      <AuthRoute
        path="/explorer-page"
        component={Explorer}
        exact
      />
         <AuthRoute
        path="/query-result"
        component={Search}
        exact
      />
   
    </Switch>
  </BrowserRouter> </Provider>,
  document.getElementById("root")
);
