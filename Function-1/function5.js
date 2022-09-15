//Problem 5: Write a function to replace spaces in a given string with - .


function replace(str){
let new_str='';
for(let i=0 ; i<=str.length-1 ; i++){
  if(str[i]==" "){
    new_str+='-';
  }else{
    new_str+=str[i];
  }
}
console.log(new_str);
}

replace('hello how are you')
replace("i am fine");
replace('what about you ?');
