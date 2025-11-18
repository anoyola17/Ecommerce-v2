// to handles routes, requests, and responses
import express from "express";
// to requests from different domains
import cors from "cors";
// to connect to a MySQL database
import mysql from "mysql2";
// to handle file paths
import path from "path";
// to convert ES Module to file
import { fileURLToPath } from "url";

// __dirname paths
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// app middleware
const app = express();
app.use(cors());

// Serve static images
app.use("/images", express.static(path.join(__dirname, "../public/images")));

// connection to MySQL server
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "Products",
});

// message if the connection succeeds or fails
db.connect((err) => {
  if (err) {
    console.error("MySQL Connection Error:", err);
    return;
  }
  console.log("Connected to MySQL!");
});

// creates a route from SQL query
app.get("/motorcycles", (req, res) => {
  const q = "SELECT * FROM motorcycles";
  //   console.logo("Here");
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    return res.json(data);
  });
});

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
