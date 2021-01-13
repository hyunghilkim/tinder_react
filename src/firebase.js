import firebase from 'firebase';

const firebaseConfig = {
	apiKey: 'AIzaSyCgl0y_7pLAH3ePfYLsuKqUx_XorkwIU0Q',
	authDomain: 'react-tinder-69b55.firebaseapp.com',
	projectId: 'react-tinder-69b55',
	storageBucket: 'react-tinder-69b55.appspot.com',
	messagingSenderId: '1072348834744',
	appId: '1:1072348834744:web:0d68e7086defac90827d4d',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const database = firebaseApp.firestore();

export default database;
