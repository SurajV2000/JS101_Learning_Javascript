//Problem 1 : Given a string count the number of words in that string
let str ="given";
let count = 0 ;

for (let i=0 ; i<=str.length-1 ; i++){

  if (str[i]==" "){
    count++;
  }
  
}
if (str.length==0){
  console.log("There are 0 words.");
}else{
  console.log("There are",count+1,"words.");
}


