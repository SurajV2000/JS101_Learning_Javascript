let object = {

  details: [],

      addDetails: function(name,english,math,physics) {
    let obj={};
    obj["name"]=name
    obj["eng"]=english
    obj["math"]=math
    obj["phy"]=physics
    this.details.push(obj)
    },

        least: function() {
      let min=Infinity;
      let least
      for(let i=0 ; i <=this.details.length-1 ; i++){
        let sum=0;
        sum=this.details[i]["eng"]+this.details[i]["math"]+this.details[i]["phy"]
        if(sum<min){
          min=sum;
          least=this.details[i]["name"]
        }
      }
      console.log(least,min)
        },

  highest: function() {
let max=-Infinity;
let high;
for(let i=0 ; i <=this.details.length-1 ; i++){
  let sum=0;
  sum=this.details[i]["eng"]+this.details[i]["math"]+this.details[i]["phy"]
  if(sum>max){
    max=sum;
    high=this.details[i]["name"]
  }
}
console.log(high,max)  }
};

object.addDetails("suraj",55,10,10)
object.addDetails("raj",50,10,10)
object.addDetails("aman",55,150,10)
object.addDetails("naman",5,1,10)
object.least()
object.highest()