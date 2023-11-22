const mongodb = require('mongodb');
//const { system } = require('nodemon/lib/config');
const mongoose = require('mongoose');


const mongoConnect = (path) =>{
    mongoose.connect(`mongodb+srv://ameysh123:ameysh@cluster0.qujwf2b.mongodb.net/ForeignExchange?retryWrites=true&w=majority`, {useNewUrlParser: true, useUnifiedTopology: true})
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("OH NO MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })
}
exports.mongoConnect = mongoConnect;