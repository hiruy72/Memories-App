import express from 'express';

const router = express.Router();

router.get('/', (req, res) => {
    res.send('This is the posts route');
});

export default router;