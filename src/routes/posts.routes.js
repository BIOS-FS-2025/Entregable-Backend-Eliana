import { Router } from 'express';
import { createPost, getPosts, updatePost, deletePost } from '../controllers/posts.controller.js';

const router = Router();

router.get('/', getPosts);

router.post('/', createPost)

router.delete('/:id', deletePost)

router.put('/:id', updatePost)

export default router;