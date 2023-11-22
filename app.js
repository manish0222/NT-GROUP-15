const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();
const cors = require('cors');

const CurrencyController=require('./controllers/currency.js');

app.use(cors());
app.use(express.json())

app.use((req, res, next) => {
    console.log(req.path, req.method)
    next()
})

app.get('/',  (req, res) => {
    const response = { "hi" : "Hello"}
    res.send(response).statusCode(200)
});

app.get('/:currency',CurrencyController.currencyController);



app.listen(4000,()=>{
    console.log("Running on port 4000");
})