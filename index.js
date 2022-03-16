const express = require('express');
const res = require('express/lib/response');
const app = express();
const PORT = "8080";

app.use( express.json() );

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const {logo} = req.body;

    if (!logo) {
        res.status(418).send({ message: 'W need a logo!' });
    }
        res.send({
            tshirt: `${id} - ${logo}`,
        })
})

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt : '👕',
        size : 'lol'
    })
})



res.sendFile(__dirname + '/index.html');
