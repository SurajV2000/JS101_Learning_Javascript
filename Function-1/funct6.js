
let lower ='abcdefghijklmnopqrstuvwxyz'
let upper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ'
function convert(char){

for(let i=0 ; i<26 ; i++){
  if(char==upper[i]){
    char=lower[i];
    break;
  }else if(char==lower[i]){
    char=upper[i]
  }
}
 return char;
}

function swap(str){
sum='';
for(let j=0 ; j<=str.length-1 ; j++){
  sum=sum+convert(str[j]);
}console.log(sum);
}
swap('Test')
swap('SuRaJ')