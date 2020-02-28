const mongoose = require("mongoose");

const TrashInfoDetailSchema = new mongoose.Schema({
  // hash id based on name
  hashId: {
    type: String,
    required: true
  },
  // e.g. paper cup
  name: {
    type: String,
    required: true
  },
  // detailed info to be shown on item page
  description: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("TrashInfoDetail", TrashInfoDetailSchema);
