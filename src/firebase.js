import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCBmdBNF_1g0muE_salzQ_CWN1Yy82plqw",
  authDomain: "fir-react-frank-linda.firebaseapp.com",
  projectId: "fir-react-frank-linda",
  storageBucket: "fir-react-frank-linda.appspot.com",
  messagingSenderId: "956974684268",
  appId: "1:956974684268:web:9a3667bf077e55334ea049",
};

// Initialize Firebase and Firestore
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
