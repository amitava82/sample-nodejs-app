
const express = require("express");
const cors = require('cors');
const axios = require('axios');
const PORT = process.env.PORT || "5555";
const app = express();

app.use(cors());
app.use(express.json())

app.all("/", (req, res) => {
    res.json({ method: req.method, message: "Hello World", ...req.body });
});


app.get('/foo', (req, res) => {

    axios.post('https://amitava82-turbo-enigma-jjg7jj66xp3j59q-5555.preview.app.github.dev/data', {
        time: new Date(),
    }).then(
        (resp) => {
            res.send({ hello: 'world', success: true, result: resp.data });
        }
    )
});

app.post('/data', (req, res) => {
    console.log('data req');
    res.send({ received: req.body, success: true });
});

app.get('/404', (req, res) => {
    res.sendStatus(404);
})



app.listen(parseInt(PORT, 10), () => {
    console.log(`Listening for requests on http://localhost:${PORT}`);
});