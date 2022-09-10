// Problem 2 :
// Given a string print, the number of times each character appears



let str= "aditya";
let obj={};

for(let i=0 ; i<=str.length-1 ; i++){
  if (obj[str[i]]==undefined){
    obj[str[i]]=1;
  }else{
    obj[str[i]]++
  }

  
}for(let k in obj){
  console.log(k,'is present',obj[k],"times.")
}