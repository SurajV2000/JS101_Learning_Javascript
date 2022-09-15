function average(arr){
let sum=0;
for(let i=0 ; i<=arr.length-1 ; i++){
  sum=sum+arr[i];
}if(sum==0){
  console.log(0)
}else{
  console.log(sum/arr.length)
}
}

average([5,5,6,9,7,9]);