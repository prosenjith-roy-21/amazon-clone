import firebase from 'firebase'


const firebaseConfig = {
  apiKey: "AIzaSyD84lSGv3ZXZ3t6RSZePPBWZ4GedLI44I4",
  authDomain: "clone-a1ac1.firebaseapp.com",
  projectId: "clone-a1ac1",
  storageBucket: "clone-a1ac1.appspot.com",
  messagingSenderId: "648753776481",
  appId: "1:648753776481:web:cb89ce61d35a4ab5bf6720"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }