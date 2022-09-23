let arr=[5,5,6,9,7,9]
let  average =(arr) => {

  let sum=0;
  
  arr.forEach((element , index) => {
    sum=sum+element;
  });
  
  sum==0 ? console.log(0) : console.log(sum/arr.length) ;

}

average(arr);