import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTrQmHeE5i4Lt6_sUdLw3OvWaFDNdX3A8",
  authDomain: "fireblogspart1.firebaseapp.com",
  projectId: "fireblogspart1",
  storageBucket: "fireblogspart1.appspot.com",
  messagingSenderId: "404951316444",
  appId: "1:404951316444:web:85afe2ef103c36de954119"
};

  const fierbaseApp=firebase.initializeApp(firebaseConfig);
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export{timestamp};
  export default fierbaseApp.firestore();