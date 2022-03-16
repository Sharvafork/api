const express = require('express');
const app = express();
const PORT = "8080";

app.use(express.json());

app.post('/tshirt/:id', (req, res) => {
    const { id } = req.params;
    const { logo } = req.body;

    if (!logo) {
        res.status(418).send({ message: 'W need a logo!' });
    }
    res.send({
        tshirt: `${id} - ${logo}`,
    })
})

date = new Date();

app.get('/tshirt', (req, res) => {
    res.status(200).send({
        tshirt: date,
        size: 'lol',
    })
})



app.listen(
    PORT,
    () => console.log(`Server is listening on port ${PORT}`)
);

