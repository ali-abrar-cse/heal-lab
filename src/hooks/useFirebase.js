import { useEffect, useState } from "react";
import firebaseInitialization from "../Firebase/firebase.init";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, GithubAuthProvider } from "firebase/auth";

firebaseInitialization();

const auth = getAuth();
const googleProvider = new GoogleAuthProvider();
const githubProvider = new GithubAuthProvider();

const useFirebase = () =>{
    const [user, setUser] = useState({});
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(true);
    // google sign in function
    const signInWithGoogle = () =>{
        setIsLoading(true);
        return signInWithPopup(auth, googleProvider);
    }
    
    // github sign in function
    const signInWithGithub =()=>{
        setIsLoading(true);
        return signInWithPopup(auth, githubProvider);
    }

    // logout function
    const logOut = () =>{
        setIsLoading(true);
        signOut(auth)
        .then(() =>{
            setUser({})
        })
        .finally(setIsLoading(false))
    }

    // observing user 
    useEffect(() =>{
        onAuthStateChanged(auth, user=>{
            setUser(user);
            setIsLoading(false);
        })
    },[])


    return {
        user,
        error,
        isLoading,
        signInWithGoogle,
        signInWithGithub,
        logOut,
        setUser,
        setError,
        setIsLoading
    }
}

export default useFirebase;