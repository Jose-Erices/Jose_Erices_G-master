import {initializeApp} from "firebase/app";
import {getFirestore} from 'firebase/firestore'

const firebaseConfig = {
  apiKey: "AIzaSyDhlFGTNsHx0ViIW5i1uR9iEZZucffhQLw",
  authDomain: "entregablereact-4072a.firebaseapp.com",
  projectId: "entregablereact-4072a",
  storageBucket: "entregablereact-4072a.appspot.com",
  messagingSenderId: "814823794234",
  appId: "1:814823794234:web:4a8f96bcb938cc01cdf703"
};

const app = initializeApp(firebaseConfig);
//instancia de BD
export const db = getFirestore(app);
