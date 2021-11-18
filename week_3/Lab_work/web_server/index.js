const { fstat } = require('fs')
let http = require('http')
let person = require('./person')
let fs = require(fs)

let server = http.createServer((req,res)=>{
    if(req.url == "/"){
        res.write("<h1>Welsome to the node js server")
        res.end()
    }
    if(req.url == "/welcome"){
        res.write("<h1>I am on welcome page</h1>")
        res.write("<h2>Welcome, chintan</h2>")
        res.end()
    }
    if(req.url == "/name"){
        res.writeHead(201,{'Content-Type': 'text/html'})
        res.end("<h2>Welcome, chintan</h2>")
    }

    if(req.url == "/person"){
        //convert JS object to JSON
        res.write(JSON.stringify(person))
        res.end()
    }
    if(req.url == "/user"){
        fs.readFile(__dirname + "/user.json", 'utf-8',(error,data)=>{
            res.write(data)
            let jsObj = JSON.parse(data)
            res.end()
        })
    }
}).listen(5050)
console.log("Server running at http://localhost:5050/")


// server.lister(5050)