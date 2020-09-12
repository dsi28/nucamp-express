const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

app.all('/campsites', (req,res,next)=>{
    res.statusCode=200;
    res.setHeader('Content-Type','text/plain');
    next();
});

app.get('/campsites',(req,res)=>{
    res.end('Will send campsites');
});

app.post('/campsites',(req,res)=>{
    res.end(`will add campsite with name: ${req.body.name} and description ${req.body.description}`);
});

app.put('/campsites', (req,res)=>{
    res.statusCode = 403;
    res.end(`PUT operation not supported on /campsites`);
});

app.delete('/campsites', (req,res)=>{
    res.end(`deleting all campsites`);
});


app.get('/campsites/:campsiteId',(req,res)=>{
    res.end(`Will send details of campsite id : ${req.params.campsiteId}`);
});

app.post('/campsites/:campsiteId',(req,res)=>{
    req.statusCode=403;
    res.end(`POST operation not supported on /campsites/${req.params.campsiteId}`);
});

app.put('/campsites/:campsiteId', (req,res)=>{
    res.write(`Updating the campsite: ${req.params.campsiteId}\n`);
    res.end(`wil update the campsite ${req.body.name} 
        with the description ${req.body.description}`);
});

app.delete('/campsites/:campsiteId', (req,res)=>{
    res.end(`deleting campsite ${req.params.campsiteId}`);
});

app.use(express.static(__dirname+'/public'));

app.use((req, res) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an Express Server</h1></body></html>');
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});