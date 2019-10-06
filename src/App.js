import React,{Fragment} from 'react';
import Main from './components/Main'
import Login from './components/Login/Login'
import Register from './components/Register/Register'
import './App.scss';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Header from './components/Header'


function App() {
  return (
      <BrowserRouter>
          <Fragment>
              <Header />
              <Switch>
                  <Route exact path='/' component={Main} />
                  <Route exact path='/login' component={Login} />
                  <Route path='/register' component={Register} />
              </Switch>
          </Fragment>
      </BrowserRouter>
  );
}

export default App;
