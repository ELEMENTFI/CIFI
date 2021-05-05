import React from "react";
import { Route, Redirect } from "react-router-dom";
const AdminRoute = ({ component: Component, ...rest }) => {

    // <AdminRoute path="/backupdata" component={Backup} />
  const isAdminUser = () => {

    const authToken = localStorage.getItem("myPhoneNumber");
    const authTokens = localStorage.getItem("passwordPhone");
    if (authToken === null && authTokens === null) {
      return false;
    } else {
      return true;
    //   isAdmin(JSON.parse(authToken).user.email);
    }
  };

  return (
    <Route
      {...rest}
      render={(props) =>
        isAdminUser() ? (
          // true ? (
          <Component {...props} />
        ) : (
          <Redirect
            to={{
              pathname: "/",
              state: { from: props.location },
            }}
          />
        )
      }
    />
  );
};

export default AdminRoute;