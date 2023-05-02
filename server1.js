//podstawowy web server z wykorzystaniem biblioteki http
const http = require("http"); // wbudowana biblio noda
const port = 3000;

const handler = (request, response) => {
  console.log("hello dude");
  response.end("hello dude !");
};
const server = http.createServer(handler);

server.listen(port, (err) => {
  if (err) {
    return console.log("Cos zjebałeś synu");
  }
  console.log("server is running...");
});
