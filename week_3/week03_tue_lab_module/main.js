//console.log("Hello")
let maths = require('./Arithmetics.js')
let college = require('./college/Person')
let today = require('./gbc')

console.log(today)

let s = maths.add(10, 20)
console.log(`SUM : ${s}`)

let sub = maths.sub(20, 10)
console.log(`SUB : ${sub}`)

//Another use of module
let p = new college.Person("chintan", "ghevariya")
p.display()

let student = new college.Student(1, "chintan", "ghevariya")
student.display()

console.log(college)



console.log(module)
console.log(__filename) //Global
