const http = require("http");

const server = http.createServer((req, res) => {
  // Use an array to store multiple objects
  let data = [
    {
      id: 1,
      username: "admin",
      password: "1234",
    },
    {
      id: 2,
      username: "user",
      password: "5678",
    },
  ];

  // Set response headers
  res.writeHead(200, { "Content-Type": "application/json" });

  // Send JSON response
  res.end(JSON.stringify(data));
});

// Start the server
server.listen(9000, (err) => {
  if (err) console.log("Error starting server", err);
  else console.log("Server started on port 9000");
});
