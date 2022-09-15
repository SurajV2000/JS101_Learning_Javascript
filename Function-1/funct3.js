
function isOdd(num){
    let flag=false;

    if(num%2==1){
      flag=true;
    }
  return flag;
}

let numb=30;
for(let j=0 ; j<=numb ; j++){
  if(isOdd(j)==true){
    console.log(j);
  }
}