let object={
    l: 10,
    b: 15,
    area : function(){
      let ar=this.l*this.b;
      console.log(ar)
    },
  peri : function(){
    let per=2*(this.l+this.b)
    console.log(per);
  }
    
}
object.area()
object["peri"]()