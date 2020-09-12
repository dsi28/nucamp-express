const express = require('express');
const bodyParser = require('body-parser');

const partnerRouter = express.Router();

partnerRouter.use(bodyParser.json());

//routes for /partners
partnerRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the partners to you');
    })
    .post((req, res) => {
        res.end(`Will add the partner name: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /partners');
    })
    .delete((req, res) => {
        res.end('Deleting all partners');
    });

// routes for /partners/:partnerId
partnerRouter.route('/:partnerId')
    .all((req,res,next)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`will send the partner ${req.params.partnerId}`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operations not supported on /partners/${req.params.partnerId}`);
    })
    .put((req, res) => {
        res.end(`Updating the partner ${req.params.partnerId} with new values name: ${req.body.name} and description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting partner ${req.params.partnerId}`);
    });

module.exports = partnerRouter;