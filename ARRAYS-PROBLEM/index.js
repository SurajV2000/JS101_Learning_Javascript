let names= ["Suraj","Raj","Aaditya"];

for (let i=0; i<=names.length-1;i++){

  if(names[i]=="Raj" || names[i]=="Suraj"){
    continue;
  }
  
  console.log(names[i]);
  
}