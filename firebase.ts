import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: "AIzaSyAq95sHH8SOfCrpE7Lo2kmq995-HPmAuxQ",
	authDomain: "chartgpt-messenger-ed3bb.firebaseapp.com",
	projectId: "chartgpt-messenger-ed3bb",
	storageBucket: "chartgpt-messenger-ed3bb.appspot.com",
	messagingSenderId: "950601888774",
	appId: "1:950601888774:web:677918d13804beaa013f87"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };