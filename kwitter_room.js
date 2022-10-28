
const firebaseConfig = {
      apiKey: "AIzaSyA5qWvepL50fkb2uHlUcGTZxZVZ-DME6jE",
      authDomain: "kwitter-7c6fd.firebaseapp.com",
      databaseURL: "https://kwitter-7c6fd-default-rtdb.firebaseio.com",
      projectId: "kwitter-7c6fd",
      storageBucket: "kwitter-7c6fd.appspot.com",
      messagingSenderId: "718661470079",
      appId: "1:718661470079:web:10e1495f4c215e5d153c4a"
    };
    
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
username=localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML="welcome "+username+"!";

function addRoom()
{
      room_name=document.getElementById("room_name").value
      firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      window.location="kwitter_page.html"
}
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
row="<div class='room_name' id="+Room_names+" onclick='redirectoRoomName(this.id)'  >#"+Room_names+"</div><hr>";
document.getElementById("output").innerHTML+=row;
      //End code
      });});}
getData();

function redirectoRoomName(name)
{
      window.location="kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location="index.html"
}