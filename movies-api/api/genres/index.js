import express from 'express';
import Genre from './genreModel';
import asyncHandler from 'express-async-handler';

const router = express.Router(); 

// Get all genres
router.get('/', async (req, res) => {
    const genres = await Genre.find();
    res.status(200).json(genres);
});

// Update a genre
router.put('/:id', async (req, res) => {
    if (req.body._id) delete req.body._id;
    const result = await Genre.updateOne({
        _id: req.params.id,
    }, req.body);
    if (result.matchedCount) {
        res.status(200).json({ code:200, msg: 'Genre Updated Sucessfully' });
    } else {
        res.status(404).json({ code: 404, msg: 'Unable to Update Genre' });
    }
  });

export default router;