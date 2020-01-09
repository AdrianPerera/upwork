function getValuesForModal(){
    var tableNo=1;
    var playerId='anonymous';
    alert(playerId + " is ready play at the table "+ tableNo);

    $('#myModal').modal('toggle');
}

$("#bell").click(function(){
    window.alert("Player1 is ready to play at the table JNpdG0tUuR63ZLdyMdCe");
 });


// Popup window code
function newPopup() {
	popupWindow = window.open("", "MsgWindow", "width=300,height=200");
    popupWindow.document.write("<br><br><hr><p style=\"text-align: center;\">player1 is ready to play at the room 1!</p><hr>" );
}

//Desktop Notification code
function notifyMe() {
  if (!("Notification" in window)) {
    alert("This browser does not support desktop notification");
  }
  else if (Notification.permission === "granted") {
    var notification = new Notification("Hi there!");
  }
  else if (Notification.permission !== "denied") {
    Notification.requestPermission().then(function (permission) {
      if (permission === "granted") {
        var notification = new Notification("Hi there!");
      }
    });
  }

}