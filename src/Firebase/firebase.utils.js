import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: process.env.REACT_APP_API_KEY,
    authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_DATABASE_URL,
    projectId: process.env.REACT_APP_PROJECT_ID,
    storageBucket: process.env.REACT_APP_STORGAE_BUCKET,
    messagingSenderId: process.env.REACT_APP_SENDER_ID,
    appId: process.env.REACT_APP_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID
}
console.log(process.env.REACT_APP_API_KEY);
//creating a function to store the sign-in user in the firestore
export const createUserProfileDocument = async (userAuth, additionaldata) => {
    //checking if user is present
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`)

    const snapshot = await userRef.get()

    if (!snapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionaldata
            })
            console.log(displayName, email, createdAt)
        } catch (error) {
            console.log('error createing user', error.message)
        }
    }
    return userRef;
}

//to initialize the forebase to the app
firebase.initializeApp(config)

//calling the firebase authentication 
export const auth = firebase.auth()
//calling the firebase store to store the data
export const firestore = firebase.firestore()

//it gives google auth provider from firebase
const provider = new firebase.auth.GoogleAuthProvider()
//we always want to pop-up when we use google auth and sign-in
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase