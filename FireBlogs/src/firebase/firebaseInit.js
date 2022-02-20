import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAA6IGmiE5TIKKv48-lA85lMuTHyN-G1Fw",
  authDomain: "fireblogs-387d9.firebaseapp.com",
  projectId: "fireblogs-387d9",
  storageBucket: "fireblogs-387d9.appspot.com",
  messagingSenderId: "139189560078",
  appId: "1:139189560078:web:0e5de9a4ef739625d52d5f"
};

  const fierbaseApp=firebase.initializeApp(firebaseConfig);
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export{timestamp};
  export default fierbaseApp.firestore();