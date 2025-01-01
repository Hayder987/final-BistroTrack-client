import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../firebase/firebase.config";
import Swal from "sweetalert2";

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(false);
  const googleProvider = new GoogleAuthProvider()
 

  const registerUser = async(email, password) => {
    setLoading(true);
    return await createUserWithEmailAndPassword(auth, email, password);
  };

  const updateUser = async(name, photo) => {
   return await updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const loginUser = async(email, password)=>{
     setLoading(true)
    return await signInWithEmailAndPassword(auth, email, password)
  }

  const googleLogin = async()=>{
    setLoading(true)
    return await signInWithPopup(auth, googleProvider)
  }



  useEffect(() => {
   const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      try {
        setUser(currentUser);
      } catch (err) {
        Swal.fire(`${err}`);
      }
      finally{
        setLoading(false)
       }
    });

    return ()=> unsubscribe()

  }, []);

  const logOutUser = ()=>{
    setLoading(false)
    return signOut(auth)
  }

  console.log(user)

  const authInfo = {
    user,
    loading,
    registerUser,
    updateUser,
    logOutUser,
    loginUser,
    googleLogin
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
