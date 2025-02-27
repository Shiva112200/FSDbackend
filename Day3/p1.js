const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "text/html" });

  if (req.url === "/home") {
    res.end("<h1>Welcome to the Home Page</h1>");
  } else if (req.url === "/about") {
    res.end("<h1>About Us</h1><p>This is the about page.</p>");
  } else if (req.url === "/contact") {
    res.end("<h1>Contact Us</h1><p>Email: contact@example.com</p>");
  } else {
    res.end(
      "<h1>404 Not Found</h1><p>The page you requested does not exist.</p>"
    );
  }
});

server.listen(9000, (err) => {
  if (err) console.log("Error starting server:", err);
  else console.log("Server started on port 9000");
});
