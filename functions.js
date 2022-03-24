//function
function pushingvaluesinarray(arr,a,b){
    arr.unshift(a,b)
}
let a=[]
pushingvaluesinarray(a,3,2)
console.log(a)
//function expression
let deletinglastelementofarray=function(arr){
    arr.pop()
}
deletinglastelementofarray(a)
console.log(a)
//arrow functions
let deletingfirstelementofarray=(arr)=>arr.shift()
deletingfirstelementofarray(a)
console.log(a)