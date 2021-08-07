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

var roomName = document.getElementById("roomNameinput").value;

function addRoom() {
    roomName = document.getElementById("roomNameinput").value;
    if (roomName != "") {
        firebase.database().ref("/").child(roomName).update({
            purpose: "adding room"
        });
        getData();
    } else {
        console.log("no");
    }
}

function getData() {
    firebase.database().ref("/").on('value',
        function (snapshot) {
            document.getElementById("output").innerHTML = "";
            snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key;
                Room_names = childKey;

                console.log("Room Name - ", Room_names);
                row = "<div class = 'room_name' id=" + Room_names + " onclick = 'redirect_to_roomName(this.id)'>" + Room_names + "</div><hr>";
                document.getElementById("output").innerHTML += row;
            });
        });
}
getData();
function redirect_to_roomName(name){
    console.log(name);
    localStorage.setItem("Room Name", name);

    window.location = "Kwitterpage.html";
}
function logout(){
    localStorage.removeItem("Username");
    window.location = "index.html";
}