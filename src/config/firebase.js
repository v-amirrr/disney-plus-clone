import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyCKvMpwme3eu6YIVW7iysg96DdFEAMSW8Q",
    authDomain: "disney-plus-clone-21100.firebaseapp.com",
    projectId: "disney-plus-clone-21100",
    storageBucket: "disney-plus-clone-21100.appspot.com",
    messagingSenderId: "403416116401",
    appId: "1:403416116401:web:210e369e11e36051f54690"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const storage = getStorage(app);

export { db, auth, provider, storage };
