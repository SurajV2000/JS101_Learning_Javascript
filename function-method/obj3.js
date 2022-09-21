var sales = [
  { item: 'PS4 Pro', stock: 3, original: 399.99 },
  { item: 'Xbox One X', stock: 1, original: 499.99, discount: 0.1 },
  { item: 'Nintendo Switch', stock: 4, original: 299.99 },
  { item: 'PS2 Console', stock: 1, original: 299.99, discount: 0.8 },
  { item: 'Nintendo 64', stock: 2, original: 199.99, discount: 0.65 }
];

function calculateSalesTotals(){
  for(let i=0 ; i<=sales.length-1 ; i++){
  let sum;
  if(sales[i]["discount"]==undefined){
    sales[i]["sale"]=sales[i]["original"];
  }else{
  sum=(sales[i]["original"])*sales[i]["discount"];
  sales[i]["sale"]=sales[i]["original"]-sum;
  }

  let tot;
  total=sales[i]["stock"]*sales[i]["sale"]
  sales[i]["total"]=total
}
}
calculateSalesTotals()
console.log(sales)