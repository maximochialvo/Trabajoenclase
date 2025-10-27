import app from 'firebase/app'
import firebase from 'firebase'
const firebaseConfig = {
  apiKey: "AIzaSyCoUkXLxMwa2dXU2Qx6b8PZJ6DcGR7w5a0",
  authDomain: "fir-1dc8c.firebaseapp.com",
  projectId: "fir-1dc8c",
  storageBucket: "fir-1dc8c.firebasestorage.app",
  messagingSenderId: "214429850569",
  appId: "1:214429850569:web:61d8905d3932be0da7a618"
};

app.initializeApp(firebaseConfig)

export const auth = firebase.auth()
export const storage = app.storage()
export const db = app.firestore()