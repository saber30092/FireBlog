import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAKxdr4rmjAlZ1D9oiiZ3G6Fb7tshENetI",
    authDomain: "fireblogsyt-18236.firebaseapp.com",
    projectId: "fireblogsyt-18236",
    storageBucket: "fireblogsyt-18236.appspot.com",
    messagingSenderId: "837190319238",
    appId: "1:837190319238:web:6ec438fb059ff2edade507"
  };

  const fierbaseApp=firebase.initializeApp(firebaseConfig);
  const timestamp=firebase.firestore.FieldValue.serverTimestamp;

  export{timestamp};
  export default fierbaseApp.firestore();