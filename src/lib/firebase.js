//import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyCKJ4YgCa3dO01TgTInMLj8uSmzy6K6Gno",
  authDomain: "insta-clone-f951f.firebaseapp.com",
  projectId: "insta-clone-f951f",
  storageBucket: "insta-clone-f951f.appspot.com",
  messagingSenderId: "1023149058937",
  appId: "1:1023149058937:web:7c5c109c6d36e9fbc25da8"
};

const firebase = window.firebase.initializeApp(config);
const { FieldValue } = window.firebase.firestore;

//seedDatabase(firebase);

export { firebase, FieldValue };