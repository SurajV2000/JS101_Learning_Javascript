var regd_mail= "sv1055@gmail.com";
var regd_pswd= "123456";

var enter_mail= "sv1055@gmail.com";
var enter_pswd= "12356";

if(regd_mail==enter_mail){
  if(regd_pswd==enter_pswd){
    console.log("Login Succesfully");
  }else{
    console.log("password is incorrect");
  }
}else{
  console.log("login failed");
}