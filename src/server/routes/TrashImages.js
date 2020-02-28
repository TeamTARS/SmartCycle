const express = require("express");
const router = express.Router();
const TrashImage = require("../models/TrashImage");
const HashUtils = require("../utils/HashUtils");
const fs = require("fs");
const multer = require("multer");

var upload = multer({ dest: "uploads/" });

// Get all trash images
router.get("/", async (req, res) => {
  try {
    const trashImages = await TrashImage.find();
    res.json(trashImages);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one trash image
router.get("/:id", getTrashImage, (req, res) => {
  res.json(res.trashImage);
});

// Create one trash info detail
router.post("/", upload.single("file"), async (req, res) => {
  try {
    if (req.body.hashId === null || req.body.hashId === undefined) {
      req.body.hashId = HashUtils.generateHash(req.body.name);
    }
    const trashImage = new TrashImage({
      hashId: req.body.hashId,
      name: req.body.name,
      image: {
        contentType: "image/png",
        data: fs.readFileSync(req.file.path)
      }
    });
    await trashImage.save();
    res.status(201).json({ message: "New trash image saved into the db" });
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one trash info detail
router.delete("/:id", getTrashImage, async (req, res) => {
  try {
    await res.trashImage.remove();
    res.json({ message: "Deleted this trashImage" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getTrashImage(req, res, next) {
  try {
    const trashImage = await TrashImage.findOne({ hashId: req.params.id });
    if (!trashImage) {
      return res.status(404).json({ message: "Cant find trash image" });
    }
    res.trashImage = trashImage;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
