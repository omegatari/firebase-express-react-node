import firebase from 'firebase';

const config = require('./config');

if (!firebase.apps.length) {
  firebase.initializeApp(config.firebaseConfig);
}

export default firebase;
