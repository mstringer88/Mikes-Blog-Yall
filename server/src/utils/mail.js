import mailgunloader from 'mailgun-js';

let mailgun = mailgunloader({ apiKey: process.env.MAILGUN_API_KEY, domain: "sandbox758cd2486f954c2598b0d79c98b365d4.mailgun.org"});

function sendEmail(to, from, subject, content) {
    let data = {
        from,
        to,
        subject,
        html: content
    };

    return mailgun.messages().send(data);
}

export { sendEmail }; 