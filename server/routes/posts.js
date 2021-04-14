import express from 'express';

import { getPosts, createPost, updatePost } from '../controllers/posts.js'

const router = express.Router();

//http://localhost:5000/post

router.get('/', getPosts);
router.post('/', createPost);
router.patch('/:id', updatePost)

export default router;