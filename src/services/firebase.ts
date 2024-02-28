import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCoStJGhpWT1bFyV7QBvpovJEq-KBsB2SA",
  authDomain: "wealth-wizard-e094c.firebaseapp.com",
  projectId: "wealth-wizard-e094c",
  storageBucket: "wealth-wizard-e094c.appspot.com",
  messagingSenderId: "1065622430054",
  appId: "1:1065622430054:web:01d250baac3dfc2595a8a7",
  measurementId: "G-4X4VGF1VJB",
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
