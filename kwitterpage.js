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


var msg = "";
var user_name = localStorage.getItem("Username");
var room_name = localStorage.getItem("Room Name");


function Send() {
    msg = document.getElementById("send-input").value;

    firebase.database().ref(room_name).push({
          name: user_name,
          message: msg,
          like: 0
    })
    document.getElementById("send-input").value = "";
}

function getData() {
    firebase.database().ref("/" + room_name).on('value', function (snapshot) {
          document.getElementById("output").innerHTML = ""; snapshot.forEach(function (childSnapshot) {
                childKey = childSnapshot.key; childData = childSnapshot.val();
                 if (childKey != "purpose") {
                      firebase_message_id = childKey; message_data = childData;
                      console.log(firebase_message_id);
                      console.log(message_data);
                      name = message_data['name'];
                      message = message_data['message']; like = message_data['like']; name_with_tag = "<h4> " + name + "<img class='user_tick' src='tick.png'>";
                      message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";

                      like_button = "<button class='btn btn-warning' id=" + firebase_message_id + " value=" + like + " onclick='updateLike(this.id)'>";
                      
                      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: " + like + "</span></button><hr>";
                      
                      row = name_with_tag + message_with_tag + like_button + span_with_tag;
                      
                      document.getElementById("output").innerHTML += row;

                }
          });
    });
}


function updateLike(message_id){
          
          console.log("clicked on like button - "+ message_id);
          button_id=message_id;
          likes = document.getElementById(button_id).value;
          update_likes = Number(likes)+1;
          console.log(update_likes);
    
          firebase.database().ref(room_name).child(message_id).update({
                like : update_likes
          })
}


function logout() {
    localStorage.removeItem("Username");
    localStorage.removeItem("Room Name = ");
    window.location.replace("index.html");
}

getData();