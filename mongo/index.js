var mongoose = require('mongoose');
var db = mongoose.connect('mongodb://localhost/foodDB'); //{DB이름}에는 사용할 DB이름을 적어주시면됩니다
mongoose.Promise = global.Promise;
var RestaurantSchema = mongoose.Schema({
  name: {type: String},
  location : {type: String},
  foodname1 : {type: String},
  foodcost1 : {type: Number},
  foodname2 : {type: String},
  foodcost2 : {type: Number},
  foodname3 : {type: String},
  foodcost3 : {type: Number},
  foodname4 : {type: String},
  foodcost4 : {type: Number},
  foodname5 : {type: String},
  foodcost5 : {type: Number},
  foodname6 : {type: String},
  foodcost6 : {type: Number},
  foodname7 : {type: String},
  foodcost7 : {type: Number},
  category : {type: String},
  starsum: {type: Number},
  count: {type: Number},
  category: {type:String}
});

Hos = mongoose.model("Hos",RestaurantSchema);
exports.Hos = Hos;
exports.db = db;
