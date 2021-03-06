import React from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import Home from './components/home.components';
import Nav from './components/nav.component';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Login from './components/login.component';
import Register from './components/register.component';




function App() {
  return (
    <BrowserRouter>

    <div className="App">
      <Nav/>
      <div className='auth-wrapper'>
        <div className='auth-inner'>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/login" component={Login}/>
            <Route exact path="/register" component={Register}/>
          </Switch>
        </div>
      </div>
    </div>
    </BrowserRouter>
  );
}

export default App;
