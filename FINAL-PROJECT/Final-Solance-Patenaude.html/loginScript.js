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

function loginAccount() {
    // declare vars
    let email = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((userCredential) => {
            // Signed in
            var user = userCredential.user;
            console.log(user)

            window.location.href = "https://web05.scwebsrv.com/web-104/FINAL-PROJECT/Final-Solance-Patenaude.html/Home-Page.html"

        })
        .catch((error) => {
            alert("Incorrect email and/or password, please try again")
            var errorCode = error.code;
            var errorMessage = error.message;
        });




    firebase.auth().setPersistence(firebase.auth.Auth.Persistence.LOCAL)
        .then(() => {
            var provider = new firebase.auth.GoogleAuthProvider();
            // In memory persistence will be applied to the signed in Google user
            // even though the persistence was set to 'none' and a page redirect
            // occurred.
            return firebase.auth().signInWithRedirect(provider);
        })
        .catch((error) => {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}