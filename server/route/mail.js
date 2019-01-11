

//node dependencies
const nodemailer = require('nodemailer');

//local dependencies
const mailModel = require('./../infrastructure/mail');

var transportMail = function (mailoptions) {

    let transport = nodemailer.createTransport({
        service: 'gmail',
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        requireTLS: true,
        auth: {
            user: '',
            pass: ''
        }
    });

    return transport.sendMail(mailoptions);
}

var sendMail = (req, res) => {

    var mailRequest = req.body || null;
    if (!mailRequest) {
        res.status(412);
        res.send('Body is empty');
        return;
    }

    if (JSON.stringify(mailRequest).match(/\s(""|'')|(""|'')/g)) {
        res.status(422);
        res.send('Some fields are empty');
        return;
    }
    // persist mail in database storage
    mailModel
        .CreateMail(mailRequest)
        .then(value => {
            return value;
        })
        .catch(err => {
            console.log(`error here.${err} `);
            return err;
        }).finally(() => {
            res.send();
        });

    //deal with request 
    mailRequest.from = `Paradoxy Ticket <paradoxy.dev@gmail.com>`;
    mailRequest.to = '';
    mailRequest.html = `${mailRequest.email}\n\n<h1>${mailRequest.title}</h1>\n\n<h3>${mailRequest.text}</h3>`;
    mailRequest.subject = `${mailRequest.name} (${mailRequest.company}) - Tel:${mailRequest.phone}`;

    //send mail
    transportMail(req.body).catch(err => {
        console.log(err);
    });
}

module.exports.sendMail = sendMail;