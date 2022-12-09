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

let allBlogs = ""




// create

function createBlog() {

    firebase.auth().onAuthStateChanged((user) => {
        if (user) {

            console.log(user.email)

            let userNameField = document.getElementById("userNav")
            userNameField.innerText = "Welcome, " + user.email

        } else {
            // User is signed out

        }

        let date = new Date();
        let email = user.email

        console.log(user)
        let newBlog = {
            Date: date,
            Content: document.getElementById("blogContent").value,
            User: email

            // get username/email and also get the time the blog was posted
        }


        db.collection("Blogs").doc().set(newBlog).then(() => {
            console.log("Successfully written!");
            readBlog()
        }).catch((error) => {
            console.error("Error writing document: ", error);
        });
    });
}

function readBlog() {




    db.collection("Blogs").doc().get().then((doc) => {
        if (doc.exists) {
            console(doc.data())
        }
    })

    getAllFromFirebase("Blogs", function (filledBlog) {
        console.log(filledBlog.docs[1].data())
        allBlogs = filledBlog.docs
        let messageDiv = document.getElementById("messageBoard")
        messageDiv.innerHTML = ""



        const querySnapshot = filledBlog.docs; querySnapshot.forEach(doc => {
            console.log(doc.data().Content)
            let content = doc.data().Content
            let user = doc.data().User
            let date = doc.data().Date.toDate()

            messageDiv.innerHTML += "<h4>" + user + "</h4> " + "<div>" + "<p>" + content + "</p>" + "</div>" + "<h5>" + date + "</h5>"
        })

    })

}

// authentication related stuff

function getUserName() {
    firebase.auth().onAuthStateChanged((user) => {
        if (user) {
            // User is signed in, see docs for a list of available properties
            // https://firebase.google.com/docs/reference/js/firebase.User
            console.log(user.email)

            let userNameField = document.getElementById("userNav")
            userNameField.innerText = "Welcome, " + user.email

            return user.email


            // ...
        } else {
            // User is signed out
            // ...
        }
    });

}


function getAllFromFirebase(incomingCollection, callback) {
    let docs = db.collection(incomingCollection);
    docs.orderBy("Date").get().then((success) => {
        callback(success);
    }).catch((error) => {
        console.log(error)

    });
}


function signOut() {
    firebase.auth().signOut().then(user => {

        alert("Succesfully logged out")

        window.location.href = "https://web05.scwebsrv.com/web-104/FINAL-PROJECT/Final-Solance-Patenaude.html/Log-In-Page.html"
    })

}

