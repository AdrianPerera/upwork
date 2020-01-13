var notification_permission="default";

function getValuesForModal(){
    var tableNo=1;
    var playerId='anonymous';
    alert(playerId + " is ready play at the table "+ tableNo);

    $('#myModal').modal('toggle');
}

// Popup window
function popup() {
	popupWindow = window.open("", "MsgWindow", "width=300,height=200");
    popupWindow.document.write("<br><br><hr><p style=\"text-align: center;\">player1 is ready to play at the room 1!</p><hr>" );
    playAudio();
}


function playAudio(){
var notification_audio = new Audio('static/sounds/notify.mp3');
notification_audio.play();
}

function toggleBell(){
  $('#bell-slash').toggleClass('hide')
  $('#bell').toggleClass('hide')
  $(".subscribe-tab").toggleClass('hide')
}

//Desktop Notification
function deviceNotificationSetUp() {
  var initial_message="Hi there! We will notify you on recent player activities on lightning-poker.com";
  toggleBell();
  if($('#bell-slash.hide').length===1){
    var notification_denied=new Notification("We will not send notifications!");
    var notification_audio = new Audio('static/sounds/denied.mp3');
    notification_audio.play();
    //TODO: This needs to be determined later.How to switch of the notifications
  }else{
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
      var notification_audio = new Audio('static/sounds/denied.mp3');
      notification_audio.play();
    }
    else if (Notification.permission === "granted") {
      var notification = new Notification("you have already allowed us to send notifications");
      playAudio();
    }
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        if (permission === "granted") {
          var notification = new Notification(initial_message);
          playAudio();
        }
      });
    }

  }
}

