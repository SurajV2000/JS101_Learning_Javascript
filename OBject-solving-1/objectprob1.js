// Problem 1 :
// Given an array find the unique items in the array


let arr=["Suraj", "Raj","Akash","Rahul","Raj", "Suraj"];
let obj={}
for(let i=0; i<=arr.length-1 ; i++){
if(obj[arr[i]]==undefined) { 
      obj[arr[i]]=1;
}else{
  obj[arr[i]]++;
}
  
} 

for(let key in obj){
  if (obj[key]==1){
    console.log(key)
  }
}