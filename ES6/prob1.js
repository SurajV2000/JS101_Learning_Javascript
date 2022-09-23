let limit = 15;

let isOdd = (i) =>{
  if(i%2==1){
    return true;
  }else{
    return false
  }
}

for(let i=1 ; i <= limit ; i++){
  if(isOdd(i)){
    console.log(i)
  }
}