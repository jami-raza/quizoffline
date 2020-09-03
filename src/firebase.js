import firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyCcF_nkZR7s3feXCHQvSEoGsQ3KJvLLau4",
    authDomain: "quiz-general-knowledge-5c2e0.firebaseapp.com",
    databaseURL: "https://quiz-general-knowledge-5c2e0.firebaseio.com",
    projectId: "quiz-general-knowledge-5c2e0",
    storageBucket: "quiz-general-knowledge-5c2e0.appspot.com",
    messagingSenderId: "587388719554",
    appId: "1:587388719554:web:e01b651829b3ac7c08465b"
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