import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { AppContainer } from 'react-hot-loader';
import { BrowserRouter } from 'react-router-dom';
import { configureStore } from './store';
import Main from './views/Main';

const store = configureStore();

ReactDOM.render(
  <BrowserRouter>
    <AppContainer>
      <Provider store={store}>
        <Main />
      </Provider>
    </AppContainer>
  </BrowserRouter>,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept('./views/Main', () => {
    const Next = require('./views/Main').default;
    ReactDOM.render(
      <BrowserRouter>
        <AppContainer>
          <Provider store={store}>
            <Next />
          </Provider>
        </AppContainer>
      </BrowserRouter>,
      document.getElementById('app')
    );
  });
}