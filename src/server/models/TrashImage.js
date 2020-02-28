const mongoose = require('mongoose');

const TrashImageSchema = new mongoose.Schema({
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
    image: {
        data: Buffer,
        contentType: String
    }
});

module.exports = mongoose.model('TrashImage', TrashImageSchema);
