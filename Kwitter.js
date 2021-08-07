var firebaseConfig = {
    apiKey: "AIzaSyBquTHn2ld8nrcczYazLY9xKRqQcHOfNfo",
    authDomain: "project-94-c8cb6.firebaseapp.com",
    databaseURL: "https://project-94-c8cb6-default-rtdb.firebaseio.com",
    projectId: "project-94-c8cb6",
    storageBucket: "project-94-c8cb6.appspot.com",
    messagingSenderId: "54316233436",
    appId: "1:54316233436:web:c572051c429869499f7a19",
    measurementId: "G-JP3NQJV3PF"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

var username;
function nextPage() {
    var username = document.getElementById("username_input").value;
    if (username != "") {
        localStorage.setItem("Username", username);
        window.location = "KwitterRoom.html";
    }
}