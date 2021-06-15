import React, { lazy, Suspense } from 'react';
import {BrowserRouter as Router,Route, Switch} from 'react-router-dom'
import Home from './pages/home'
import { Link } from 'react-router-dom';
import *as ROUTES from './router/routes'
const Login = lazy(()=> import ('./pages/login'))
const SignUp = lazy(()=> import ('./pages/sign-up'))
const HomeApp = lazy(()=> import ('./pages/home'))

function App() {
  return (
          
    <Router>
     
      <Suspense fallback={<p>Loading...</p>}>
      <Switch>
        <Route path={ROUTES.LOGIN} component={Login}/>
        <Route path={ROUTES.SIGN_UP} component={SignUp}/>
        <Route path={ROUTES.Home} component={HomeApp}/>

        </Switch>
        
        </Suspense>        
     </Router>
  );
}

export default App;
