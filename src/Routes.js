import React from "react";
import { Route, Switch } from "react-router-dom";
import Home from "./Views/Home";
import Items from "./Views/Items";
import Alerts from "./Views/Alerts";
import Activites from "./Views/Activities";
import Users from "./Views/Users";

function Routes() {
  return (
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/items' component={Items} />
      <Route exact path='/alerts' component={Alerts} />
      <Route exact path='/activites' component={Activites} />
      <Route exact path='/users' component={Users} />
    </Switch>
  );
}

export default Routes;
