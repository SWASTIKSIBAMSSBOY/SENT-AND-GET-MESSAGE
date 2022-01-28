//FIREBASE LINKS
// The web app's Firebase configuration
const firebaseConfig = {
      apiKey: "AIzaSyA1vo9GrIKy0-9_JPvGo5iTrX8mAZmIU7M",
      authDomain: "practice-activity-adv-94.firebaseapp.com",
      databaseURL: "https://practice-activity-adv-94-default-rtdb.firebaseio.com",
      projectId: "practice-activity-adv-94",
      storageBucket: "practice-activity-adv-94.appspot.com",
      messagingSenderId: "904054088217",
      appId: "1:904054088217:web:bc615ff8770fc27814c088",
      measurementId: "G-08J0E5YQBM",
      };
        
      
      
        // Initialize Firebase
        firebase.initializeApp(firebaseConfig);


//function of GET DATA firebase...//
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
      Room_names = childKey;
      console.log("room_name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" + Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();


user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "WELCOME" + user_name + "!";

//function of add room..//
function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
         purpose : "Adding Room Name"
   });

   localStorage.setItem("room_name", room_name);
   window.location = "page_index.html";

}


//function of REDIRECTTOROOMNAME...//
function redirectToRoomName(name)
{
      console.log(name);

      localStorage.setItem("room_name", name);
      window.location = "page_index.html";
}



//function for logout...//
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

        window.location = "page_index.html";
}



