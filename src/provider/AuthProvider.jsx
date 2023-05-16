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
            if(currentUser && currentUser.email){
                const loggedUser = {
                    email: currentUser.email
                }
                fetch('http://localhost:5000/jwt',{
                    method:'POST',
                    headers:{
                        'content-type':'application/json'
                    },
                    body: JSON.stringify(loggedUser)
                })
                .then(res=>res.json())
                .then(data=>{
                    console.log(data);
                    localStorage.setItem('volunteer-network',data.token);
                })  
            }
            else{
                localStorage.removeItem('volunteer-network')
            }
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