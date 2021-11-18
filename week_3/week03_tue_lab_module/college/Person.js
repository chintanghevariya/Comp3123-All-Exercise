module.exports.college_name = "George Brown College, Toronto"


class Person{
    constructor(fnm, lnm){
        this.first_name = fnm
        this.last_name = lnm
    }

    display(){
        console.log(`First Name : ${this.first_name}`)
        console.log(`Last Name : ${this.last_name}`)
    }
}

//module.exports =  { Person }
//module.exports =  Person 
exports.Person = Person 

exports.Student = class {
    constructor(sid, fnm, lnm){
        this.student_id = sid
        this.first_name = fnm
        this.last_name = lnm
    }

    display(){
        console.log(`Student ID : ${this.student_id}`)
        console.log(`Student First Name : ${this.first_name}`)
        console.log(`Student Last Name : ${this.last_name}`)
    }
}