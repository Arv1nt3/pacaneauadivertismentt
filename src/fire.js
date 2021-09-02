import firebase from 'firebase';
 // Your web app's Firebase configuration
var firebaseConfig = {
   apiKey: "AIzaSyBDYdZNv4lEEuheByeYS5h2tM5-sGxuUrM",
   authDomain: "pacaneaua-divertisment.firebaseapp.com",
   projectId: "pacaneaua-divertisment",
   storageBucket: "pacaneaua-divertisment.appspot.com",
   messagingSenderId: "979697170598",
   appId: "1:979697170598:web:e4bd448be3f9e3a20c5c67"
 };

 // Initialize Firebase
 const fire = firebase.initializeApp(firebaseConfig);
 export default fire;
 