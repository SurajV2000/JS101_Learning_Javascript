let pets = ['cat', 'dog', 'bat'];

function my_include(input){
let sum='';
let flag =false;
for(let i=0 ; i<=pets.length-1 ; i++){
  if(input==pets[i])
    flag=true;
}
console.log(flag);
}


my_include("cat");
my_include("mat")
my_include("dog")