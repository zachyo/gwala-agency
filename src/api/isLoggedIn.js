import React from "react";
import { useLocation, useHistory } from "react-router-dom";
import { useAuthContext } from "../context";

const IsLoggedIn = ({ component }) => {
  const { loggedIn } = useAuthContext();
  const location = useLocation();
  const history = useHistory();

  const redirectPath = () => {
    if (!loggedIn) {
      return "/";
    }
    return location.pathname;
  };

  React.useEffect(() => {
    if (!loggedIn) {
      history.replace("/");
    }
  }, [loggedIn, history]);

  return loggedIn ? <>{component}</> : null;
};

export default IsLoggedIn;
