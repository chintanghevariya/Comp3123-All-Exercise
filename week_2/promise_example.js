// declare the promise

let p1 = new Promise(function(resolve,reject){
    if(1==2)
        resolve("-----success-----")
    else
        reject("----error-----")
})

// aerrow function
p1.then(
    success => console.log(success),
    error => console.log(error)
)

// chaining - not goood
p1.then(success => console.log(success))
    .then((data)=> console.log(`second then :${data}`))
   .catch(error=>console.log(error))
   .finally(()=> console.log('finally-1'))

// chaining - perfect example
p1.then(success => { return success.toUpperCase() })
    .then((data)=> console.log(`second then :${data}`))
    .finally(() => console.log('finally-2'))
    .then((data)=> console.log(`third then :${data}`))
   .catch(error => {throw error})
   .catch(error => console.log("E :" +error))
