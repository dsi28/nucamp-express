const express = require('express');
const bodyParser = require('body-parser');

const campsiteRouter = express.Router();

campsiteRouter.use(bodyParser.json());


//routes for /campsites
campsiteRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end('Will send all the campsites to you');
    })
    .post((req, res) => {
        res.end(`Will add the campsite: ${req.body.name} with description: ${req.body.description}`);
    })
    .put((req, res) => {
        res.statusCode = 403;
        res.end('PUT operation not supported on /campsites');
    })
    .delete((req, res) => {
        res.end('Deleting all campsites');
    });

// routes for /campsites/:campsiteId
campsiteRouter.route('/:campsiteId')
    .all((req,res,next)=>{
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        next();
    })
    .get((req, res) => {
        res.end(`will send the campsite ${req.params.campsiteId}`);
    })
    .post((req, res) => {
        res.statusCode = 403;
        res.end(`POST operations not supported on /campsites/${req.params.campsiteId}`);
    })
    .put((req, res) => {
        res.end(`Updating the campsite ${req.params.campsiteId} with new values name: ${req.body.name} and description: ${req.body.description}`);
    })
    .delete((req, res) => {
        res.end(`Deleting campsite ${req.params.campsiteId}`);
    });

module.exports = campsiteRouter;