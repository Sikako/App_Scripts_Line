// 到處發條件設定為每15分鐘觸發一次

function report() {
  var done = 1;                                   // 皆有填寫
  var count = 0;                                  // 填時間的人數
  var thelasttime;                              // 傳最後一次了
  var token="你要傳送的聊天室token";
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('早、晚點名')
  var list=new Array();                                                    // 沒填人員
  var time=new Array();
  var msg="\n----------\n9班\n";
  // 迴圈抓資料
  for(var i=16; i<=26; i++){
    var ax=s.getRange(i,2).getValue();                                    // 歸營時間
    var name=s.getRange(i,1).getValue();                                  // 名字
    var method=s.getRange(i,3).getValue();                                // 歸營方式
    // 有人沒填時間
    if(ax == ""){
      done = 0;
      break;
    }
    // 歸營
    if(ax == "已歸營" || ax == "歸營"){   
      s.getRange(i,2).setValue("歸營")          
                                                // 沒填歸營
      time.push(ax);
      msg = msg + name + " 已歸營" + "\n";
    }
    // 填時間，還沒歸營
    else if(Number.isInteger(ax)){
      list.push(name);
      time.push(ax);
      msg = msg + name + " " + method + "， 預計" + ax + "歸營\n";
      count+=1;
    }
    // 其他事故
    else{
      time.push(ax);
      msg = msg + name + " " + ax + "\n";
    }
  }
  thelasttime = s.getRange(1,1).getValue();                       // 抓取最後一次的狀態，
  // 有人沒填
  if(!done){
    console.log("有人沒填");
  }
  // 事故有變動
  else if(count != thelasttime){
    s.getRange(1,1).setValue(count);
    Send(msg,token);
    console.log("已傳出");
    console.log(msg);
  // 事故沒有變動
  }else if(count == thelasttime){
    console.log("事故沒有變動");
    
  }
}
