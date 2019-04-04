import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
    apiKey: 'AIzaSyC49Dzzx1WSAye8W2-iEfOAKmkCnIu5lkI',
    authDomain: 'manager-e7002.firebaseapp.com',
    databaseURL: 'https://manager-e7002.firebaseio.com',
    projectId: 'manager-e7002',
    storageBucket: 'manager-e7002.appspot.com',
    messagingSenderId: '190393702765'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
