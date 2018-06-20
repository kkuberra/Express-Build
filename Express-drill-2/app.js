const express = require("express");
const cors = require("cors");
const data = require("./instructorData.json");
const port = process.env.PORT || 3000;

const app = express();
app.use(cors());

function findById(id) {
  return data.find(item => item.id === +id);
}


app.get("/", (req, res, next) => {
  res.json({ data });
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
