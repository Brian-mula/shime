import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged } from "firebase/auth";
import { doc, setDoc, getFirestore } from "firebase/firestore"; 

let errors=null;

export const signUpUser = async(auth,email,password)=>{
  const db=getFirestore()
  
   const credentials=await createUserWithEmailAndPassword(auth, email, password)
    await setDoc(doc(db, "users", credentials.user.uid), {
    isAdmin:false,
    
  })
   
  
  .catch((error) => {
    const errorCode = error.code;
     errors = error.message;
    // ..
  });
  return {credentials}
}

export const signInUser=async(auth,email,password)=>{
 
  
    const cridential=await signInWithEmailAndPassword(auth, email, password)
  
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
  });
  return cridential
}

export const initUser=async()=>{
  const auth=getAuth()
  const firebaseUser=useFirebaseUser();
  firebaseUser.value=auth.currentUser
    onAuthStateChanged(auth, (user) => {
        if (user) {
          // User is signed in, see docs for a list of available properties
          // https://firebase.google.com/docs/reference/js/firebase.User
          const uid = user.uid;
          // ...
          console.log('Auth state changed',uid)
        } else {
          // User is signed out
          // ...
          console.log("The user is signed out!!")
        }
        firebaseUser.value=user
        console.log('firebaseUser running',firebaseUser)
      });
}

export const signOut=async()=>{
  const auth=getAuth()
    const result=await auth.signOut()
  console.log("Signed out")
  return result;
}