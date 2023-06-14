const express = require('express')
const app = express()
const data = require('./connect')
data.connectMongoDB();

// app.get('/', (req, res) => {
//     res.send('Hello World!')
//     }
// )
app.get('/home', (req, res) => {
    res.send('Hello Mohnish!')
    }
)
app.get('/', (req, res) => {
    const number = parseInt(req.query.number);
    const square = number * number;
    res.send(`The square of ${number} is ${square}`);
});
app.listen(3000, () => console.log('Listening on port 3000!'))