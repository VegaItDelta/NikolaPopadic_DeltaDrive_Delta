import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const token = useSelector((state) => state.auth.token);
  const isAuthenticated = token ? true : false;

  return (
    <Route
      {...rest}
      render={(props) =>
        //if isAuthenticated is true, show component
        isAuthenticated ? (
          <Component {...props} />
        ) : (
          // else redirect to the login page
          <Redirect
            to={{
              pathname: "/login",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default PrivateRoute;
