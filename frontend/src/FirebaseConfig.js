import firebase from 'firebase/app';

const config = require('./config');

if (!firebase.apps.length) {
  firebase.initializeApp(config.firebaseConfig);
}

export default firebase;
