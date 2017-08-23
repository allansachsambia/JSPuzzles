const mongoose = require('mongoose');
const { Schema } = mongoose;

const codeSchema = new Schema({
  code: Array,
  current: Number,
  _user: { type: Schema.Types.ObjectId, ref: 'User' },
  dateSent: Date,
});

mongoose.model('code', codeSchema);
