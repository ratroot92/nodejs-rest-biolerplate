import mongodb from 'mongodb';

export default async function makeDb() {
  const { MongoClient } = mongodb;
  const url = 'mongodb://localhost:27017';
  const dbName = 'dev_evergreen';
  const client = new MongoClient(url, { useNewUrlParser: true });
  await client.connect();
  const db = await client.db(dbName);
  db.makeId = makeIdFromString;
  return db;
}
function makeIdFromString(id) {
  return new mongodb.ObjectID(id);
}
