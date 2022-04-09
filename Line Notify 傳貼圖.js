//程式碼開始

function sendSticker() {
  var token = "Line Notify 權杖";
  var stickerPackageId = 1;  //Line 貼圖主題編號
  var stickerId = 2;         //Line 貼圖編號
 
  var message = " ";
  sendLineNotify(message, token,  stickerPackageId, stickerId);
}

function sendLineNotify(message, token, stickerPackageId, stickerId){
  var options =
   {
     "method"  : "post",
     "payload" : 
     {
       "message" : message,
       "stickerPackageId" : "" + stickerPackageId + "",
       "stickerId" : "" + stickerId + ""
     },
     "headers" : {"Authorization" : "Bearer " + token}
   };
   UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}

//程式碼結束


// https://developers.line.biz/en/docs/messaging-api/sticker-list/
