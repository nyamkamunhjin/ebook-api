const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const categorySchema = new Schema({
  name: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  description: {
    type: Schema.Types.String,
  },
});

categorySchema.plugin(uniqueValidator);

module.exports = mongoose.model('Category', categorySchema);
