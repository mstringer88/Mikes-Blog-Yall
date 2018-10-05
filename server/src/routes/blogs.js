import { Router } from 'express';
import Table from '../table';

let router = Router();

let blogs = new Table('blogs');

router.get('/', (req, res) => {
    blogs.getAll()
        .then(blogs => {
            res.json(blogs)
        });
});

router.get('/:id', async (req, res) => {
    let id = req.params.id
    let blog = await blogs.getOne(id);
    // blog = blog;
    return res.json({
        title: blog.title,
        content: blog.content
    });
    res.sendStatus(200);
});

router.post('/', async (req, res) => {
    console.log(req.body.title);
    let createBlog = await blogs.insert(req.body)

    res.sendStatus(200)
});

router.put('/:id', async (req, res) => {
    await blogs.update(req.params.id, req.body);
    res.sendStatus(200)
});

router.delete('/:id', async (req, res) => {
    let id = req.params.id
    let blog = await blogs.delete(id);
    res.sendStatus(200);
});

export default router;