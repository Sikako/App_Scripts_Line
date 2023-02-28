function report() {
  var done = 1;                                   // 皆有填寫
  var count = 0;                                  // 填時間的人數
  var thelasttime;                              // 傳最後一次了
  var token="CObaaUCzk7uU61enSKom7IFv2WvTcs1wbYqNuufdnFS";
  var ss=SpreadsheetApp.getActiveSpreadsheet();
  var s=ss.getSheetByName('早、晚點名')
  var time_list=new Array();
  var msg="\n----------\n9班\n";
  for(var i=16; i<=26; i++){
    var time=s.getRange(i,2).getValue();                                    // 歸營時間
    var name=s.getRange(i,1).getValue();                                  // 名字
    var method=s.getRange(i,3).getValue();                                // 歸營方式
    // 有人沒填時間
    if(time == ""){
      done = 0;
      break;
    }
    // 歸營
    if(time == "已歸營" || time == "歸營"){   
      s.getRange(i,2).setValue("歸營")          
                                                // 沒填歸營
      time_list.push(time);
      msg = msg + name + " 已歸營" + "\n";
    }
    // 填時間，還沒歸營
    else if(Number.isInteger(time)){
      time_list.push(time);
      msg = msg + name + " " + method + "， 預計" + time + "歸營\n";
      count+=1;
    }
    // 其他事故
    else{
      time_list.push(time);
      msg = msg + name + " " + time + "\n";
    }
  }
  thelasttime = s.getRange(1,1).getValue();                       // 抓取最後一次的狀態，
  // 有人沒填
  if(!done){
    console.log("有人沒填");
  }
  // 尚未歸營的人數有變動
  else if(count != thelasttime){
    s.getRange(1,1).setValue(count);
    Send(msg,token);
    console.log("已傳出");
    console.log(msg);
  }else if(count == thelasttime){
    console.log("事故沒有變動");
    
  }
}
