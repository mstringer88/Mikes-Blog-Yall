import { Router } from 'express';
import peopleRouter from './people';
import blogsRouter from './blogs';
import usersRouter from './user';
import authRouter from './auth';
import { isLoggedIn, tokenMiddleware } from '../middleware/auth.mw';

let router = Router();

router.use('/auth', authRouter);

router.route('*')
    .post(tokenMiddleware, isLoggedIn)
    .put(tokenMiddleware, isLoggedIn)
    .delete(tokenMiddleware, isLoggedIn);

router.use('/people', peopleRouter);
router.use('/blogs', blogsRouter);
router.use('/users', usersRouter);

export default router;