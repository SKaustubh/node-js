//the http.createServer() method includes request and response parameters which is supplied by Node.js
// the request object can be used to get information about the current HTTP request e.g. url, request header, and data
// the response object can be used to send a response for a current HTTP request
// if the response from the HTTP server is supposed to be displayed as HTML, you should include an HTTP header with the correct content type

const http = require("http");

const server = http.createServer((req, res) => {
  // console.log(req.url);
  if (req.url == "/") {
    res.end("hello from the other side");
  } else if (req.url == "/about") {
    res.end("about");
  } else if (req.url == "/contact") {
    res.end("contact");
  } else {
    res.writeHead(404, { "content-type": "text/html" });// error request bw 400-500 
    res.end("<h1>404 error page. page does not exist</h1>");
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("listening to the port no 8000");
}); //localhost
