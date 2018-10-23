import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import firebase from 'firebase';
import reducers from './reducers';
import Router from './Router';

export default class App extends Component {
    componentWillMount() {
        const config = {
            apiKey: 'AIzaSyChzCz_tDIxWA2inxZCWXC8DrOFhpfLmOQ',
            authDomain: 'manager-902ce.firebaseapp.com',
            databaseURL: 'https://manager-902ce.firebaseio.com',
            projectId: 'manager-902ce',
            storageBucket: 'manager-902ce.appspot.com',
            messagingSenderId: '789269399305'
        };
        firebase.initializeApp(config);
    }

    render() {
        return (
            <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
                <Router />
            </Provider>
        );
    }
}
