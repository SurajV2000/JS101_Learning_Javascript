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
for(let i=0 ; i<=arr.length-1 ; i++){
let high=0;
let grade;
let topstd;
  grade=arr[i]['grade']
for(let k=0 ; k<=arr[i]['students'].length-1 ; k++){
    let total=0;
    for(let j=0 ; j<=arr[i]['students'][k]['marks'].length-1 ; j++){
        total=total+arr[i]['students'][k]['marks'][j];
    if(total>high){
        high=total
        topstd=arr[i]['students'][k]['name'];
    }
    }
}
console.log(grade+'-'+topstd+'-'+high)
}
