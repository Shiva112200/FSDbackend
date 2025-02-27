const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });

  if (req.url === "/setdata" && req.method === "POST") {
    let body = "";
    let data = [];

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      try {
        const data = JSON.parse(body);
        console.log("Received Data:", data);

        res.end(
          JSON.stringify({ message: "Data received successfully", data })
        );
      } catch (error) {
        res.writeHead(400, { "Content-Type": "application/json" });
        res.end(JSON.stringify({ error: "Invalid JSON format" }));
      }
    });
  } else {
    res.writeHead(404, { "Content-Type": "application/json" });
    res.end(JSON.stringify({ error: "Route not found" }));
  }
});

server.listen(9000, (err) => {
  if (err) console.log("Error starting server:", err);
  else console.log("Server started on port 9000");
});
