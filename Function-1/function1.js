//Problem 1: Create a function to check if a number is Prime or Not


function checkPrime(num){
  let count=0; 
for(let i=1 ; i<=num ; i++){
  if(num%i==0){
    count++;
  }
}
if(count==2){
  console.log(num,'Prime number')
}else{
  console.log(num,"Not A Prime number")

}
}
checkPrime(12);
checkPrime(7);