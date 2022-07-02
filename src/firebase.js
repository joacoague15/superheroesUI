import { getStorage } from 'firebase/storage';
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDSmu865wvNvnw2i5efg7pzRbzom6dj2vI",
    authDomain: "superheroes-img-storage.firebaseapp.com",
    projectId: "superheroes-img-storage",
    storageBucket: "superheroes-img-storage.appspot.com",
    messagingSenderId: "795722369164",
    appId: "1:795722369164:web:8e6874e5cb8852bc80d3a9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app)