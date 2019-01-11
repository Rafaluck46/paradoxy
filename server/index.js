
//node dependencies
//const functions = require('firebase-functions');
const express = require('express');


//local dependencies
const mailRoute = require('./route/mail');

const app = express();

app.use(express.json());
app.post('/mail/sendmail', mailRoute.sendMail);

app.listen('5000')
//const functions = require('firebase-functions');

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//  response.send("Hello from Firebase!");
// });


