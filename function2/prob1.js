// Problem 1. Write a custom function that has the same behavior of inbuilt Array Join Function 

let arr = ['Wind', 'Water', 'Fire'];


function myJoin(element){
let sum='';
for(let i=0 ; i<=arr.length-1 ; i++){
  if(i<arr.length-1){
    sum=sum+arr[i]+element
  }else{
       sum=sum+arr[i];
       }
}
console.log(sum)
}

myJoin(",");
myJoin("-");
myJoin(" ")
