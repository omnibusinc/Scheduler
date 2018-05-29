import { createStore, applyMiddleware, combineReducers } from 'redux';
import reducers from './state';

export function configureStore(initialState = {}) {
  const rootReducer = combineReducers(reducers);
  const store = createStore(
    rootReducer, initialState, 
    window.devToolsExtension && window.devToolsExtension()
  );

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./state', () => {
      const nextReducer = require('./state'); // eslint-disable-line global-require
      store.replaceReducer(nextReducer);
    });
  }

  return store;
}
