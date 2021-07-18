import logo from './logo.svg';
import './App.css';
import hitomi from 'node-hitomi';
import React from 'react';
import { Route, Link } from 'react-router-dom';
import About from './About';
import Home from './Home';
import Profile from './Profile';

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
      <ul>
        <li>
          <Link to="/">
            홈
          </Link>
        </li>
        <li>
          <Link to="/about">
            소개
          </Link>
        </li>
        <li>
          <Link to="/profile/kimtaekju">김택주 프로필</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact={true}/>
      <Route path="/about" component={About}/>
      <Route path="/profile/:username" component={Profile}/>
    </div>
  )
}

export default App;
