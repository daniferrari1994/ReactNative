// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
import { getAuth, initializeAuth } from "firebase/auth";

// Solución async storage
import { getReactNativePersistence } from 'firebase/auth/react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBNeiNwbO2-KnWdXethA8Ynl9j1rGZP_BY",
  authDomain: "interbanking-react-5bbbf.firebaseapp.com",
  projectId: "interbanking-react-5bbbf",
  storageBucket: "interbanking-react-5bbbf.appspot.com",
  messagingSenderId: "734850002829",
  appId: "1:734850002829:web:6bce7e9716b7973d1c57c4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);


export const auth = initializeAuth(app, {

  persistence: getReactNativePersistence(AsyncStorage),

});
