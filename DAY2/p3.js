const http = require("http");
const fs = require("fs/promises");

const server = http.createServer(async (req, res) => {
  try {
    res.setHeader("Content-Type", "text/html");
    res.statusCode = 200;

    const myhtml = await fs.readFile("./index.html", "utf-8");

    res.end(myhtml);
  } catch (error) {
    res.writeHead(500, { "Content-Type": "text/plain" });
    res.end("Server Error: Unable to read index.html");
  }
});

// Start the server
server.listen(9000, (err) => {
  if (err) console.log("Error starting server", err);
  else console.log("Server started on port 9000");
});
