import { Router } from 'express';

let people = [
    {
        name: 'Jackson',
        age: 25
    },
    {
        name: 'Matt',
        age: 40
    }
];

let router = Router();

router.get('/', (req, res) => {
    res.json(people);
});

export default router;

// import { Router } from 'express';
// import * as db from '../config/db';

// let people = [
//     {
//         name: 'Jackson',
//         age: 25
//     },
//     {
//         name: 'Matt',
//         age: 40
//     }
// ];

// let router = Router();

// router.get('/:blogid', (req, res) => {
//     db.callProcedure('spBlogTags', req.params.blogid)
//     .then(result => {
//         res.json(result)
//     })
//     // res.json(people);
// });

// export default router;