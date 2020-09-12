const express = require('express');
const bodyParser = require('body-parser');

const promotionRouter = express.Router();

promotionRouter.use(bodyParser.json());


//routes for /promotions
promotionRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the promotions to you');
    })
    .post((req, res) => {
        res.end(`Will add the promotion: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /promotions');
    })
    .delete((req, res) => {
        res.end('Deleting all promotions');
    });

// routes for /promotions/:promotionId
promotionRouter.route('/:promotionId')
    .all((req,res,next)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`will send the promotion ${req.params.promotionId}`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operations not supported on /promotions/${req.params.promotionId}`);
    })
    .put((req, res) => {
        res.end(`Updating the promotion ${req.params.promotionId} with new values name: ${req.body.name} and description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting promotion ${req.params.promotionId}`);
    });

module.exports = promotionRouter;