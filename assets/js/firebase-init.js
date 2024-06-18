// firebase-init.js

// Tambahkan konfigurasi Firebase Anda
const firebaseConfig = {
    apiKey: "AIzaSyCvfCnBnKwvJGmUEgS99nCwJrdCK0DDjWU",
    authDomain: "bullynators.firebaseapp.com",
    projectId: "bullynators",
    storageBucket: "bullynators.appspot.com",
    messagingSenderId: "1069138186018",
    appId: "1:1069138186018:web:5d30e75294a13ff07a1f7b",
    measurementId: "G-56SY6DHNW5",
    databaseURL:"https://bullynators-default-rtdb.asia-southeast1.firebasedatabase.app/"
};

// Inisialisasi Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
