import React, { createContext, useEffect, useState } from 'react';
import {GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithPopup, signOut} from 'firebase/auth'
import app from '../firebase/firebase.config';

export const AuthContext = createContext()

const AuthProvider = ({children}) => {

    const auth = getAuth(app)

    const [user,setUser] = useState();
    const [loading,setLoading] = useState(true);
    const googleProvider = new GoogleAuthProvider();

    const googleSingUp = ()=>{
        console.log('reached');
        setLoading(true)
        return signInWithPopup(auth,googleProvider)
    }
    const signIn = (email,password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const logout = ()=>{
        setLoading(true)
        return signOut(auth);
    }
    useEffect(()=>{
        const unSubscribe = onAuthStateChanged(auth, currentUser =>{
            setUser(currentUser);
            setLoading(false)
        })

        return ()=>{
            unSubscribe();
        }
    },[])

    const authInfo ={
        googleSingUp,
        user,
        signIn,
        loading,
        logout
    }
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default AuthProvider;