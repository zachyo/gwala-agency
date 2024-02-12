import { useAuthContext } from "context";
import React, { ReactNode } from "react";
import { useLocation, Navigate } from "react-router-dom";

const IsLoggedIn = ({ component }) => {
  const { loggedIn } = useAuthContext();
  // console.log(loggedIn);
  const location = useLocation();
  const redirectPath = () => {
    if (!loggedIn) {
      return "/";
    }
    return location.pathname;
  };

//   useEffect(() => {
//     // This callback will run whenever the URL changes
//     console.log("URL changed to", location.pathname);
//     // You can add any logic here to respond to URL changes
//   }, [location]);
  return loggedIn ? (
    <>{component}</>
  ) : (
    <Navigate to={redirectPath()} replace />
  );
};

export default IsLoggedIn;
