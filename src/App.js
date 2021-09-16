import { useState } from "react";
import { useRouteMatch, Route, Switch } from "react-router-dom";
import cn from 'classnames'
import GamePage from "./routes/Game/Game";
import HomePage from "./routes/Home/Home";
import MenuHeader from "./components/MenuHeader/MenuHeader";
import Footer from "./components/Footer/Footer";
import s from './App.module.css'

const App = () => {

  const match = useRouteMatch('/')
  //console.log('###match ', match)
  return (

    <Switch>
      <Route>
        <>
          <MenuHeader bgActive={!match.isExact} />
          <div className={cn(s.wrap, { [s.isHomePage]: match.isExact })}>
            <Switch>
              <Route path='/' exact component={HomePage} />
              <Route path='/home' component={HomePage} />
              <Route path='/game' component={GamePage} />
              <Route path='/about' render={() => <h1>This is page ABOUT </h1>} />
            </Switch>

          </div>
          <Footer />
        </>
      </Route>
      <Route render={() => <h1>404 NOT FOUND</h1>} />


    </Switch>


  )
};

export default App;
