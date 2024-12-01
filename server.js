const express = require("express");
const cors = require("cors");

const app = express();
const PORT = process.env.PORT || 3000;

// Enable CORS for cross-origin requests
app.use(cors());

// Define the main route
app.get("/", (req, res) => {
  res.send({
    message: "Welcome to the Request Header Parser Microservice! Use the /api/whoami endpoint.",
  });
});

// Define the /api/whoami endpoint
app.get("/api/whoami", (req, res) => {
  const ipaddress = req.ip; // Client's IP address
  const language = req.headers["accept-language"]; // Preferred languages
  const software = req.headers["user-agent"]; // User agent string

  res.json({
    ipaddress,
    language,
    software,
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
