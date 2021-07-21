import logo from './logo.svg';
import './App.css';
import hitomi from 'node-hitomi';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';
import Login from './pages/login/LoginPresenter';
import OAuthLogin from './pages/login/OAuthLogin';

function test(){
  console.log('hitomi: ', hitomi);
  hitomi.getGalleryData(1954230)
.then(function (value) {
  console.log('value: ', value);
  console.log(value['title'], value['id']);
});
}

const App = () => {
  return (
    <div>
      <Route path="/" component={Login} exact={true}/>
      <Route path="/about" component={About}/>
      <Route path="/profile/:username" component={Profile}/>
      <Route path='/auth/login' component={OAuthLogin}/>
    </div>
  )
}

export default App;
