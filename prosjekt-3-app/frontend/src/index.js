import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { Provider } from 'react-redux';
import { ApolloProvider } from 'react-apollo';
import store from './store'
import client from './setupApolloClient';

//Provider to handle store (state) and ApolloProvider to handle client (queries)
ReactDOM.render(
  <ApolloProvider client={client}>
    <Provider store={store}>
      <App />,
    </Provider>
  </ApolloProvider>,
  document.getElementById('root')
);

if (window.Cypress) {
  window.store = store
}

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
