const model = require('../models/chatmodel');

const createMessage = async (message, nickname, timestamp) => {
  await model.createMessage(message, nickname, timestamp);
};

const getAllMessages = async () => {
  const getAll = await model.getAllMessages();
  return getAll;
};

module.exports = {
  createMessage,
  getAllMessages,
};