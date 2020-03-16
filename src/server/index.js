require("dotenv").config();

const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");

let databaseUrl;
if (process.env.VCAP_SERVICES) {
  const env = JSON.parse(process.env.VCAP_SERVICES);
  databaseUrl = env["mongodb"][0]["credentials"]["uri"];
}
databaseUrl = databaseUrl || process.env.DATABASE_URL;
mongoose.connect(databaseUrl, { useNewUrlParser: true });
const db = mongoose.connection;
db.once("open", () => console.log("Conntected to database:", databaseUrl));
db.on("error", err => console.error("Failed to connect to database:", err));

const trashImagesRouter = require("./routes/TrashImages");
app.use("/trashImages", trashImagesRouter);
app.use(express.json());
const trashInfosRouter = require("./routes/TrashInfos");
app.use("/trashInfos", trashInfosRouter);
const trashInfoDetailsRouter = require("./routes/TrashInfoDetails");
app.use("/trashInfoDetails", trashInfoDetailsRouter);

// API for testing
app.use(express.static("webpack-build"));
app.get("/api/getProjectName", (req, res) =>
  res.send({ projectName: "SmartRecycle" })
);

app.get("/*", (req, res) => {
  res.sendFile(path.resolve("webpack-build/index.html"));
});

app.listen(process.env.PORT || 8080, () =>
  console.log(`Listening on port ${process.env.PORT || 8080}!`)
);
