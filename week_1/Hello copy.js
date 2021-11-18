console.log("hello world")

function hello()
{
    return "hello world"
}

str = hello()
console.log(str)

str = 100
console.log(str)

const X = 100


//aerrow function
f1 = () => {
    return "hello world - f1"
}
str = f1
console.log(str)

function add(x,y){
    z = x + 2
    return x + y + z
}

f2 = (x,y) => {
    z = x + 2
    return x + y + z
}

console.log(f2(10,2))

var a = [5,6]
var b = [1,2,...a,7,8]

console.log(b)

student1 = {
    sid : 1,
    snm : 'chintan',
    result : "Pass"
}

console.log(student1)
console.log(student1.sid)
console.log(student1['snm'])
console.log(student1.result)


// destructor

var {sid:v1, snm,result:v3}= student1
console.log(v1)
console.log(snm)

var {sid, snm, result} = student1
console.log(sid)
console.log(snm)
console.log(result)

clg = "GBC"
console.log(typeof sid) // number
console.log(typeof student1) // object
console.log(typeof hello) // function
console.log(typeof f1) // function
console.log(typeof str) // function
console.log(typeof a) // object
console.log(typeof clg) // string
console.log(typeof aa)  // undefined

function Person(){
    this.id = 1
    this.name = "patel"
}

Person.prototype.display = function(){
    this.x=1000
    console.log(`ID : ${this.id}`)
    console.log(`Name : ${this.name}`)
}

Person.prototype.test = function(){
    console.log(`X from test : ${this.x}`)
}

p = new Person()
//console.log(new Person())
//console.log(typeof new Person()) //object
p.display()
p.test()

class Person1{
    constructor(id,name){
        this.id = id
        this.name = name
    }
    display(){
        console.log(`ID : ${this.id}`)
        console.log(`Name : ${this.name}`)
    }
    test(){
        console.log(`X from test: ${this.x}`)
    }

    hello = () =>{
        console.log(`Arrow : ${this.name}`)
    }
}

p1 = new Person1(1,"chintu patel")
p1.display()
p1.test()
p1.hello()

p2 = {
    id:1000,
    name: "chii",
    display : function(){
        console.log(`ID : ${this.id}`)
        console.log(`name : ${this.name}`)
    }
}

console.log(p2)
console.log(p2.id)
console.log(p2.name)
p2.display(400)

arr = [1,2,3,4,5,6,7,8,9,10]
m1 = arr.map(x => x * 2)
console.log(m1)

