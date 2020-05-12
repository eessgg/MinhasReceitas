import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import Login from './pages/Login'
import BoardReceitas from "./pages/BoardReceitas";
import New from './pages/New'


export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Login} />
        <Route path="/boardreceitas" component={BoardReceitas} />
        <Route path="/new" component={New} />
      </Switch>
    </BrowserRouter>
  );
}