



function insert(num){
  calcform.tx.value = calcform.tx.value+num;
  }

function back(num){
 var exp = calcform.tx.value;
 calcform.tx.value = exp.substring(0,exp.length-1);
}
function clean(){
   calcform.tx.value = '';
}

function calc(num){
  var exp = calcform.tx.value;
  if(exp){
    calcform.tx.value = eval(exp);
  }
}
