const express = require("express");
const cors = require("cors");
const data = require("./cohortData.json");
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());


function findById(id) {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === +id) {
      return data[i];
    }
  }
  return null;
}

app.get("/", (req, res, next) => {
  res.json({
    data
  });
});

app.get("/:id", (req, res, next) => {
  const item = findById(req.params.id);

  if (!item) {
    res.status(404).json({
      error: {
        message: "Item not found"
      }
    });
    return;
  }

  res.json({
    data: item
  });
});

app.listen(port);
