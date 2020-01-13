function getValuesForModal(){
    var tableNo=1;
    var playerId='anonymous';
    alert(playerId + " is ready play at the table "+ tableNo);

    $('#myModal').modal('toggle');
}

$("#bell").click(function(){
//    var tableNo="";
//    var playerId="";
//    window.alert(playerId+ " is ready to play at the table "+tableNo);
    window.alert("Player1 is ready to play at the table JNpdG0tUuR63ZLdyMdCe");
 });


// Popup window
function popup() {
	popupWindow = window.open("", "MsgWindow", "width=300,height=200");
    popupWindow.document.write("<br><br><hr><p style=\"text-align: center;\">player1 is ready to play at the room 1!</p><hr>" );
    var audio = new Audio('static/sounds/notify.mp3');
    audio.play();
}

//Desktop Notification
function deviceNotificationSetUp() {
  var initial_message="Hi there! We will notify you on recent player activities on lightning-poker.com";
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    var notification = new Notification(initial_message);
    var audio = new Audio('static/sounds/notify.mp3');
    audio.play();
  }
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification(initial_message);
      }
    });
  }

}

