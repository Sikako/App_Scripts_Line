PropertiesService.getScriptProperties().setProperty('url', 'https://docs.google.com/spreadsheets/d/1F1sLpI1lRJlQc8TqCcTnI2-ZFUGesp2XeJMdoSew1A8/edit#gid=0');     // 班級事故表url

function back() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('歸營事故');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=30; i<=38; i++){
    var ax = s.getRange(i,2).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function morning1() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(一)早點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,2).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function morning12() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(一)12節');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,3).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function evening1() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(一)晚自習');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,4).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function night1() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(一)晚點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,5).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function morning2() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(二)早點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,6).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function evening2() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(二)晚自習');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,7).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function night2() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(二)晚點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,8).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function morning3() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(三)早點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,9).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function evening3() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(三)晚自習');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,10).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function night3() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(三)晚點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,11).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function morning4() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(四)早點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,12).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function evening4() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(四)晚自習');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,13).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function night4() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(四)晚點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,14).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function morning5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(五)早點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,15).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function evening5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');      // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(五)晚自習');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,16).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function night5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(五)晚點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,17).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function train() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(五)基教/會操');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=16; i<=24; i++){
    var ax = s.getRange(i,3).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+9; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function bye5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(五)離營宣教');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=16; i<=24; i++){
    var ax = s.getRange(i,5).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+9; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function GG() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('(四)社課/莒光');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=16; i<=24; i++){
    var ax = s.getRange(i,4).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+9; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}

function backnight() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.openByUrl(url);
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.getActiveSpreadsheet();
  var d=sd.getSheetByName('收假晚點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=16; i<=24; i++){
    var ax = s.getRange(i,2).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+9; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
  // for(var i=31; i<=38; i++){
  //   var ax=s.getRange(i,2).getValue();
  //   var name=s.getRange(i,1).getValue();                                  // 名字
  // }
  // var ax=s.getRange(30, 2).getValue();
  //    if(ax == ""){
  //       ax = "快點啦幹";
  //       s.getRange(30, 2).setValue(ax);
}
