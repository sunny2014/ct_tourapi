// /backend/data.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// this will be our data base's data structure
const DataSchema = new Schema(
  {
    name: String,
    genchi: String,
    brand: String,
    details: String,
    urls:[{
      imgUrl0: String,
      imgUrl1: String,
      imgUrl2: String
    }]
  }
);

// export the new Schema so we could modify it using Node.js
module.exports = mongoose.model('tourlist', DataSchema,'tourlist');
