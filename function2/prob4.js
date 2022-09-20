let str="Mozilla"

function subString(x,y){
let sum='';
if(y==undefined || y==""){
  y=str.length-1;
}
if(x>y){
  let a=x;
  x=y;
  y=a;
}
  if(y>str.length){
    y=str.length;
  }
for(let i=x ; i<y ; i++){
  sum=sum+str[i];
}
console.log(sum);
}

subString(0,10)
subString(4,7)
subString(0,1)
subString(0,10)