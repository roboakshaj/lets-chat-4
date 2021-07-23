 // Your web app's Firebase configuration
 var firebaseConfig = {
      apiKey: "AIzaSyDtKqW6gcwW8OLj00u65kEwudHg17aUEXk",
      authDomain: "kwitter-375e0.firebaseapp.com",
      databaseURL: "https://kwitter-375e0-default-rtdb.firebaseio.com",
      projectId: "kwitter-375e0",
      storageBucket: "kwitter-375e0.appspot.com",
      messagingSenderId: "294030547597",
      appId: "1:294030547597:web:c350c483483a0a86f620c4"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);




user_name=localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML="welcome "+user_name;
    

    function addroom(){
      room_name=document.getElementById("room_name").value;
      firebase.database().ref("/").child(room_name).update({
        purpose:"adding room name"
      });
      localStorage.setItem("room_name", room_name);
      window.location="kwitter_page.html";

    }
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room Name -" +Room_names);
row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
    document.getElementById("output").innerHTML +=row;
      });});}
getData();

function logout(){
  window.location="index.html";
}

function redirectToRoomName(name){
  localStorage.setItem("room_name", name);
  window.location="kwitter_page.html";
}