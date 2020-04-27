const mongoose = require('mongoose');

module.exports = mongoose.model(
  'Post',
  new mongoose.Schema({
    title: String,
    body: String,
    likes: { type: Number, default: 0 },
    createdAt: { type: Date, default: new Date() },
    answers: [
      {
        text: String,
        likes: { type: Number, default: 0 },
        created: { type: Date, default: new Date() },
      },
    ],
  }),
);
