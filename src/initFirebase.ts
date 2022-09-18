import {initializeApp} from 'firebase/app';
import {getFirestore} from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: 'AIzaSyBLxF-f42nteiBF7Vl1jTv7O_Gc3evBMjM',
  authDomain: 'the-odin-paste.firebaseapp.com',
  projectId: 'the-odin-paste',
  storageBucket: 'the-odin-paste.appspot.com',
  messagingSenderId: '881757795195',
  appId: '1:881757795195:web:5f346f6fad3a85332603de',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();

export {db};
