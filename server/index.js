const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const port = 3001;
const app = express();
let userLogged = [];

const token = "GameQuiz";

app.use(cors());
app.use(bodyParser.json());

app.post('/post', (req, res) => {
    let {information} = req.body;
    if (information) {
        res.send({
            success: true,
            data: information,
            token,
            error: false
        })
        userLogged.push(information)
    } else {
        res.send({
            success: false,
            data: req.body,
            token: null,
            error: true,
        })
    }
})

app.listen(port, () => {
    console.log(`Connect the local server By localhost://${port} `)
})
