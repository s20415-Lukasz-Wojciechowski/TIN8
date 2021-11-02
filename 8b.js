const express = require('express');
const app = express();


const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))

const path = require('path')
app.get('/form',(req,res)=>res.sendFile())
app.post('/formdata',(req,res)=>{
    res.send(req.body)
    
})
app.listen(3000)