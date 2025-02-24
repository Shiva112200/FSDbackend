const http = require("http");

const server = http.createServer((req, res) => {
  try {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    res.end(
      '<h1 style="background-color: blue;color:white; text-align: center;">Welcome to backend</h1>'
    );
  } catch (error) {
    console.error("Error handling request:", error);
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Internal Server Error");
  }
});

server.listen(9000, (err) => {
  if (err) console.log("Error starting server", err);
  else console.log("Server started on port 9000");
});
