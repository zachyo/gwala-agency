import React, { useContext, Suspense, useEffect, lazy } from "react";
import {
  Switch,
  Route,
  Redirect,
  useLocation,
  useHistory,
} from "react-router-dom";
import routes from "../routes";

import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Main from "../containers/Main";
// import ThemedSuspense from "../components/ThemedSuspense";
import { SidebarContext } from "../context/SidebarContext";
import ProgressBar from "../components/ProgressBar";
import { useAuthContext } from "../context";

const Page404 = lazy(() => import("../pages/404"));

function Layout() {
  const { isSidebarOpen, closeSidebar } = useContext(SidebarContext);
  let location = useLocation();
  const { isLoggedIn } = useAuthContext();
  const history = useHistory();

  useEffect(() => {
    closeSidebar();
  }, [location]);
  useEffect(() => {
    // Check if the user is not logged in
    if (!isLoggedIn) {
      // Redirect to the login page
      history.push("/login");
    }
  }, [isLoggedIn, history]);

  return (
    <div
      className={`flex h-screen bg-gray-50 dark:bg-gray-900 ${
        isSidebarOpen && "overflow-hidden"
      }`}
    >
      <Sidebar />

      <div className="flex flex-col flex-1 w-full">
        <Header />
        <Main>
          <Suspense fallback={<ProgressBar />}>
            <Switch>
              {routes.map((route, i) => {
                return route.component ? (
                  <Route
                    key={i}
                    exact={true}
                    path={`/app${route.path}`}
                    render={(props) => <route.component {...props} />}
                  />
                ) : // <PrivateRoute route={route} key={i} index={i} />
                null;
              })}
              {/* <PrivateRoute route={routes[1]} /> */}
              <Redirect exact from="/app" to="/app/dashboard" />
              <Route component={Page404} />
            </Switch>
          </Suspense>
        </Main>
      </div>
    </div>
  );
}

export default Layout;
