import { db } from "./firebase-config.js";
import { collection, doc, setDoc, getDoc, getDocs, addDoc } from "firebase/firestore";

/**
 * Saves a single meal to the cloud
 */
export async function saveMealToCloud(uid, mealEntry) {
    console.log("storage.js: saveMealToCloud initialized", { uid, mealEntry });
    try {
        const mealsCollectionRef = collection(db, "users", uid, "meals");
        const docRef = await addDoc(mealsCollectionRef, mealEntry);
        console.log("storage.js: Success! Meal saved with cloud ID:", docRef.id);
        return docRef;
    } catch (error) {
        console.error("❌ CRITICAL FIRESTORE ERROR:", error.code, error.message);
        throw error;
    }
}

/**
 * Saves the user's complete layout variables (balance, days, swipes) to the cloud
 */
export async function saveUserSetupToCloud(uid, appState) {
    try {
        const userDocRef = doc(db, "users", uid);
        const profileData = {
            school: appState.school,
            balance: appState.balance,
            daysLeft: appState.daysLeft,
            swipes: appState.swipes,
            isUnlimited: appState.isUnlimited,
            recentLocation: appState.recentLocation
        };
        await setDoc(userDocRef, profileData, { merge: true });
        console.log("storage.js: Profile metrics updated successfully.");
    } catch (error) {
        console.error("storage.js: Failed to save setup metrics:", error);
    }
}

/**
 * Fetches the complete profile metrics AND meals from the cloud
 */
export async function loadUserAppStateFromCloud(uid) {
    console.log("storage.js: Fetching full app profile for:", uid);
    try {
        const userDocRef = doc(db, "users", uid);
        const userDocSnap = await getDoc(userDocRef);
        
        let profile = {};
        if (userDocSnap.exists()) {
            profile = userDocSnap.data();
        }

        const mealsCollectionRef = collection(db, "users", uid, "meals");
        const querySnapshot = await getDocs(mealsCollectionRef);
        
        const meals = [];
        querySnapshot.forEach((doc) => {
            meals.push({ id: doc.id, ...doc.data() });
        });
        
        return {
            ...profile,
            entries: meals
        };
    } catch (error) {
        console.error("storage.js: Failed to pull cloud state:", error);
        return null;
    }
}