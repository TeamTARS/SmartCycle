const express = require("express");
const router = express.Router();
const TrashInfoDetail = require("../models/TrashInfoDetail");
const HashUtils = require("../utils/HashUtils");

// Get all trash info details
router.get("/", async (req, res) => {
  try {
    const trashInfoDetails = await TrashInfoDetail.find();
    res.json(trashInfoDetails);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// Get one trash info detail
router.get("/:id", getTrashInfoDetail, (req, res) => {
  res.json(res.trashInfoDetail);
});

// Create one trash info detail
router.post("/", async (req, res) => {
  try {
    if (req.body.hashId === null || req.body.hashId === undefined) {
      req.body.hashId = HashUtils.generateHash(req.body.name);
    }
    const trashInfoDetail = new TrashInfoDetail({
      hashId: req.body.hashId,
      name: req.body.name,
      description: req.body.description
    });
    const newTrashInfoDetail = await trashInfoDetail.save();
    res.status(201).json(newTrashInfoDetail);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// Delete one trash info detail
router.delete("/:id", getTrashInfoDetail, async (req, res) => {
  try {
    await res.trashInfoDetail.remove();
    res.json({ message: "Deleted this trashInfoDetail" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getTrashInfoDetail(req, res, next) {
  try {
    const trashInfoDetail = await TrashInfoDetail.findOne({
      hashId: req.params.id
    });
    if (!trashInfoDetail) {
      return res.status(404).json({ message: "Cant find trash info detail" });
    }
    res.trashInfoDetail = trashInfoDetail;
    next();
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }
}

module.exports = router;
