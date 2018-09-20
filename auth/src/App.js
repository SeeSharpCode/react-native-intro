import React, { Component } from 'react';
import { View } from 'react-native';
import firebase from 'firebase';
import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

export default class App extends Component {
    state = { loggedIn: null };

	componentWillMount() {
		firebase.initializeApp({
			apiKey: 'AIzaSyD-XEtNtwlUgBtUvcx7F3-OEHG4hQru8Og',
			authDomain: 'authentication-demo-9fdf5.firebaseapp.com',
			databaseURL: 'https://authentication-demo-9fdf5.firebaseio.com',
			projectId: 'authentication-demo-9fdf5',
			storageBucket: 'authentication-demo-9fdf5.appspot.com',
			messagingSenderId: '734668385176'
        });
        
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ loggedIn: true });
            } else {
                this.setState({ loggedIn: false });
            }
        });
    }
    
    renderContent() {
        switch (this.state.loggedIn) {
            case true: 
                return (
                    <View style={{ flexDirection: 'row' }}>
                        <Button onPress={() => firebase.auth().signOut()}>Log Out</Button>
                    </View>
                );
            case false:
                return <LoginForm />;
            default:
                return <Spinner size="large" />;
        }
    }

	render() {
		return (
			<View>
				<Header headerText="Authentication" />
				{this.renderContent()}
			</View>
		);
	}
}
