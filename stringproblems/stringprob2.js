let arr=["dog", "raj" ,"raj" , "cat" , "den"];
let count = 0 ;
let x=0;

while(x<=arr.length-1){

count=count+arr[x].length;
  x++;
  
}
console.log("Total numbers of character in given array is",count);