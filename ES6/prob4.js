let lower ='abcdefghijklmnopqrstuvwxyz';
let upper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let swap= (str) => {
  let bag="";
for(let i=0 ; i<= str.length-1 ;i++ ){
  for(let j=0 ; j<= lower.length-1 ; j++){
    str[i]==upper[j] ? bag+=lower[j] : str[i]==lower[j] ? bag+=upper[j]: null;
  }
}
console.log(bag)
}

swap("Test");