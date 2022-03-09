const functions = require('firebase-functions');
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');

// const config = require("./config");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

const app = express();

// Automatically allow cross-origin requests
app.use(cors({ origin: true }));

/*  parse body params and attache them to req.body
When Express 4.0 was released they decided to remove bodyParser
but now was added back to Express in release 4.16.0
because people wanted it bundled with Express like before.
*/
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// parse body params and attache them to req.body
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('static'));

// my routings
const apiRoute = require('./api/api');

// add routes to the express app.
app.use('/api', apiRoute);

app.get('/test', (req, res) => {
  res.send('🔥Hooray, it works!🔥');
});

app.get('/', (req, res) => {
  // console.log('Request from Firebase');
  res.send('Hello World! This is from express');
});

exports.app = functions.https.onRequest(app);

exports.makeUppercase = functions.firestore
  .document('/messages/{documentId}')
  .onCreate((snap) => {
    const { original } = snap.data();
    // console.log('Uppercasing', context.params.documentId, original);
    const uppercase = original.toUpperCase();
    return snap.ref.set({ uppercase }, { merge: true });
  });
