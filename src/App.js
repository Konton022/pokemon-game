// import { useState } from "react";
import { useLocation, Route, Switch, Redirect } from "react-router-dom";
import { NotificationContainer } from "react-notifications";
import cn from "classnames";
import GamePage from "./routes/Game/Game";
import HomePage from "./routes/Home/Home";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import Footer from "./components/Footer/Footer";
import NotFound from "./routes/NotFound";
import AboutPage from "./routes/AboutPage";
import UserPage from "./routes/UserPage";

import "react-notifications/lib/notifications.css";
import s from "./App.module.css";
import ContactPage from "./routes/ContactPage";
import { FireBaseContext } from "./context/firebaseContext";
import Firebase from "./service/firebase";
import FirebaseClass from "./service/firebase";
import PrivateRoute from "./components/PrivateRoute";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAsync, selectUserLoading } from "./store/user";
const App = () => {
  const isUserLoading = useSelector(selectUserLoading);
  const location = useLocation();
  const isPadding =
    location.pathname === "/" || location.pathname === "/game/board";
  const dispath = useDispatch();
  useEffect(() => {
    dispath(getUserAsync());
  }, []);

  if (isUserLoading) {
    return "Loading....";
  }
  return (
    <FireBaseContext.Provider value={FirebaseClass}>
      <Switch>
        <Route path="/404" component={NotFound} />
        <Route>
          <>
            <MenuHeader bgActive={!isPadding} />
            <div className={cn(s.wrap, { [s.isHomePage]: isPadding })}>
              <Switch>
                <Route path="/" exact component={HomePage} />
                <Route path="/home" component={HomePage} />
                <PrivateRoute path="/game" component={GamePage} />
                <PrivateRoute path="/about" component={AboutPage} />
                <PrivateRoute path="/contact" component={ContactPage} />
                <PrivateRoute path="/user" component={UserPage} />
                <Route render={() => <Redirect to="/404" />} />
              </Switch>
            </div>
            <Footer />
          </>
        </Route>
      </Switch>
      <NotificationContainer />
    </FireBaseContext.Provider>
  );
};

export default App;
