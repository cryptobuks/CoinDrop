var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var bcrypt = require('bcrypt');
var Q = require('q');
var objectId = mongoose.Schema.Types.ObjectId;

// Sensitive secrets get a double-underscore prefix
var DealSchema = new Schema({
  

  seller:       { type:objectId , ref:'User' },
  sellerName:   String,
  buyer:        { type:objectId , ref:'User' },
  buyerName:    String,  
  buyerKey:     String,
  sellerKey:    String,
  memo:         String,
  btc:          { type:String, required:true },
  greeting:     String,
  address:      String,
  thirdKey:     String,
  publicHexes:  [{ type:String }],
  n:            Number,
  createdAt:    { type:Date , default:Date.now },
  keyReleasedTo: String
});

module.exports = mongoose.model('Deal', DealSchema);
