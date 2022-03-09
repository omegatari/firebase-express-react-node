// Initialize Cloud Firestore through Firebase
const admin = require('firebase-admin'); // To access Firestore API
const config = require('./config');

const settings = {
  timestampsInSnapshots: true,
};

// Initialize Firebase
// Since the functions and firestore run on the same server,
//  we can simply use default credential.
// However, if your app run different location, you need to create a JSON Firebase credentials
/*
admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});
*/
admin.initializeApp(config.firebaseConfig);

const db = admin.firestore();

db.settings(settings);

// admin.auth().setPersistence(admin.auth.Auth.Persistence.none);

const auth = admin.auth();

// test function
/*
admin
  .firestore()
  .collection("foo")
  .add({ a: 1 })
  .then((r) => console.log("document added: ", r.path))
  .catch((e) => console.log("error: ", e));
*/

module.exports = {
  db,
  admin,
  auth,
};
