let a=1;
let sum=0;
let count=0;

while(a<=100){
  if(a%2==0){
    sum=sum+a;
    count++;
}a++
}
console.log("The average of even numbers from 1 to 100 is", sum/count);