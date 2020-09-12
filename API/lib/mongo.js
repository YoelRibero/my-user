const { MongoClient, ObjectId } = require('mongodb');
const { config } = require('../config');

const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);
const DB_NAME = config.bdName;

const MONGO_URI = `mongodb+srv://${USER}:${PASSWORD}@${config.dbHost}:/${DB_NAME}?retryWrites=true&w=majority`;

class MongoLib {
  constructor() {
    this.client = new MongoClient(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    this.dbName = DB_NAME;
  }
  connect() {
    if (!MongoLib.connection) {
      MongoLib.connection = new Promise((res, rej) => {
        this.client.connect(err => {
          err && rej(err); // Atención a esta parte, si funciona borrar.
          console.log('Connected succesfully to mongo');
          res(this.client.db(this.dbName));
        })
      })
    }
    return MongoLib.connection
  }
  getAll(collection, query) {
    return this.connect()
      .then(db => {
        return db.collection(collection).find(query).toArray();
      })
  }
  get(collection, id) {
    return this.connect()
      .then(db => {
        return db.collection(collection).findOne({ _id: ObjectId(id) });
      });
  }
  create(collection, data) {
    return this.connect()
      .then(db => {
        return db.collection(collection).insertOne(data);
      }).then(result => result.insertedId);
  }
  update(collection, id, data) {
    return this.connect()
      .then(db => {
        return db.collection(collection).updateOne(
          { _id: ObjectId(id) }, 
          { $set: data }, 
          { upsert: true }
        );
      }).then(result => result.upsertedId || id);
  }
  delete(collection, id) {
    return this.connect()
      .then(db => {
        return db.collection(collection).deleteOne({ _id: ObjectId(id) });
      }).then(() => id);
  }
}

module.exports = MongoLib;
