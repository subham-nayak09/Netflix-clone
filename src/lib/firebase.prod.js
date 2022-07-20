import Firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';
import { seedDatabase } from '../seed';
const config = {
  apiKey: "AIzaSyCoRKFbXmrox1oh5xM0HmZHkLnhWv9ehrc",
  authDomain: "netflix-clone-a66f3.firebaseapp.com",
  projectId: "netflix-clone-a66f3",
  storageBucket: "netflix-clone-a66f3.appspot.com",
  messagingSenderId: "787363812845",
  appId: "1:787363812845:web:9cb4e1ed779d55c9f403e4"
}

const firebase = Firebase.initializeApp(config);

export { firebase };