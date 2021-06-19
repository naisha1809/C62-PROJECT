import firebase from 'firebase';

 var firebaseConfig = {
    apiKey: "AIzaSyAlRSM3CK1ZzVpC6N6dMcRnkeuG2KeA1Bg",
    authDomain: "c60-project-3dbc9.firebaseapp.com",
    databaseURL: "https://c60-project-3dbc9-default-rtdb.firebaseio.com",
    projectId: "c60-project-3dbc9",
    storageBucket: "c60-project-3dbc9.appspot.com",
    messagingSenderId: "834540864680",
    appId: "1:834540864680:web:d94d5effb8febe225e6e9d"
  };
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase.database()
 
 

console.log(firebase.name);
console.log(firebase.database());
 


