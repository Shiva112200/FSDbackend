const http = require("http");

let data = []; // Store received data globally

const server = http.createServer((req, res) => {
  if (req.url === "/setdata" && req.method === "POST") {
    let body = "";

    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      res.setHeader("Content-Type", "application/json"); // Set response content type

      // ✅ Check if body is empty
      if (!body) {
        res.writeHead(400);
        return res.end(JSON.stringify({ error: "Empty request body" }));
      }

      try {
        // ✅ Check if request contains valid JSON
        const parsedData = JSON.parse(body);
        console.log("Received Data:", parsedData);

        data.push(parsedData); // Store data

        res.writeHead(200);
        res.end(
          JSON.stringify({ message: "Data received successfully", data })
        );
      } catch (error) {
        res.writeHead(400);
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
