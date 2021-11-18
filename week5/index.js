console.log("Hello")

const {application} = require('express')
let express = require('express')
const fs = require("fs");

let app = express()

fs.writeFile
    //console.log(Date())

let logger = ((req, res, next) => {
    console.log(Date())
    //Write current date to server.log.txt file


    let data = `${req.method} - ${req.method} -  ${Date()} + \n`
    fs.appendFile('server_log.txt', data,(err)=>{
       if(err) throw err
       console.log("Log saved")

    })
    next()
})

app.get("/",(req,res)=>{
    res.send("welcome")
})

app.post("/name",(req,res)=>{
    res.send("chintan ghevariya")
})




app.use(logger)



/*, ((req,res,next)=>{
    console.log("hello")
    next()
})
*/
/*
http://localhost:8089/books/:id
http://localhost:8089/books/search/:id

http://localhost:8089/books/author
http://localhost:8089/books/author/address
http://localhost:8089/books/author/address/city

http://localhost:8089/books/publication
http://localhost:8089/books/publication/address
*/


app.route("/hello")
    .get((req,res) => {
        res.send("<h1>hello world get</h1>")
    })
    .post((req,res)=>{
        res.send("<h1>hello world post</h1>")
    })
    .delete((req,res)=>{
        res.send("<h1>hello world = delete</h1>")
})


console.log(process)
let SERVER_PORT = process.env.PORT || 8089
app.listen(SERVER_PORT)
console.log("server runnin at "+ SERVER_PORT)

