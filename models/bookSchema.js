const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// const uniqueValidator = require('mongoose-unique-validator');
const bookSchema = new Schema({
  book_name: { type: Schema.Types.String, required: true },
  book_cover_image: { type: Schema.Types.String, required: true },
  author: Schema.Types.String,
  category: Schema.Types.String,
  published_date: { type: Schema.Types.Date, required: true },
  price: { type: Schema.Types.Number, required: true },
  description: { type: Schema.Types.String, required: true },
});

// bookSchema.plugin(uniqueValidator);

module.exports = mongoose.model('Book', bookSchema);
