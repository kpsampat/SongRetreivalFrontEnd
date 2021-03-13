import * as firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyCUzKzIuiw3LEQWkD8dt50VfwEUVgQdSZc",
    authDomain: "songretrievals.firebaseapp.com",
    projectId: "songretrievals",
    storageBucket: "songretrievals.appspot.com",
    messagingSenderId: "614546886200",
    appId: "1:614546886200:web:536e164bf7be82813520cd",
    measurementId: "G-BXZKJCN48M"
};

firebase.initializeApp(firebaseConfig)

// utils
const db = firebase.firestore()
const auth = firebase.auth()

// export utils/refs
export {
  db,
  auth
}