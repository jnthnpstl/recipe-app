const path = require("path");
const loadPath = path.join(__dirname, "./.env");
require("dotenv").config({ silent: false, path: loadPath });

const express = require("express");
const cors = require("cors");
const axios = require("axios");

const app = express();
const PORT = process.env.PORT || 5000;
app.use(cors());

app.get("/recipes/:query", (req, res) => {
  axios
    .get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=${req.params.query}&app_id=${process.env.APP_ID}&app_key=${process.env.APP_KEY}`
    )
    .then((result) => {
      console.log(result.data.hits);
      res.json(result.data.hits);
    })
    .catch((err) => {
      console.log("Error Happened", err);
      res.sendStatus(404);
    });
});

app.listen(PORT, () => {
  console.log("Listening to port 5000");
});
