// global variables
// PropertiesService.getScriptProperties().setProperty('list', '');    // �S��H��
//   var list = PropertiesService.getScriptProperties().getProperty('list');       // ���olist��

// �T�{�O�_��g�k��
function CheckIfBack() {
  var mode=1;
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('�ƬG��')
  //var lr=s.getLastRow()
  var list=new Array();                                                        // �S��H��
  for(var i=30; i<=38; i++){
    var ax=s.getRange(i,2).getValue();
    var name=s.getRange(i,1).getValue();                                  // �W�r
    if(ax == ""){                                                        // �S���k��
      list.push(name);
    }
  }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
  Send(list,1);
  console.log("�w�ǥX");
  console.log(list);
}

  
//�{���X�}�l

function Send(list,mode){
/* mode
1 : �k��ƬG
 */

  var token = "DmxZ9D5lK3JtCbRmMDsvs2GHQ79jlzs4OQZ7WuZ1Giv";                       // Line Notify ���v��
  var message = "\n";
  if(mode=1){
    for(var i=0; i<list.length; i++){
       message= message+list[i]+"\n";
    }                           
    message = message + "\n�|����g�k��ƬG";                         
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

//�{���X����