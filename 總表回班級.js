PropertiesService.getScriptProperties().setProperty('url', '�Z�Ÿպ�����}');     // 13url

function Toback() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');               // 13 sheet
  var s=ss.getSheetByName('�k��ƬG');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=30; i<=38; i++){                      // �Z�ŨƬG���C��
    d.getRange(i,2).setValue(list.shift());          // getRange(i,<�ƬG���>)
    
  }
                      // i<rd+ <�Z�ŤH��>  
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
}

function morning1() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�@)���I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,2).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function morning12() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�@)12�`');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,3).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function evening1() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�@)�ߦ۲�');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,4).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function night1() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�@)���I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,5).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function morning2() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�G)���I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,6).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function evening2() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�G)�ߦ۲�');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,7).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function night2() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�G)���I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,8).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function morning3() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�T)���I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,9).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function evening3() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�T)�ߦ۲�');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,10).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function night3() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�T)���I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,11).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function morning4() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�|)���I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,12).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function evening4() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�|)�ߦ۲�');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,13).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function night4() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�|)���I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,14).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function morning5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(��)���I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,15).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function evening5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(��)�ߦ۲�');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,16).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function night5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(��)���I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,17).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function morning6() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(��)���I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=rd; i<rd+10; i++){
    var ax = s.getRange(i,cd).getValue();
    list.push(ax);
  }
  for(var i=2; i<=10; i++){
    d.getRange(i,18).setValue(list.shift());
    
  }
    
  // d.getRange(52,3).setValue(ax);
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function Totrain() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(��)���/�|��');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=16; i<=24; i++){
    var ax = s.getRange(i,3).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+9; i++){  
    d.getRange(i,3).setValue(list.shift());
  }
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function Tobye5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(��)����ű�');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=16; i<=24; i++){
    var ax = s.getRange(i,5).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+9; i++){  
  d.getRange(i,3).setValue(list.shift());
  }
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function bye6() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(��)����ű�');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=16; i<=24; i++){
    var ax = s.getRange(i,6).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+9; i++){  
  d.getRange(i,3).setValue(list.shift());
  }
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function ToGG() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('(�|)����/����');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=16; i<=24; i++){
    var ax = s.getRange(i,4).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+9; i++){  
  d.getRange(i,3).setValue(list.shift());
  }
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}

function backnight() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // ���ourl��
  var sd=SpreadsheetApp.openByUrl(url);
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('�ƬG��');
  var s=ss.getSheetByName('�������I�W');
  var rd=52;                                      // �C
  var cd=3;                                       // ��
  var list=new Array();
  for(var i=16; i<=24; i++){
    var ax = s.getRange(i,2).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+9; i++){  
  d.getRange(i,3).setValue(list.shift());
  }
  console.log('�w��g');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // �W�r
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "���I�շF";
  //       s.getRange(30, 2).setValue(ax);
}