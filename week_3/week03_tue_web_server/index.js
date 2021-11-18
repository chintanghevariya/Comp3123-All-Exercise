let http = require('http')
let person = require('./person')
let fs = require('fs')

//console.log(http)

let server = http.createServer((req, res) => {
    if(req.url == "/"){
        res.write("<h1>Welcome to Node Web Server</h1>")
        res.end()
    }

    if(req.url == "/welcome"){
        res.write("<h1>I am on Welcome Page</h1>")
        res.write("<h2>Welcome, Pritesh</h2>")
        res.end()
    }

    if(req.url == "/name"){
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end("<h1>Pritesh</h1>")
    }

    if(req.url == "/college/person"){
        //Convert JS object to JSON
        res.write(JSON.stringify(person))
        res.end()
    }

    //Read JSON file
    if(req.url == "/college/user"){
        fs.readFile(__dirname + "/user.json", 'utf-8', (error, data) => {
            res.write(data)
            let jsObj = JSON.parse(data) //JSON to JS Object
            res.end()
        })    
    }

    if(req.url == "/student"){
        console.log(req.url)
        res.end()
    }


}).listen(5050)
console.log("Server running at http://localhost:5050/")

//server.listen(5050)