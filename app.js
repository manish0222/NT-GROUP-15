const path=require('path');
const express=require('express');
const bodyParser=require('body-parser');
const app=express();

const CurrencyController=require('./controllers/currency.js');

app.get('/:currency',CurrencyController.currencyController);

app.listen(3000,()=>{
    console.log("Running on port 3000");
})