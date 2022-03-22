let a=[1,2,3,4,5]
for(let v of a){
    console.log(v)
}
console.log(a.join(' '))
//array methods
let d=a.unshift('js')
console.log(a.join(' '))
console.log(d)//length of modified array
d=a.push(6)
console.log(a.join(' '))
console.log(d)//length of modified array
d=a.splice(2,0,9)
console.log(a.join(' '))
console.log(d)//empty array
d=a.splice(2,1,8,20,30)
console.log(a.join(' '))
d=a.pop()
console.log(a.join(' '))
console.log(d)
d=a.shift()
console.log(a.join(' '))
console.log(d)
d=a.entries()
for(let v of d){
    console.log(v)
}
d=a.indexOf(4,7)//returns -1 if element is not found
console.log(d)
a1=[]
a1[10000]=60
a1[0]=10
console.log(a1.join(' '))
a.length=0
console.log(a)
let a2=[100,40]
console.log(a2.sort())
console.log(a2)//doesnt sort
console.log(a2.sort((a,b)=>a-b))