function Send(msg,tk){

  var token = tk;                       // Line Notify 的權杖
  var message = msg;

  sendLineNotify(message, token);
}

function sendLineNotify(message, token){
  var options =
   {
     "method"  : "post",
     "payload" : {"message" : message},
     "headers" : {"Authorization" : "Bearer " + token}
   };
   UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}
