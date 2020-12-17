const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new Schema({
  userType: {
    type: Schema.Types.String,
    enum: ['Consumer', 'Publisher', 'Admin'],
    default: 'Consumer',
  },
  password: {
    type: Schema.Types.String,
    required: true,
  },
  avatar: {
    type: Schema.Types.String,
  },
  email: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
  firstName: {
    type: Schema.Types.String,
    required: true,
  },
  lastName: {
    type: Schema.Types.String,
    required: true,
  },
  address: {
    type: Schema.Types,
    String,
  },
  balance: Schema.Types.Number,
  phone: Schema.Types.Number,
  boughtBooks: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
  wishList: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Book',
    },
  ],
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
