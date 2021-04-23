import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'
import Dashboard from './components/Dashboard/Dashboard';
import LandingPage from './components/LandingPage';

export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/login'>
          <LandingPage />
        </Route>
        <PrivateRoute path='/'>
          <Dashboard />
        </PrivateRoute>
      </Switch>
    </BrowserRouter>
  )
}
function PrivateRoute({ children, ...rest } : {children : JSX.Element, path:String}) {
  return (
    <Route {...rest as any} render={({ location }) =>
      false ? (children) :
        (<Redirect to={{ pathname: '/login', state: { from: location } }} />)
    }
    />
  )
}
