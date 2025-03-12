import { initializeApp } from "firebase/app";
import { getAuth, initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import AsyncStorage from "@react-native-async-storage/async-storage";

// Firebase configuration object - ensure this is complete
const firebaseConfig = {
  apiKey: "AIzaSyDlEH_cwJLaWqxmW6GEoYgF3DnogeRltew",  // Your Firebase API key
  authDomain: "habit-tracker-app-assignment.firebaseapp.com",  // Your Firebase Auth domain
  projectId: "habit-tracker-app-assignment",  // Your Firebase project ID
  storageBucket: "habit-tracker-app-assignment.firebasestorage.app",  // Your Firebase storage bucket
  messagingSenderId: "421445100038",  // Your Firebase messaging sender ID
  appId: "1:421445100038:android:154cd01fd1e6d5f68c1987",  // Your Firebase App ID
  measurementId: "",  // If you have a measurement ID for analytics, add it here
  androidClientId: "1:421445100038:android:154cd01fd1e6d5f68c1987",  // Android Client ID
  packageName: "com.habitminderapp.slug"  // The package name for your app
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth with persistence
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage), // Use AsyncStorage for persistence
});

// Initialize Firestore
const db = getFirestore(app);

export { db, auth };
