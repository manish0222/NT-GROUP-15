const mongoose = require('mongoose');
const { mongoConnect } = require('../database/database.js');


mongoConnect('currency1');

const currecySchema=new mongoose.Schema({
    value:{
        type:Number,
        required:true
    }
    
    // Date:{
    //     type:Date,
    //     required:true,
    // },
    // "Algerian dinar (DZD)":{
    //     type:Number,
    //     required:true
    // },
    
    // "Algerian dinar (DZD)":{
    //     type:Number,
    //     required:true
    // },
    // "Australian dollar   (AUD)":{
    //     type:Number,
    //     required:true
    // },   
    // "Botswana pula   (BWP)":{
    //     type:Number,
    //     required:true
    // },                   
    // "Brazilian real   (BRL)":{
    //     type:Number,
    //     required:true
    // },            
    // "Brunei dollar   (BND)":{
    //     type:Number,
    //     required:true
    // },                     
    // "Canadian dollar   (CAD)":{
    //     type:Number,
    //     required:true
    // },          
    // "Chilean peso   (CLP)":{
    //     type:Number,
    //     required:true
    // },          
    // "Chinese yuan   (CNY)":{
    //     type:Number,
    //     required:true
    // }, 
    // "Czech koruna   (CZK)":{
    //     type:Number,
    //     required:true
    // },
    // "Danish krone   (DKK)":{
    //     type:Number,
    //     required:true
    // },
    // "Euro   (EUR)":{
    //     type:Number,
    //     required:true
    // }, 
    // "Indian rupee   (INR)":{
    //     type:Number,
    //     required:true
    // },
    // "Israeli New Shekel   (ILS)":{
    //     type:Number,
    //     required:true
    // },
    // "Japanese yen   (JPY)":{
    //     type:Number,
    //     required:true
    // },
    // "Korean won   (KRW)":{
    //     type:Number,
    //     required:true
    // },
    // "Kuwaiti dinar   (KWD)":{
    //     type:Number,
    //     required:true
    // },    
    // "Malaysian ringgit   (MYR)":{
    //     type:Number,
    //     required:true
    // },
    // "Mauritian rupee   (MUR)":{
    //     type:Number,
    //     required:true
    // },
    // "Mexican peso   (MXN)":{
    //     type:Number,
    //     required:true
    // },
    // "New Zealand dollar   (NZD)":{
    //     type:Number,
    //     required:true
    // },
    // "Norwegian krone   (NOK)":{
    //     type:Number,
    //     required:true
    // },            
    // "Omani rial   (OMR)":{
    //     type:Number,
    //     required:true
    // },
    // "Peruvian sol   (PEN)":{
    //     type:Number,
    //     required:true
    // },        
    // "Philippine peso   (PHP)":{
    //     type:Number,
    //     required:true
    // },       
    // "Polish zloty   (PLN)":{
    //     type:Number,
    //     required:true
    // },          
    // "Qatari riyal   (QAR)":{
    //     type:Number,
    //     required:true
    // },       
    // "Russian ruble   (RUB)":{
    //     type:Number,
    //     required:true
    // },       
    // "Saudi Arabian riyal   (SAR)":{
    //     type:Number,
    //     required:true
    // },      
    // "Singapore dollar   (SGD)":{
    //     type:Number,
    //     required:true
    // },      
    // "South African rand   (ZAR)":{
    //     type:Number,
    //     required:true
    // },         
    // "Swedish krona   (SEK)":{
    //     type:Number,
    //     required:true
    // },         
    // "Swiss franc   (CHF)":{
    //     type:Number,
    //     required:true
    // },       
    // "Thai baht   (THB)":{
    //     type:Number,
    //     required:true
    // },        
    // "Trinidadian dollar   (TTD)":{
    //     type:Number,
    //     required:true
    // },       
    // "U.A.E. dirham   (AED)":{
    //     type:Number,
    //     required:true
    // },       
    // "U.K. pound   (GBP)":{
    //     type:Number,
    //     required:true
    // },     
    // "U.S. dollar   (USD)":{
    //     type:Number,
    //     required:true
    // },  
    // "Uruguayan peso   (UYU)":{
    //     type:Number,
    //     required:true
    // }                    

})

const currencyModel=mongoose.model('currency1',currecySchema);

class Currency{
    // static async read(){
    //     currencyModel.find({}, (err, currencies) => {
    //     if (err) {
    //       console.error('Error querying documents:', err);
    //       return;
    //     }
      
    //     // Do something with the retrieved documents
    //     console.log('Found documents:', currencies);
    //     return await currencies;
    //   });
    // } 
    static async find() {
        return await currencyModel.find();
    } 
}

module.exports={
    Currency
}