let animals = ['Dodo', 'Tiger', 'Penguin', 'Dkodo'];

function last_indexof(input){
  let flag;
  let op
for(let i=0 ; i<=animals.length-1 ; i++){
  if(input!=animals[i]  || input==""){
   flag=false
  }else{
    op=i
    flag=true;
    break;
  }
}if(flag==true){
  console.log(op)
}else{
  console.log(-1)
}
}

last_indexof()
last_indexof("Dkodo")
last_indexof("Dodo")
last_indexof("df")
last_indexof("Penguin")