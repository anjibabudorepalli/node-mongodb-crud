const express = require('express')
const mongoose = require('mongoose')
const productRoute = require('./routes/product.route')
const app = express();
//middleware
app.use(express.json())
app.use(express.urlencoded({ extended: false }));
//routes
app.use('/api/products', productRoute)


app.get('/', (req, res) => {
    res.send("Hello from Node API Server Updated")
});





mongoose.connect("mongodb+srv://dorepallianjibabu150:6gLyZ4HT7bhoYqI2@backenddb.8qcus.mongodb.net/node")
    .then(() => {
        console.log("Database Connected!")
        app.listen(3000, () => {
            console.log("Server Rnning at 3000")
        })
    })
    .catch((e) => {
        console.log(e);
    });