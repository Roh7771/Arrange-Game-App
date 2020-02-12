import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import reboot from 'styled-reboot';
import rootReducer from './redux/reducers/rootReducer';
import App from './App';

const loggerMiddleware = store => next => action => {
  const result = next(action);
  console.log(store.getState());
  return result;
};

const store = createStore(rootReducer, applyMiddleware(loggerMiddleware));

const GlobalStyle = createGlobalStyle`
  ${reboot}

  body {
    background-color: #282c34
  }

  #root {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
  }
`;

const app = (
  <>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </>
);

ReactDOM.render(app, document.getElementById('root'));
