import { createContext, useEffect, useState } from "react";
import {  GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import PropTypes from "prop-types"
import { auth } from "../../firebase/firebase";


export const AuthContext = createContext(null);

const googleProvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState({
        photoURL: "",
        email: "",
        password: ""
    });
    const [loading, setLoading] = useState(true);

    const createUser = (photo, email, password) =>{
        setLoading(true);
        setUser.photoURL = photo;
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const profileUpdate = (photo) => {
        return updateProfile(auth.currentUser, {
          photoURL: photo,
        });
      };

    const googleSignIn = () =>{
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    useEffect(()=>{
        const unSubscribe= onAuthStateChanged(auth, currentUser => {
            setUser(currentUser);
            setLoading(false);
        });
        return () => {
            unSubscribe();
        }
    },[])

    const signIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOut = () =>{
        setLoading(true);
        return signOut(auth)
    }

    const authInfo = {
        user,
        loading,
        createUser,
        profileUpdate,
        googleSignIn,
        signIn,
        logOut
    }


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

AuthProvider.propTypes= {
    children: PropTypes.node
}

export default AuthProvider;