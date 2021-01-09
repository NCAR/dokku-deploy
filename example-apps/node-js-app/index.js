const http = require("http")
const port = process.env.PORT || 9999
const address = "0.0.0.0"

http
  .createServer(function (request, response) {
    console.log(request.socket.remoteAddress, request.headers.origin)
    // Send the HTTP header
    response.writeHead(200, { "Content-Type": "text/plain" })

    // Send the response
    response.end("Hello World from Nodejs Sample App\n")
  })
  .listen(port, address)

console.log(`Server running at http://${address}:${port}`)
