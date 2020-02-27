const mongoose = require('mongoose');

const TrashInfoSchema = new mongoose.Schema({
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
    // e.g. compost
    category: {
        type: String,
        required: true
    },
    // e.g. compost
    bin: {
        type: String,
        required: true
    }
});

module.exports = mongoose.model('TrashInfo', TrashInfoSchema);
