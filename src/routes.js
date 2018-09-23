import React from "react";
import { Redirect } from "react-router";
import { App, Result } from "./containers";

const routes = [
  {
    path: "/",
    component: App,
    exact: true
  }
];

export default routes;
