let arr = [10, 24, 56, 72, -10, -88, 100, 564];

let odd_arr=arr.filter(function(item ,index){
  return index%2!=0;
});

let sum=0;

for(let i=0 ; i <= odd_arr.length-1 ; i++){
  sum=sum+odd_arr[i]
}
console.log(sum);