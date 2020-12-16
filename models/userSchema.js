const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const userSchema = new Schema({
  username: {
    type: Schema.Types.String,
    required: true,
    unique: true,
  },
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
  gender: {
    type: Schema.Types.String,
    enum: ['Male', 'Female'],
    default: 'Male',
  },
  dateOfBirth: {
    type: Schema.Types.Date,
    required: true,
  },
});

userSchema.plugin(uniqueValidator);

module.exports = mongoose.model('User', userSchema);
