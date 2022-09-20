let animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];
function mySlice(x,y){
  let arr=[];
if(y>=animals.length || y==undefined){
  y=animals.length-1;
}
if(x==undefined){
  x=0;
}
if(x<0){
  x=animals.length+(x);
}
if(y<0){
  y=animals.length-1+y
}
for(let i=x ; i<=y ; i++){
  arr.push(animals[i]);
}
console.log(arr)
}
mySlice(2)
mySlice(2,3)
mySlice(1,5)
mySlice(-2)
mySlice(2,-1)
mySlice()
