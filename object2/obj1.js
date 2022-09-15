let arr1 =["Nrupul", "Prateek", "Aman", "Albert", "Yogesh"];
let arr2 =[32, 30, 26, 28, 44];
let age_filter=[];

for(let i=0 ; i<=arr2.length-1 ; i++){
let obj={};
  obj["name"]=arr1[i];
  obj["age"]=arr2[i]
  age_filter.push(obj);
}

for(let j=0 ; j<=arr2.length-1 ; j++){
  if(age_filter[j]["age"]>30){
    console.log(age_filter[j]["name"])
  }
}