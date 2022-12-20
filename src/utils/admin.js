const admin = require('firebase-admin');
const serviceAccount = require('../../todos-nodejs-firebase-adminsdk-mlz3j-7d65b34a74.json')

admin.initializeApp({
    credential: admin.credential.cert(serviceAccount)
})

const db = admin.firestore();

module.exports = { admin, db };