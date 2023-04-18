import { initializeApp } from "firebase/app";
import { getStorage } from 'firebase/storage';


const firebaseConfig = {
  apiKey: "AIzaSyD5aNjW2ZNVFqH7ASow4i0MVg70B-kHbR0",
  authDomain: "familyphotos-b2e62.firebaseapp.com",
  projectId: "familyphotos-b2e62",
  storageBucket: "familyphotos-b2e62.appspot.com",
  messagingSenderId: "437407961566",
  appId: "1:437407961566:web:c349bd51c2677104924d4f"
};


const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);