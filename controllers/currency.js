// //const {model}=require('../model/cuurency_model.js');
// const mongoose = require('mongoose');

// const {Currency}=require('../model/cuurency_model');

// exports.currencyController=async (req,res,next)=>{
//     //const a=Currency1.read();
//     // Currency.find({}, (err, currencies) => {
//     //     if (err) {
//     //       console.error('Error fetching currencies:', err);
//     //       res.status(500).json({ error: 'Internal Server Error' });
//     //     } else {
//     //       res.json(currencies);
//     //     }
//     // });
//     const a=await Currency.find();
//     res.send(a);
// }
const { MongoClient } = require('mongodb');

// Connection URI (Uniform Resource Identifier)
const uri = 'mongodb+srv://ameysh123:ameysh@cluster0.qujwf2b.mongodb.net/ForeignExchange?retryWrites=true&w=majority';

// Create a new MongoClient
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

//async function queryMongoDB() {
exports.currencyController = async (req, res, next) => {
  try {
    // Connect to the MongoDB server
    await client.connect();
    console.log('Connected to MongoDB');
    console.log(req.params);
    let para=req.params.currency;
    console.log(para);
    // Access the database
    const database = client.db();

    // Access the collection
    const collection = database.collection('currency2');
    
    const excludedFields = [
       'unix_timestamp'
    ];
    excludedFields.push(para);
    const pipeline = [
      // {
      //   $match: { "Algerian dinar   (DZD)":76.3243 }
      // },
      {
        $project: Object.fromEntries(excludedFields.map(field => [field, 1]))
      }
    ];
    const queryResult = await collection.aggregate(pipeline).toArray();
    const ans=[];
    for(let i=0;i<queryResult.length;i++){
      const obj=queryResult[i];
      //console.log(obj);
      let arr=[];
      arr.push(obj.unix_timestamp);
      arr.push(obj[para]);
      ans.push(arr);
    }
    console.log(ans);
    res.send(queryResult);
  } catch (error) {
    console.error('Error querying MongoDB:', error);
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
};

