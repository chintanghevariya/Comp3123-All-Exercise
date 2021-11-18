// delcare promise
function getPromise(){
    return new Promise(function(resolve,reject){
        if(1==2){
            resolve("=== success ===")
        }else{
            reject("== error ==")
        }
    })
}

function add(a,b){
    return a + b
}

async function getData(){
    console.log("inside async function")
    try{
        let result = await getPromise()
        console.log(result)
    }catch(e){
        console.log(e)
    }
    let sum = await add(1,5)
    console.log(sum)

  //  getData().then(s => console.log("SS : " + s))
    //.catch(e => console.log("EE : " +e))
}

