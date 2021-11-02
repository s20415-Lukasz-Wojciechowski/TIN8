const express = require('express')
const app = express()

const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

app.set('views','./')
app.set('view engine','ejs')


const path = require('path')
app.get('/form',(req,res)=>res.sendFile(path.resolve('./8d.html')))

app.post('/jsondata',(req,res)=>{
    res.render('./8c.ejs',{FirstName:req.body.FirstName, LastName:req.body.LastName, Number:req.body.Number})
})

app.listen(3000)