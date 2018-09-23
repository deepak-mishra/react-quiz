import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Switch, Route, NavLink } from "react-router-dom";
import registerServiceWorker from "./registerServiceWorker";
import routes from "./routes";
import { App } from "./containers";

ReactDOM.render(
  <BrowserRouter>
    <div>
      <ul>
        <li>
          <NavLink to="/result" activeClassName="active">
            Home
          </NavLink>
        </li>
      </ul>
      <Switch>
        {routes.map((route, index) => (
          <Route
            key={index}
            path={route.path}
            component={route.component}
            exact={route.exact}
          />
        ))}
        <Route component={App} />
      </Switch>
    </div>
  </BrowserRouter>,
  document.getElementById("root")
);
registerServiceWorker();
