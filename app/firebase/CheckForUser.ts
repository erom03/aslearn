import { collection, doc, getDoc, setDoc } from "firebase/firestore";
import { db } from "../firebase"
import { User } from "firebase/auth";

// Function that takes in a user object and checks if they exist in the database
export const CheckUser = async (user: User) => {
    const docRef = doc(db, "users", user.uid);
    const docSnap = await getDoc(docRef);

    // Check user exists in database
    if (!docSnap.exists()) {
        // Create user in database
        const usersRef = collection(db, "users");

        await setDoc(doc(usersRef, user.uid), {
            email: user.email,
            lessonsCompleted: 0,
        });
    }
}