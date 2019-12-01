import { Route, Redirect } from "react-router-dom";
import React from "react";
const LoginAuth = ({ component: Component, ...rest }) => {
    const token=localStorage.getItem('token');

  return (
    <Route
      {...rest}
      render={props =>
        token ? (
          <Redirect
            to={{
              pathname: "/home",
              state: { from: props.location }
            }}
          />
        ) :(
          <Component {...props} />
        )
      }
    />
  );
};
export default LoginAuth;
