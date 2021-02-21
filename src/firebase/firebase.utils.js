import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
	apiKey: "AIzaSyCfsiBLN4zYAh2O9rQHrJ4z3txqV2nboRs",
	authDomain: "crwn-db-c87e8.firebaseapp.com",
	projectId: "crwn-db-c87e8",
	storageBucket: "crwn-db-c87e8.appspot.com",
	messagingSenderId: "923927801728",
	appId: "1:923927801728:web:21793be384ec72c7dc9b65",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
	if (!userAuth) return;
	const userRef = firestore.doc(`users/${userAuth.uid}`);

	const snapShot = await userRef.get();

	if (!snapShot.exists) {
		const { displayName, email } = userAuth;
		const createdAt = new Date();

		try {
			await userRef.set({
				displayName,
				email,
				createdAt,
				...additionalData,
			});
		} catch (error) {
			console.log("error creating user", error.mssage);
		}
		return userRef;
	}
	return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
