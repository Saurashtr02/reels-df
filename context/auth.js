import React,{useEffect} from 'react'
import {auth} from '../firebase'
import {signInWithEmailAndPassword,createUserWithEmailAndPassword} from 'firebase/auth'
import { getAuth, onAuthStateChanged,signOut,sendPasswordResetEmail } from "firebase/auth";
export const AuthContext = React.createContext();

function AuthWrapper({children}) {
    // console.log("this is a wall")

    const [user,setUser] = React.useState('');
    const [loading,setLoading] = React.useState(true)

    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
           // if(user){
                setUser(user)
          //  }
        })
        setLoading(false)
    },[])

    function login(email,password){
        return signInWithEmailAndPassword(auth, email, password)
    }

    function logout(){
        return signOut(auth);
    }

    function forgot(email){
        return sendPasswordResetEmail(auth,email)
    }

    function signup(email,password){
        return createUserWithEmailAndPassword(auth,email,password);
    }

    const store = {
        login,
        user,
        logout,
        forgot,
        signup
    }

  return (
    <AuthContext.Provider value={store} >
        {!loading && children}
    </AuthContext.Provider>
  )
}

export default  AuthWrapper