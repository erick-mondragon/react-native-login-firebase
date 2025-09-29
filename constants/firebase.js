import { initializeApp } from "@firebase/app";
import { getReactNativePersistence, initializeAuth } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: "MY_API_KEY_FROM_FIREBASE",
  authDomain: "MY_AUTH_DOMAIN_FROM_FIREBASE",
  projectId: "MY_PROJECT_ID_FROM_FIREBASE",
  storageBucket: "MY_STORAGE_BUCKET_FROM_FIREBASE",
  messagingSenderId: "MY_MESSAGING_SENDER_ID_FROM_FIREBASE",
  appId: "MY_APP_ID_FROM_FIREBASE",
};

export const app = initializeApp(firebaseConfig);

export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});
