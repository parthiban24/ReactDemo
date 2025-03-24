import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithRedirect,
    signInWithPopup,
    GoogleAuthProvider,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged
} from "firebase/auth";
import {
    getFirestore,
    doc,
    getDoc,
    setDoc,
    collection,
    writeBatch,
    query,
    getDocs
} from "firebase/firestore"
// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAnP9REjl9H_fPD2-ARfPyfr0mHm-Qu-Ak",
    authDomain: "crwn-clothing-c8e9f.firebaseapp.com",
    projectId: "crwn-clothing-c8e9f",
    storageBucket: "crwn-clothing-c8e9f.firebasestorage.app",
    messagingSenderId: "591674407284",
    appId: "1:591674407284:web:c5e8217dc16916ec365421"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
    prompt: "select_account"
});

export const auth = getAuth();

export const addCollectionAndDocuments = async (collectionkey, objectsToAdd) => {
    const collectionRef = collection(db, collectionkey);
    const batch = writeBatch(db);

    objectsToAdd.forEach((object) => {
        const docRef = doc(collectionRef, object.title.toLowerCase());
        batch.set(docRef, object);
    });

    await batch.commit();
    console.log('Done..!');
}

export const getCategoriesAndDocuments = async () => {
    const collectRef = collection(db, 'categories');
    const q = query(collectRef);

    const querySnapshot = await getDocs(q);

    return querySnapshot.docs.map(docSnapshot => docSnapshot.data())
    // .reduce((acc, docSnapshot) => {
    //     const { title, items } = docSnapshot.data();
    //     acc[title.toLowerCase()] = items;
    //     return acc;
    // }, {});

    //return categoriesMap

}

export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth,
    additionalInformation = {}
) => {
    if (!userAuth) return;
    const userDocRef = doc(db, 'users', userAuth.uid);
    console.log(userDocRef);

    const userSnapshot = await getDoc(userDocRef);
    console.log(userSnapshot);
    console.log(userSnapshot.exists());

    if (!userSnapshot.exists()) {
        const { displayName, email } = userAuth;
        const createAt = new Date();
        try {
            await setDoc(userDocRef, {
                displayName,
                email,
                createAt,
                ...additionalInformation,
            })
        }
        catch (ex) {
            console.log('Error creating the user', ex.message);
        }
    }
}

export const createAuthUserWithEmailAndPassowrd = async (email, password) => {
    if (!email || !password) return
    return await createUserWithEmailAndPassword(auth, email, password);
}

export const signAuthUserWithEmailAndPassowrd = async (email, password) => {
    if (!email || !password) return
    return await signInWithEmailAndPassword(auth, email, password);
}

export const userSignOut = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) =>
    onAuthStateChanged(auth, callback);



