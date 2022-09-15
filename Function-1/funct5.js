let arr=["MA", "SA", "I", "SCH", "OOL"];
  let lower ='abcdefghijklmnopqrstuvwxyz'
let upper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function toLower(char){

for(let i=0 ; i<26 ; i++){
  if(char==upper[i]){
    char=lower[i];
    break;
  }
}
 return char;
}

function wordLower(word){
let sum='';
for(let j=0 ; j<=word.length-1; j++){
  for(let k=0;k<26;k++){
    if(word[j]==upper[k]){
      sum=sum+toLower(word[j])
      break;
    }
  }
}
  return sum;
}
let bag=[]
for(let m=0 ; m<=arr.length-1 ; m++){
  bag.push(wordLower(arr[m]))
}
console.log(bag);