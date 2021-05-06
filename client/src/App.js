import React from 'react'
import { Switch, Route } from 'react-router-dom';
import * as Pages from './pages';
import { Header, Footer } from './layout'

// import './style.css';

function App(){

    return(
      <>
        <Header />
           <Switch>
          <Route exact path="/">
            <Pages.Home />
          </Route>
          <Route path="/about">
            <Pages.About />
          </Route>
          <Route path="/visited">
            <Pages.Visited />
              </Route>
          <Route path="/posts">
            <Pages.Posts />
          </Route>
          <Route>
            <Pages.NotFound />
          </Route>
        </Switch>
        <Footer />
      </>
    );
  
  };
  
export default App;