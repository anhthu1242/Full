const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const portSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  url: {
    type: String,
  },
  status: {
    type: String,
    enum: ['LEARNING', 'TO LEARN', 'LEARNED'],
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users',
  },
});

module.exports = mongoose.model('ports', portSchema);
