///FIREBASE LINKS...////
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

        user_name = localStorage.getItem("user_name");
        room_name = localStorage.getItem("room_name");

//function FOR logout button....//
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");

        window.location = "SET_MEASSAGE.html";
}


//FUNCTION for send message..///
function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
            Name:user_name,
            Message:msg,
            Like:0
      });
      document.getElementById("msg").value = "";
}






//function of all getData FUNCTION and messaging and coding.....//////

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
      firebase_message_id = childKey;
      message_data = childData;
//Start code
      console.log(firebase_message_id);
      console.log(message_data);
      Name = message_data['Name'];
      Message = message_data['Message'];
      Like = message_data['Like'];
      name_with_tag = "<h4> "+ Name + "<img class='user_tick' src='tick.png'></h4>";
      message_with_tag = "<h4 class = 'message_h4'>" + Message + "</h4>";
      like_button = "<button class='btn btn-warning' id="+firebase_message_id+" value="+Like+" onclick='updateLike(this.id)'>";
      span_with_tag = "<span class='glyphicon glyphicon-thumbs-up'>Like: "+ Like +"</span></button><hr>";
//OUTPUT OF MESSAGE...///
      row = name_with_tag + message_with_tag + like_button + span_with_tag;
      document.getElementById("output").innerHTML += row;
//End code
   } });  }); }
getData();

///Code of like button..///
function updateLike(message_id)
{
      console.log("Clicked on Like Button - " + message_id);
      button_id = message_id;
      likes = document.getElementById(button_id).value;
      updated_likes = Number(likes) + 1;
      console.log(updated_likes);

      firebase.database().ref(room_name).child(message_id).update({
            Like : updated_likes
      });
}











/// CODE FOR LOGOUT BUTTON...///
function logout()
{
      localStorage.removeItem("user_name");
      localStorage.removeItem("room_name");
      window.location.replace("SET_MEASSAGE.html");
}