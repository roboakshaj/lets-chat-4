//your firebase links
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
room_name=localStorage.getItem("room_name");
  

function send(){
 msg=document.getElementById("msg").value;
 firebase.database().ref(room_name).push({
       name:user_name, 
       message:msg,
       like:0
 });
 document.getElementById("msg").value="";
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();