import React from 'react';
// import FaqsContainer from './containers/faqs';
// import FooterContainer from './containers/footer';
// import JumbotronContainer from './containers/jumbotron';
import * as ROUTES from './constants/routes'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './pages/home';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Browse from './pages/browse';

export default function App() {
  return (
    <Router>
       <Route exact path="/browse">
        <Browse />
      </Route>
      
      <Route exact path="/sign-in">
        <SignIn  />
      </Route>

      <Route exact path="/sign-up">
        <SignUp />
      </Route>

      <Route exact path={ROUTES.HOME}>
        <Home />
      </Route>

    </Router>
  );
}


