// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
import { Firestore, getFirestore } from "firebase/firestore";
import {
	Auth,
	browserLocalPersistence,
	// getAuth,
	initializeAuth
} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyB-9wBeRG0TXguTRXMpgqpkNpMAo9ZNgTk",
	authDomain: "behigh-app.firebaseapp.com",
	projectId: "behigh-app",
	storageBucket: "behigh-app.appspot.com",
	messagingSenderId: "495192466676",
	appId: "1:495192466676:web:8ca86b6df9591f2b802aa1",
	measurementId: "G-4EYZCMLK4C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
	persistence: browserLocalPersistence,
	popupRedirectResolver: null
});
const analytics = getAnalytics(app);
const firestore = getFirestore();

/**
 * Contract for the Firebase Service fixture.
 */
export interface IFirebaseService {
	app: FirebaseApp;
	auth: Auth;
	analytics: Analytics;
	firestore: Firestore;
}

/**
 * Firebase Service fixture implementation class.
 *
 * @see https://en.wikipedia.org/wiki/Singleton_pattern
 * @see https://en.wikipedia.org/wiki/Fixture_(software)
 * @see https://en.wikipedia.org/wiki/Service_locator_pattern
 * @see https://en.wikipedia.org/wiki/Service_provider_interface
 * @see https://firebase.google.com/docs/web/setup#available-libraries
 */
export class FirebaseService implements IFirebaseService {
	app: FirebaseApp;
	auth: Auth;
	analytics: Analytics;
	firestore: Firestore;

	constructor() {
		this.app = app;
		this.auth = auth;
		this.analytics = analytics;
		this.firestore = firestore;
	}
}

/**
 * Firebase Service fixture instance.
 * This is a singleton of the Firebase Services within the App.
 */
export const firebaseService = new FirebaseService();
