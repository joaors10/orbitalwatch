const express = require("express");
const path = require("path");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/satellites", (req, res) => {
  res.json({
    system: "OrbitalWatch",
    description: "Satellite monitoring system for orbital data simulation",
    satellites: [
      {
        id: "SAT-01",
        status: "OK",
        temperature: 23,
        position: "Low Earth Orbit"
      },
      {
        id: "SAT-02",
        status: "ALERT",
        temperature: 78,
        position: "Geostationary Orbit"
      },
      {
        id: "SAT-03",
        status: "OK",
        temperature: 19,
        position: "Polar Orbit"
      }
    ]
  });
});

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

app.listen(port, () => {
  console.log(`OrbitalWatch running on port ${port}`);
});

