PropertiesService.getScriptProperties().setProperty('url', 'https://docs.google.com/Xxxxxxxxx');     // 總事故表url

function back() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
  var d=sd.getSheetByName('歸營事故');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=30; i<=38; i++){                      // 班級事故表的列數
    var ax = s.getRange(i,2).getValue();          // getRange(i,<事故欄數>)
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){                    // i<rd+ <班級人數>
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');
}

function morning1() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function morning12() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function evening1() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function night1() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function morning2() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function evening2() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function night2() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function morning3() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function evening3() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function night3() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function morning4() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function evening4() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function night4() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function morning5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function evening5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');      // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function night5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function morning6() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
  var d=sd.getSheetByName('(六)早點名');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=2; i<=10; i++){
    var ax = s.getRange(i,18).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+10; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');

}

function train() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function bye5() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function bye6() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
  var d=sd.getSheetByName('(六)離營宣教');
  var rd=52;                                      // 列
  var cd=3;                                       // 欄
  var list=new Array();
  for(var i=16; i<=24; i++){
    var ax = s.getRange(i,6).getValue();
    list.push(ax);
  }
  for(var i=rd; i<rd+9; i++){
    d.getRange(i,cd).setValue(list.shift());
  }
  
  // d.getRange(52,3).setValue(ax);
  console.log('已填寫');

}

function GG() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}

function backnight() {
  var url = PropertiesService.getScriptProperties().getProperty('url');       // 取得url值
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('事故表');
  var sd=SpreadsheetApp.openByUrl(url);
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

}
