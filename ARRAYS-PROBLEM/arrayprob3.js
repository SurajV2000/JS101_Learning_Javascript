let arr= [1,2,3,4,5,6,7,8,9,10,12];
let count=0;
let sum=0;

for(let i=0 ; i<=arr.length-1 ; i++){

  if(arr[i]%2==0){

   sum=sum+arr[i];
    count++;
    
  }
  
}
console.log("The average of all the even numbers is",sum/count);