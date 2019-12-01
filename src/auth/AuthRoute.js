import { Route, Redirect } from "react-router-dom";
import React from "react";
const AuthRoute = ({ component: Component, ...rest }) => {
    const token=localStorage.getItem('token');
  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Component {...props} />
        ) :(
          <Redirect
            to={{
              pathname: "/login-page",
              state: { from: props.location }
            }}
          />
        )
      }
    />
  );
};
export default AuthRoute;
