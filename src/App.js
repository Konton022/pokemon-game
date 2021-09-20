// import { useState } from "react";
import { useRouteMatch, Route, Switch, Redirect } from "react-router-dom";
import cn from "classnames";
import GamePage from "./routes/Game/Game";
import HomePage from "./routes/Home/Home";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import Footer from "./components/Footer/Footer";
import NotFound from "./routes/NotFound";
import AboutPage from "./routes/AboutPage";

import s from "./App.module.css";
import ContactPage from "./routes/ContactPage";

const App = () => {
  const { isExact } = useRouteMatch("/");
  console.log("###match ", isExact);
  return (
    <Switch>
      <Route path="/404" component={NotFound} />
      <Route>
        <>
          <MenuHeader bgActive={!isExact} />
          <div className={cn(s.wrap, { [s.isHomePage]: isExact })}>
            <Switch>
              <Route path="/" exact component={HomePage} />
              <Route path="/home" component={HomePage} />
              <Route path="/game" component={GamePage} />
              <Route path="/about" component={AboutPage} />
              <Route path="/contact" component={ContactPage} />
              <Route render={() => <Redirect to="/404" />} />
            </Switch>
          </div>
          <Footer />
        </>
      </Route>
    </Switch>
  );
};

export default App;
