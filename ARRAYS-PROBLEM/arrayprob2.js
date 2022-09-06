let char="g";

let small=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];

let big=["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

for( let i=0 ; i<=small.length-1 ; i++){

  if(small[i]==char){
    console.log(char,"in the upper case printed as",big[i],".");
  }
  
}