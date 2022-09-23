let arr= ["MA", "SA", "I", "SCH", "OOL"];
 let lower ='abcdefghijklmnopqrstuvwxyz';
let upper ='ABCDEFGHIJKLMNOPQRSTUVWXYZ';

let toLower = (char) => {
  for(let i=0 ;  i<26 ; i++){
    if(char==upper[i]){
      char=lower[i];
      break;
    }
}
  return char ;
}

let wordlow = (word) =>{
  let sum='' ;
  for(let j=0 ; j<=word.length-1 ; j++){
    for(let k=0; k<=upper.length-1 ; k++ ){
      if(word[j]==upper[k]){
        sum=sum+toLower(word[j]);
        break;
      }
    }
  }
  return sum;
}

let bag=[]
arr.forEach((element , index)  => {
  bag.push(wordlow(element));
})
console.log(bag);