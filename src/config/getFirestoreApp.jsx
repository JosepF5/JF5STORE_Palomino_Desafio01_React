import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBwDGe9PdAZItQxdF1j-svAOkIGN1MbT-8",
    authDomain: "jf5-store-react-d9587.firebaseapp.com",
    projectId: "jf5-store-react-d9587",
    storageBucket: "jf5-store-react-d9587.appspot.com",
    messagingSenderId: "700956288828",
    appId: "1:700956288828:web:5f30ab7394f66e7f8fa039"
  };
  
const app = initializeApp(firebaseConfig);

export const getFirestoreApp = () =>{
    return app
}
