let product= ["Rice", "Dal", "Salt"];
let quantity=[2, 3, 1];
let price= [60, 50, 20];
let object={
  data:[],

  add : function(product,quantity,price){
   let obj={};
    obj["product"]=product;
    obj["quantity"]=quantity;
    obj["price"]=price;
    this.data.push(obj);
  },

  total : function(){
    let total=0;
    for(let i = 0 ; i <=price.length-1 ; i++){
      total+=this.data[i].quantity*this.data[i].price;
    }
    console.log(total);
  }
}

for(let i=0; i<=price.length-1 ; i++){
  object.add(product[i],quantity[i],price[i])
}
object["total"]();

