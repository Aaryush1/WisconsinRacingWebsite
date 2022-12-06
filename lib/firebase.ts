import firebase from 'firebase/compat/app'
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/storage';
import { getAnalytics } from "firebase/analytics";



const firebaseConfig = {
    apiKey: "AIzaSyB12sRBSeyUny3HwvQlbM2vdnFmUUF4kPk",
    authDomain: "wisconsinracingwebsite.firebaseapp.com",
    projectId: "wisconsinracingwebsite",
    storageBucket: "wisconsinracingwebsite.appspot.com",
    messagingSenderId: "759125941322",
    appId: "1:759125941322:web:45fb0ad9ec571ff9da1ab3",
    measurementId: "G-QZQ0NQ8BKT"
};

if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
    // const analytics = getAnalytics(app);
}

export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider()
export const firestore = firebase.firestore();
export const storage = firebase.storage();
export const STATE_CHANGED = firebase.storage.TaskEvent.STATE_CHANGED;
export const fromMillis = firebase.firestore.Timestamp.fromMillis;
export const serverTimeStamp = firebase.firestore.FieldValue.serverTimestamp;

export async function getUserWithUsername(username: string) {
    const usersRef = firestore.collection('users');
    const query = usersRef.where('username', '==', username).limit(1);
    const userDoc = (await query.get()).docs[0];
    return userDoc
}

export function postToJSON(doc: any) {
    const data = doc.data();
    return {
        ...data,
        createdAt: data?.createdAt.toMillis(),
        updatedAt: data?.updatedAt.toMillis(),
    };
}


