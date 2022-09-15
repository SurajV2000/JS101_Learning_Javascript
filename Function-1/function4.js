//Problem 4: Write a function to check if the char is a small case or not.


function checkChar(char){
  let flag=false
let small='abcdefghijklmnopqrstuvwxyz'
for(let i=0 ; i<=small.length-1 ; i++){
  if(char==small[i]){
    flag=true
    break;
  }
}
if(flag==true){
  console.log(char,'is a small case.')
}else{
    console.log(char,'is not a small case.')

}
}

checkChar("a");
checkChar('Z');
checkChar("g");