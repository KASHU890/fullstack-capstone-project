const express = require('express');
const router = express.Router();
const { ObjectId } = require('mongodb');
const { connectToDatabase } = require('./db');

// GET all gifts
router.get('/api/gifts', async (req, res) => {
  try {
    const db = await connectToDatabase();
    const gifts = await db.collection('inserted_items').find({}).toArray();
    res.json(gifts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// GET gift by id
router.get('/api/gifts/:id', async (req, res) => {
  try {
    if (!ObjectId.isValid(req.params.id)) {
      return res.status(400).json({ message: 'Invalid gift id' });
    }
    const db = await connectToDatabase();
    const gift = await db
      .collection('inserted_items')
      .findOne({ _id: new ObjectId(req.params.id) });
    if (!gift) {
      return res.status(404).json({ message: 'Gift not found' });
    }
    res.json(gift);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;
