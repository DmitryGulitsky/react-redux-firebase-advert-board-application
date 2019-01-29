// файл с конфигурацией firebase

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth'; // аутентификация

// Initialize Firebase
var config = {
  apiKey: "AIzaSyAb1WVF61ifoqOMclauHgyjPm5hN0NhGJ4",
  authDomain: "advert-board-889c9.firebaseapp.com",
  databaseURL: "https://advert-board-889c9.firebaseio.com",
  projectId: "advert-board-889c9",
  storageBucket: "advert-board-889c9.appspot.com",
  messagingSenderId: "574372946608"
};
firebase.initializeApp(config);
//firebase.firestore().settings({
//  timestampsInSnapshots: true
//});

export default firebase 