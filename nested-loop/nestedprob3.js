for(i=1 ; i<=10 ; i++ ){

let star='';
  
for(j=1; j<=10 ; j++){
  if(i==1|| i==10){
    star=star+'*'
  }else{
if(j==1||j==10){
  star=star+'*'
}else{
  star=star+' ' ;
  } 
  }
}
console.log(star)
}