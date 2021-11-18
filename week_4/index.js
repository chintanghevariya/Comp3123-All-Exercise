let express = require('express')

let app = express()

//app.use(express.static("public"))

app.get("/",(req,res)=>{
    res.send("<h1>hello express js</h1>")
})

app.use("/files",express.static("public"))
//http://localhost:8081/files/hello

//http://localhost:8081/hello




// //http://localhost:8081/name?fnm=chintan&lnm=ghevariya
// app.get("/name",(req,res)=>{
//     let first_name = req.query.fnm
//     let last_name = req.query.lnm

//     let response = {
//         status : "success",
//         first_name,
//         last_name
//     }
//     res.send(response)

// })


//http://localhost:8081/name?fnm=chintan&lnm=ghevariya&age=25
app.get("/name",(req,res)=>{
    let first_name = req.query.fnm
    let last_name = req.query.lnm
    let age = req.query.age

    let response = {
        status : "success",
        first_name,
        last_name,
        age
    }
    res.send(response)

})

//http://localhost:8081/name/chintan/ghevariya
app.get("/name/:fname/:lname",(req,res)=>{
    let first_name = req.params.fname
    let last_name = req.params.lname
    //let age = req.params.age

    let response = {
        status : "success",
        first_name,
        last_name,
    }

    res.send(response)
})

//Allow only FIVE digits
//localhost:8089/student/12345

app.get("/student/:sid([0-9]{5})",(req,res)=>{
    res.send(req.params.sid)
})

let server = app.listen(8081, ()=>{
    let host = server.address().address
    let port = server.address().port
    console.log("server running at http://%s:$s",host,port)
})

app.get("/hello", (req,res)=>{
    res.send("<h1>hello world</h1>")
})

app.get("/", (req,res)=>{
    res.send("<h1>hello</h1>")
})


app.post("/", (req,res)=>{
    res.send("<h1>hello express POST</h1>")
})

app.put("/", (req,res)=>{
    res.send("<h1>hello express PUT</h1>")
})

app.delete("/", (req,res)=>{
    res.send("<h1>hello express DELETE</h1>")
})