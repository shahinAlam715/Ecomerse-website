
import { initializeApp } from "firebase/app";


const firebaseConfig = {
  apiKey: "AIzaSyBOzTFaZbI1aytsi5UErrbhqhz9DsNB_8I",
  authDomain: "hekto-ecomerce.firebaseapp.com",
  projectId: "hekto-ecomerce",
  storageBucket: "hekto-ecomerce.firebasestorage.app",
  messagingSenderId: "122532631619",
  appId: "1:122532631619:web:bd7f979de9359a08cfb0f6",
  measurementId: "G-J1KS83SR0N"
};

export {firebaseConfig}

const app = initializeApp(firebaseConfig);
