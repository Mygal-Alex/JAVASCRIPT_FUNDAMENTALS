const http = require("http")
const greeting = require("./personalmodule")
const os = require("os")
port = 8000

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html'})

    let userName = os.userInfo().username;

    res.write(`Date of reqest: ${greeting.date}<br>`)
    res.write(greeting.showMassage(userName))

    res.end()
}).listen(port)

console.log(`Server start on PORT ${port}`)