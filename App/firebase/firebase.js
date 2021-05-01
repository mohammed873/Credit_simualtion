import firebase from 'firebase';


const firebaseConfig = {
  apiKey: "AIzaSyDxaLYtK9dOB5wpew3JMngmb7WP7O-i0-A",
  authDomain: "creditsimulation-aff6d.firebaseapp.com",
  projectId: "creditsimulation-aff6d",
  storageBucket: "creditsimulation-aff6d.appspot.com",
  messagingSenderId: "300317221665",
  appId: "1:300317221665:web:7e78849d0f07d3908c9460"
};
  //firestore.firestore();
  firebase.initializeApp(firebaseConfig);
  db = firebase.firestore();

  export default firebase;
