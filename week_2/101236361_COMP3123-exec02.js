//task 1
console.log("\n==== Task 1 ====");
gretter = (myArray, counter)=>{
    const greetText = "Hello ";
    for(let index in myArray){
        console.log(greetText + myArray[index]);
    }
}
gretter(['rady savare','ric flair','hulf bobin'],3)


//task 2
console.log("\n==== Task 2 ====");
function capitalize(word){
    let fword,rword;
    [fword,...rword]=word;
    return fword.toUpperCase() +rword.join('').toLowerCase()
}

console.log(capitalize("chinTan"))
console.log(capitalize("fooBar"))
console.log(capitalize("nodeJs"))


//task 3
console.log("\n==== Task 3 ====");
const colors = ['red','green','blue'];
function capitalizedColors(){
    let ans = colors.map(f=>{ return f.charAt(0).toUpperCase()+f.slice(1); });
    return ans;
}
console.log(capitalizedColors())

//task 4
console.log("\n==== Task 4 ====");
var values = [1,60,34,30,20,5]
function filterLessThan20(){
    let ans = values.filter(num => num<20)
    return ans;
}

console.log(filterLessThan20())


// task 5
console.log("\n==== Task 5 ====");
var array =  [1,2,3,4];
function calculateSum(){
    let ans = array.reduce((pre,curr)=>pre+curr);
    return ans;
}

function calculateProduct(){
    let ans = array.reduce((pre,curr)=>pre*curr)
    return ans;
}

console.log(" sum = " + calculateSum());
console.log(" product = " + calculateProduct());


//task 6
console.log("\n==== Task 6 ====");
class Car{
    constructor(model, year) {
        this.model = model;
        this.year = year;
      }
      details(){
          console.log(`Model : ${this.model} , Engine : ${this.year}`);
      }
}

class Sedan extends Car{
    constructor(model,year,balance){
        super(model,year);
        this.balance = balance;
    }
    info(){
        console.log(`${this.model} has a balance of ${this.balance}`);
    }
}

const car2 = new Car('Pontiac Firebird', 1976);
car2.details();

const sedan = new Sedan('Volvo SD', 2018, 30000);
sedan.info();
