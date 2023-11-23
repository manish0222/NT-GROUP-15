
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
    let para = req.params.currency;
    console.log(para);
    // Access the database
    const database = client.db();

    // Access the collection
    const collection = database.collection('currency');

    const excludedFields = [
      'unix_timestamp'
    ];
    excludedFields.push(para);
    const pipeline = [
      {
        $project: Object.fromEntries(excludedFields.map(field => [field, 1]))
      }
    ];
    const queryResult = await collection.aggregate(pipeline).toArray();
    const ans = [];
    const minmax = [];
    var mn = 999999999999999;
    var mx = -1;
    for (let i = 0; i < queryResult.length; i++) {
      const obj = queryResult[i];
      let arr = [];
      obj.unix_timestamp *= 1000
      arr.push(obj.unix_timestamp);
      minmax.push(obj[para])
      arr.push(obj[para]);
      ans.push(arr);
    }
    for (let i = 0; i < minmax.length; i++) {
      if (mn > minmax[i]) {
        mn = minmax[i];
      }
      if (mx < minmax[i]) {
        mx = minmax[i];
      }
    }
    const obj = { mn, mx };
    console.log(obj);
    console.log(ans);
    const data = {
      ans,
      obj
    }
    res.send(data);
  } catch (error) {
    console.error('Error querying MongoDB:', error);
    res.send(error)
  } finally {
    // Close the connection
    await client.close();
    console.log('Connection closed');
  }
};