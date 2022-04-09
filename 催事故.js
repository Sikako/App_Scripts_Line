// global variables
// PropertiesService.getScriptProperties().setProperty('list', '');    // 沒填人員
//   var list = PropertiesService.getScriptProperties().getProperty('list');       // 取得list值

// 確認是否填寫歸營
function CheckIfBack() {
  var mode=1;
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表')
  //var lr=s.getLastRow()
  var list=new Array();                                                        // 沒填人員
  for(var i=30; i<=38; i++){
    var ax=s.getRange(i,2).getValue();
    var name=s.getRange(i,1).getValue();                                  // 名字
    if(ax == ""){                                                        // 沒填歸營
      list.push(name);
    }
  }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
  Send(list,1);
  console.log("已傳出");
  console.log(list);
}

  
//程式碼開始

function Send(list,mode){
/* mode
1 : 歸營事故
 */

  var token = "DmxZ9D5lK3JtCbRmMDsvs2GHQ79jlzs4OQZ7WuZ1Giv";                       // Line Notify 的權杖
  var message = "\n";
  if(mode=1){
    for(var i=0; i<list.length; i++){
       message= message+list[i]+"\n";
    }                           
    message = message + "\n尚未填寫歸營事故";                         
  }

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