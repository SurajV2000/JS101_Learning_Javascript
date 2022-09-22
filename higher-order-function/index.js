let arr = [10, 24, 56, 72, -10, -88, 100, 564];
let odd_arr=arr.filter(function(item ,index){
  return index%2!=0;
});

console.log(odd_arr)