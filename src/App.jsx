import React, { Fragment } from "react";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

 import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import Home from "./Components/Home";
import Register from "./Components/Register";

import Signin from './Components/Signin';
import Orders from "./Components/Orders";
import Menu from "./Components/Menu";
import Phone from "./Components/Phone";
import Landing from "./Components/Landing";



const App = () => {
  return (
    <Router>
      <header>
        <Navbar />
      </header>
      <ToastContainer/>
      <Switch>
        <Route path='/' exact>
          <Home />
        </Route>
        <Route path='/signin' exact>
        <Register />

        </Route>
        <Route path='/login' exact>
          <Signin />
        </Route>
        <Route path='/orders' exact>
          < Orders />
        </Route>
        <Route path='/menu' exact>
          < Menu />
        </Route>
        <Route path='/phone' >
          <Phone/>
        </Route>
        <Route path='/landingpage' >
          <Landing/>
        </Route>
      </Switch>
    </Router>
  );
};

export default App;
