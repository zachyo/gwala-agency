// PrivateRoute.js
import React from "react";
import { Route, Redirect } from "react-router-dom";
import { useAuthContext } from "../context";
import { useLocation } from "react-router-dom/cjs/react-router-dom";

const PrivateRoute = ({ route, index }) => {
  const { isLoggedIn } = useAuthContext();
  const location = useLocation();
  console.log(location.pathname.slice(4))

  // console.log(index);
  return (
    <>
      <Route
        // key={i}
        exact={true}
        path={`/app${route.path}`}
        render={(props) =>
          isLoggedIn ? <route.component {...props} /> : <Redirect to="/login" />
        }
      />
      {/* <Route
        {...rest}
        render={(props) =>
          isLoggedIn ? <Component {...props} /> : <Redirect to="/login" />
        }
      /> */}
    </>
  );
};

export default PrivateRoute;
