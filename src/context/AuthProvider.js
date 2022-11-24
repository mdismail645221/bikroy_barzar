import React, { createContext, useState } from 'react';
import app from '../firebase/firebase.config';
import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth'


export const AuthContext = createContext();
const auth = getAuth(app)

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(false);




    // Create User Register form ====>
    const registerForm = (email, password) => {
        createUserWithEmailAndPassword(auth, email, password)
    }






    const authInfo = {
        user,
        loading,
        registerForm
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;