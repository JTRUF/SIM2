const express = require('express');
const bodyParser = require('body-parser');
const controller = require('./controller')
const massive = require('massive');
require('dotenv').config()

const app = express()

app.use(bodyParser.json())
app.use(express.static(`${__dirname}/../build`))
massive(process.env.CONNECTION_STRING).then(dbInstance => app.set('db', dbInstance));

app.get('/api/houses:id', controller.get)
app.post('/api/addHouse', controller.post)
app.put('/api/', controller.put)
app.delete('/api/', controller.delete)

const port = 4000;
app.listen(port, () => console.log("Listening"))