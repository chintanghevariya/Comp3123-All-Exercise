

/* callback function */

function sayHello(){
    console.log("hello world")
}

function useCallBack(n,callback){
    if(n==10){
        callback();
    }
}

useCallBack(10,sayHello)

const greet = (name) => `hello, ${name}`

function greetMe(name,callback){
    console.log(callback(name))
}

greetMe("chintan",greet)

// inbuilt callback
setTimeout(sayHello,5 * 1000)

console.log("==--- END ----==")