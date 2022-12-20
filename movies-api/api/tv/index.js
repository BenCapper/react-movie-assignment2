import uniqid from 'uniqid';
import express from 'express';
import tvModel from './tvModel';
import asyncHandler from 'express-async-handler';
import { getTvReviews, getTopTv, getTrendingTv, getTv, getTvImages } from '../tmdb-api';

const router = express.Router(); 

router.get('/', asyncHandler(async (req, res) => {
    const tv = await tvModel.find();
    res.status(200).json(tv);
}));


// Get tv details
router.get('/:id', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const tv = await getTv(id);
    if (tv) {
        res.status(200).json(tv);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.post('/:id/reviews', (req, res) => {
    const id = parseInt(req.params.id);

    if (tvReviews.id == id) {
        req.body.author = "Ben Capper";
        req.body.content = "test"
        req.body.created_at = new Date();
        req.body.updated_at = new Date();
        req.body.id = uniqid();
        tvReviews.results.push(req.body); //push the new review onto the list
        res.status(201).json(req.body);
    } else {
        res.status(404).json({
            message: 'The resource you requested could not be found.',
            status_code: 404
        });
    }
});

router.get('/tmdb/top', asyncHandler( async(req, res) => {
     const topTv = await getTopTv();
     res.status(200).json(topTv);
}));

router.get('/tmdb/trending', asyncHandler( async(req, res) => {
    const trendingTv = await getTrendingTv();
    res.status(200).json(trendingTv);
}));

router.get('/:id/images', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const images = await getTvImages(id);
    if (images) {
        res.status(200).json(images);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));

router.get('/:id/reviews', asyncHandler(async (req, res) => {
    const id = parseInt(req.params.id);
    const review = await getTvReviews(id);
    if (review) {
        res.status(200).json(review);
    } else {
        res.status(404).json({message: 'The resource you requested could not be found.', status_code: 404});
    }
}));


export default router;