//程式碼開始

function myFunction() {
  var token = "D3sozz6iPaPBtBBmeTbQWWQbTd6pizXLQBgp9g04SVl";                       // Line Notify 的權杖
  var message = "今天已打勾";
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

//程式碼結束
