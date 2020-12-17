import React from 'react';
// import FaqsContainer from './containers/faqs';
// import FooterContainer from './containers/footer';
// import JumbotronContainer from './containers/jumbotron';
import * as ROUTES from './constants/routes';
import { BrowserRouter as Router, Switch} from 'react-router-dom';
import Home from './pages/home';
import SignUp from './pages/signup';
import SignIn from './pages/signin';
import Browse from './pages/browse';
import { IsUserRedirect, ProtectedRoute } from './components/Helper/routes';
import {useAuthListener} from './hooks'

export default function App() {
  const {user} =  useAuthListener();

  return (
    <Router>
        <Switch>
        <IsUserRedirect user={user} loggedInPath ={ROUTES.BROWSE} path={ROUTES.SIGN_IN} >
         <SignIn />
        </IsUserRedirect>
     
        <IsUserRedirect user={user} loggedInPath ={ROUTES.BROWSE} path={ROUTES.SIGN_UP} >
         <SignUp />
        </IsUserRedirect>

        <ProtectedRoute user={user} path={ROUTES.BROWSE} >
          <Browse />
        </ProtectedRoute>
    
        <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path ={ROUTES.HOME} exact>
          <Home />
        </IsUserRedirect>

        </Switch>
    </Router>
  );
}
