//程式碼開始

function getImageDatafromGoogleDrive() { 
  var token = "Line Notify 權杖";
  var imageId = "Google Drive 裡圖片的 ID";

  var message = " ";
  var blob = DriveApp.getFileById(imageId).getBlob();
  var boundary = "Boris Lu @ http://www.youtube.com/c/borispcp";
  var imageData = Utilities.newBlob(
      "--" + boundary + "\r\n"
      + "Content-Disposition: form-data; name=\"message\"; \r\n\r\n" + message + "\r\n"
      + "--" + boundary + "\r\n"
      + "Content-Disposition: form-data; name=\"imageFile\"; filename=\"" + blob.getName() + "\"\r\n"
      + "Content-Type: " + blob.getContentType() +"\r\n\r\n"
      ).getBytes();
  imageData = imageData.concat(blob.getBytes());
  imageData = imageData.concat(Utilities.newBlob("\r\n--" + boundary + "--\r\n").getBytes());
  sendImagetoLineNotify(imageData, token, boundary);
}

function sendImagetoLineNotify(imageData, token, boundary){
  var options = {
    "method" : "post",
    "contentType" : "multipart/form-data; boundary=" + boundary,
    "payload" : imageData,    
    "headers" : {"Authorization" : "Bearer " + token}
  };
  UrlFetchApp.fetch("https://notify-api.line.me/api/notify", options);
}

//程式碼結束
