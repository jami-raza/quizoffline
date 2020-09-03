importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js')

const firebaseConfig = {
    apiKey: "AIzaSyCCZQ1uE8h_HsYTONYd4xEemSlvnxU1-qw",
    authDomain: "messaging-app-b361a.firebaseapp.com",
    databaseURL: "https://messaging-app-b361a.firebaseio.com",
    projectId: "messaging-app-b361a",
    storageBucket: "messaging-app-b361a.appspot.com",
    messagingSenderId: "803863034285",
    appId: "1:803863034285:web:2c8e8e98c5165cb0e40924"
}
firebase.initializeApp(firebaseConfig)
firebase.messaging();

