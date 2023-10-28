"use client";

import { useContext, createContext, useState, useEffect } from "react";
import { signInWithPopup, signOut, onAuthStateChanged, GoogleAuthProvider } from "firebase/auth";
import { auth } from "../firebase";
import { collection, doc, getDoc, setDoc } from "firebase/firestore";

const AuthContext  = createContext();

export const AuthContextProvider = ({children}) => {
    const [user, setUser] = useState(null);

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider;
        signInWithPopup(auth, provider).then(async (result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);

            // The signed-in user info.
            const user = result.user;

            // TODO: Finish adding user to database if they dont exist currently
            const usersRef = collection(db, "users");
            const docRef = doc(db, "users", user.uid);
            const docSnap = await getDoc(docRef);

            // Check user exists in database
            if (!docSnap.exists()) {
                // Create user in database
                const userDoc = {
                    uid: user.uid,
                    lessonsCompleted: 0,
                };

                await setDoc(doc(usersRef, "users"), userDoc);
            }

            // IdP data available using getAdditionalUserInfo(result)
            // ...
          }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            // const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
          });
    }

    const logOut = () => {
        signOut(auth);
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            // eslint-disable-next-line react-hooks/exhaustive-deps
            setUser(currentUser);
        })

        return () => unsubscribe;
    }, [user])

    return (
        <AuthContext.Provider value={{ user, googleSignIn, logOut }}>
            {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext);
}
