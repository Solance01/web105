const firebaseConfig = {
    apiKey: "AIzaSyDDdU2DS9zvORdeC-nEz5Y_86NsNXAuXgk",
    authDomain: "web104-5d51d.firebaseapp.com",
    projectId: "web104-5d51d",
    storageBucket: "web104-5d51d.appspot.com",
    messagingSenderId: "110320648625",
    appId: "1:110320648625:web:8ebfe1b4257b6b132c7d90",
    measurementId: "G-YS9HZL1Y3P"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

// CREATE ACCOUNT SCRIPT

function createAccount() {

    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in 
            let user = userCredential.user;
            console.log(user)
            alert("Account creation successful!")
            window.location.href = "https://web05.scwebsrv.com/web-104/FINAL-PROJECT/Final-Solance-Patenaude.html/Log-In-Page.html"
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            // ..
        });

}
