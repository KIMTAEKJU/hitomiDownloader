import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Router } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import reducers from './redux/modules';
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';
import { createBrowserHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

const customHistory = createBrowserHistory({
  forceRefresh: true
}); // thunk 미들웨어에서 history 객체 사용하기 위해서

const store = createStore(reducers, applyMiddleware(ReduxThunk.withExtraArgument({ history: customHistory }), composeWithDevTools));

ReactDOM.render(
  <Router history={customHistory}>
    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
  </Router>,
  document.getElementById('root')

);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
