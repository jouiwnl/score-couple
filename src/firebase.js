import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

const firebaseConfig = {
  apiKey: "AIzaSyCsIEgWkm3av4pe_d8NcsKvlDQTSXiu3YU",
  authDomain: "score-couple.firebaseapp.com",
  projectId: "score-couple",
  storageBucket: "score-couple.appspot.com",
  messagingSenderId: "50402670831",
  appId: "1:50402670831:web:4112d910950c546877c31a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);