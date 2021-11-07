const connection = require('./connection');

const createMessage = async (message, nickname, timestamp) => {
  const db = await connection();
  const create = db.collection('messages').insertOne({ message, nickname, timestamp });
  return create;
};

const getAllMessages = async () => {
  const db = await connection();
  const getAll = await db.collection('messages').find().toArray();
  return getAll;
};

module.exports = {
  createMessage,
  getAllMessages,
};