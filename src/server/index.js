require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");

mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", () =>
  console.log("Conntected to database:", process.env.DATABASE_URL)
);
db.on("error", err => console.error("Failed to connect to database:", err));

const trashImagesRouter = require('./routes/TrashImages');
app.use('/trashImages', trashImagesRouter);
app.use(express.json());
const trashInfosRouter = require("./routes/TrashInfos");
app.use("/trashInfos", trashInfosRouter);
const trashInfoDetailsRouter = require("./routes/TrashInfoDetails");
app.use("/trashInfoDetails", trashInfoDetailsRouter);

app.use(express.static("webpack-build"));
app.get("/api/getProjectName", (req, res) =>
  res.send({ projectName: "SmartRecycle" })
);

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
