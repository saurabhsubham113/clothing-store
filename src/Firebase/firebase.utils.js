import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyDXd1ywMR3cLro9I48VPW4LrcdVqAoccmo",
    authDomain: "clothing-store-45a6a.firebaseapp.com",
    databaseURL: "https://clothing-store-45a6a.firebaseio.com",
    projectId: "clothing-store-45a6a",
    storageBucket: "clothing-store-45a6a.appspot.com",
    messagingSenderId: "423590044061",
    appId: "1:423590044061:web:72d8421b3b8601dcb54f74",
    measurementId: "G-K9LPZY8XWT"
}

firebase.initializeApp(config)

export const auth = firebase.auth()
export const firestore = firebase.firestore()

//it gives google auth provider from firebase
const provider = new firebase.auth.GoogleAuthProvider()
//we always want to pop-up when we use google auth and sign-in
provider.setCustomParameters({ prompt : 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider)

export default firebase