const express = require("express");
const app= express();


const mongoose =require('mongoose');
mongoose.connect('mongodb://localhost:27017/urlshortener', {useNewUrlParser: true, useUnifiedTopology: true })
const connection =  mongoose.connection
connection.once('open',()=>console.log('DB Connected'))
connection.on('error',()=>console.log('Error'))

app.use(express.json({extended:false}))

app.use('/',require('./routes/index'))
app.use('/api/url',require('./routes/url'))

app.listen(process.env.PORT || 5000);

// Schema for Each Resource 