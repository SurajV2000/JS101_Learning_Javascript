let arr=[
	{
		grade: "V",
		students: [
			{name: "Nrupul", marks: [10, 20, 30]},
			{name: "Prateek", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VI",
		students: [
			{name: "Aman", marks: [10, 20, 30]},
			{name: "Albert", marks: [20, 30, 40]}
		]
	},
	{
		grade: "VII",
		students: [
			{name: "Yogesh", marks: [10, 20, 30]},
			{name: "Sandhya", marks: [20, 30, 40]}
		]
	}
]
let obj1=[];
for(let i=0 ; i<=arr.length-1 ; i++){
  obj1.push(arr[i]["grade"])
  let obmarks=[] , obname=[];obg=[]
  for(let k=0 ; k<=arr[i]["students"].length-1 ; k++){
  let sum=0;
  for(let j=0 ; j<=arr[i]["students"][k]["marks"].length-1; j++){
    sum=sum+arr[i]["students"][k]["marks"][j]
  }
  obmarks.push(sum)
    obname.push(arr[i]["students"][k]["name"])
  }
  
  if(obmarks[0]>obmarks[1]){
    obj1.push(obmarks[0])
    obj1.push(obname[0])
    }else{
      obj1.push(obmarks[1])
    obj1.push(obname[1])
  }
}
 for(let t=0 ; t<=obj1.length-1; t=t+3){
  console.log(obj1[t]+'-'+obj1[t+2]+'-'+obj1[t+1])
 }
