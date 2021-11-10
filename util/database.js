const mongodb = require("mongodb");
const MongoClient = mongodb.MongoClient;

let _db;
const mongoConnect = (callback) => {
  MongoClient.connect(
    
    "mongodb+srv://Karan-admin:2r5pJFTOFSO5kXzd@ecommerce-app.ngblf.mongodb.net/Product?retryWrites=true&w=majority"
  )
    .then((client) => {
      console.log("connected");
      _db = client.db();
      callback();
    })
    .catch((err) => console.log(err));
};

const getDb = () => {
  if(_db){
    return _db;
  }
  throw "NO Database Found";
}

exports.mongoConnect = mongoConnect;
exports.getDb = getDb;
