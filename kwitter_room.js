 var firebaseConfig = {
    apiKey: "AIzaSyAcmNRAd1vfYJItt9LZ8mnrD7RQFdqR3l8",
    authDomain: "kwitter-92859.firebaseapp.com",
    databaseURL: "https://kwitter-92859-default-rtdb.firebaseio.com",
    projectId: "kwitter-92859",
    storageBucket: "kwitter-92859.appspot.com",
    messagingSenderId: "760878228666",
    appId: "1:760878228666:web:69e25a6fb1a1e95a5b4e83",
    measurementId: "G-CWQHF41N55"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
//ADD YOUR FIREBASE LINKS HERE

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      row= "<div class='room_name' id ="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+Room_names+"</div><hr>";
      document.getElementById("output").innerHTML +=row;
      //End code
      });});}
getData();
function addRoom() {
  room_name=document.getElementById("room_name").value

firebase.database().ref("/").child(room_name).update({
  purpose:"adding room name"
  })
localStorage.setItem("room_name",room_name);
window.location ="kwitter_page.html";
}
function redirectToRoomName(name) {
  localStorage.setItem("room_name",name);
  window.location="kwitter_page.html"
}




