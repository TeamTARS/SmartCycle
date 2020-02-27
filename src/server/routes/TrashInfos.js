const express = require('express');
const router = express.Router();
const TrashInfo = require('../models/TrashInfo');
const HashUtils = require('../utils/HashUtils');

// Get all trash info
router.get('/', async (req, res) => {
    try {
        const trashInfos = await TrashInfo.find();
        res.json(trashInfos);
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

// Get one trash info
router.get('/:id', getTrashInfo, (req, res) => {
    res.json(res.trashInfo);
});

// Create one trash info
router.post('/', async (req, res) => {
    try {
        if (req.body.hashId === null || req.body.hashId === undefined) {
            req.body.hashId = HashUtils.generateHash(req.body.name);
        }
        const trashInfo = new TrashInfo({
            hashId: req.body.hashId,
            name: req.body.name,
            category: req.body.category,
            bin: req.body.bin
        });
        const newTrashInfo = await trashInfo.save();
        res.status(201).json(newTrashInfo);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});

// Update one trash info
router.patch('/:id', getTrashInfo, async (req, res) => {
    if (req.body.category) {
        res.trashInfo.category = req.body.category;
    }

    if (req.body.bin) {
        res.trashInfo.bin = req.body.bin;
    }
    try {
        const updatedTrashInfo = await res.trashInfo.save();
        res.json(updatedTrashInfo);
    } catch(err) {
        res.status(400).json({ message: err.message });
    }
});

// Delete one trash info
router.delete('/:id', getTrashInfo, async (req, res) => {
    try {
        await res.trashInfo.remove();
        res.json({ message: 'Deleted this trashInfo' });
    } catch(err) {
        res.status(500).json({ message: err.message });
    }
});

async function getTrashInfo(req, res, next) {
    try {
        const trashInfo = await TrashInfo.findOne({ hashId: req.params.id });
        if (!trashInfo) {
            return res.status(404).json({ message: 'Cant find trash info'});
        }
        res.trashInfo = trashInfo;
        next();
    } catch(err){
        return res.status(500).json({ message: err.message });
    }
}

module.exports = router;
