// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCQPxPB1hZWVn-XKkTBVZWf0sn7bVDpbGM",
  authDomain: "netflix-clone-12c43.firebaseapp.com",
  projectId: "netflix-clone-12c43",
  storageBucket: "netflix-clone-12c43.firebasestorage.app",
  messagingSenderId: "114268403514",
  appId: "1:114268403514:web:ca913c22c1943025cdc203"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signUp = async(name,email,password)=>{
    try {
        let res = await createUserWithEmailAndPassword(auth,email,password);
        let user = res.user;
        await addDoc(collection(db,"user"),{
            uid:user.uid,
            name,
            authProvider:"local"
        })
    } catch (err) {
        console.log(err.error);
        
    }
}


const login = async(email,password)=>{
    try {
        await signInWithEmailAndPassword(auth,email,password)
    } catch (err) {
        console.log(err);
        
    }
}

const logout = ()=>{
    signOut(auth)
}

export{signUp,logout,db,auth,login}