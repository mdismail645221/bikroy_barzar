import React, { createContext, useEffect, useState } from 'react';
import app from '../firebase/firebase.config';
import {
    createUserWithEmailAndPassword, 
    getAuth, 
    GoogleAuthProvider, 
    onAuthStateChanged, 
    signInWithEmailAndPassword,
    signInWithPopup,
    signOut,
    updateProfile
} from 'firebase/auth'

const auth = getAuth(app);
export const AuthContext = createContext()

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);




    // create user in the  Register Form
    const registerUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }


    // update USER NAME & image 
    const updateUser = (userInfo) =>{
        setLoading(true)
        return updateProfile(auth.currentUser, userInfo);
    }


    // User signIn 
    const signInUser = (email, password)=> {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }


    // signGoogle
    const provider = new GoogleAuthProvider();
    const googleSignIn = ()=> {
        setLoading(true);
        return signInWithPopup(auth, provider)
    }



    // sign out user
    const logOut = () => {
        setLoading(true)
        localStorage.removeItem("BB_TOKEN")
        return signOut(auth)
    }






    useEffect(()=> {
        const unSubscribed = onAuthStateChanged(auth, (currentUser)=> {
            console.log('onAuthStateChanged current User', currentUser);
            // if()
            setUser(currentUser)
            setLoading(false)

        })

        return ()=> {
            unSubscribed()
        }

    },[])



    const authInfo = {
        user,
        loading,
        registerUser,
        updateUser,
        signInUser,
        googleSignIn,
        logOut
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;