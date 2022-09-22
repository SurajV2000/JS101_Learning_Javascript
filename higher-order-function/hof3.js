let arr = [3,4,5,6,7];

let sum='';

let output=arr.forEach(function(item ,index){
  
  if(index%2!=0){
    sum=sum+"- ";
  }else{
    sum=sum+arr[index]+" ";
  }
  
});

console.log(sum);