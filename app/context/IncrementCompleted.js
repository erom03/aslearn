import { getAuth } from "firebase/auth";
import { doc, updateDoc, increment } from "firebase/firestore";
import { db } from "../firebase";

export const IncrementCompleted = async () => {
    // Get the current user
    const auth = getAuth();
    const user = auth.currentUser;

    if(user) {
        // Increment lessons completed
        const docRef = doc(db, "users", user.uid);
        
        await updateDoc(docRef, { lessonsCompleted: increment(1)});
    }
}