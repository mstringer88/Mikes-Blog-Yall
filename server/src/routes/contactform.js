import { Router } from 'express';
import { sendEmail } from '../utils/mail';

let router = Router();

router.post('/', (req, res, next) => {
    let messageBody = `Email: ${req.body.email}
                       Subject: ${req.body.subject}
                       Message: ${req.body.message}`;
    sendEmail('mstringer09@yahoo.com', 'no-reply@mikesblogyall.com', 'New Contact Form Submission', messageBody)
    .then((response) => {
        res.sendStatus(201);
    }).catch((err) => {
        console.log(err);
        console.log('You made it here');
        next(err);
    });
});

export default router;