let bag={
    name:"varun",
    "lastname":"posam",
    "middle name":"reddy"

}
bag["age"]=18
bag.age=19
bag.height="176 cm"
let v="name"
console.log(bag[v])
console.log(bag.age)
console.log(bag["middle name"])
console.log("name" in bag)
for(let k in bag){
    console.log(bag[k])
}

console.log(typeof "name")
let content=bag
content["middle name"]="ch"
console.log(bag["middle name"])//copy by reference
let merge=Object.assign({},content)
//methods 
let method={
    name:"varun",
    name1(){
        return this.name
    }
}
method.name1()
console.log(method.name1())