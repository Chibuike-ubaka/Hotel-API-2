const express = require('express');
const router = express.Router();
const { RoomType } = require('../models/RoomType');

// POST endpoint for storing a room type
router.post('/', async (req, res) => {
  const roomType = new RoomType({
    name: req.body.name
  });
  await roomType.save();
  res.status(201).json(roomType);
});

// GET endpoint for fetching all room types
router.get('/', async (req, res) => {
  const roomTypes = await RoomType.find();
  res.json(roomTypes);
});

// PATCH endpoint for editing a room type using its id
router.patch('/:id', async (req, res) => {
  const roomType = await RoomType.findByIdAndUpdate(
    req.params.id,
    { name: req.body.name },
    { new: true }
  );
  if (!roomType) {
    return res.status(404).json({ error: 'Room type not found' });
  }
  res.json(roomType);
});

// DELETE endpoint for deleting a room type using its id
router.delete('/:id', async (req, res) => {
  const roomType = await RoomType.findByIdAndDelete(req.params.id);
  if (!roomType) {
    return res.status(404).json({ error: 'Room type not found' });
  }
  res.json(roomType);
});

module.exports = router;
