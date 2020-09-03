import firebase from 'firebase';
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
const messaging = firebase.messaging();

export function PushNotification(){
    Notification.requestPermission().then((permission)=>{
        console.log(permission)
        if(permission === "granted"){
            messaging.getToken().then((currentToken)=>{
                if (currentToken){
                    console.log("Token",currentToken)
                }
                else{
                    console.log("No permission");
                }
            }).catch((err) =>{
                console.log('An error occured while recovering',err);
            })
        }
    })
}