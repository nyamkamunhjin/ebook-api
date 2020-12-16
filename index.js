const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const app = express();
const bodyParser = require('body-parser');
const authRouter = require('./routes/auth/api-auth');
const userRouter = require('./routes/users/api-users');
const cors = require('cors');
const passport = require('passport');

require('dotenv').config();
require('./passport/passport-setup');

app.use(cors({ origin: true }));
app.use(bodyParser.json());
app.use(passport.initialize());
app.use(morgan('tiny'));
app.use('/auth', authRouter);
app.use('/api/users', userRouter);

app.get('/', (req, res) => {
  res.json({ message: 'hello from deglem' });
});

// connect to mongo db
mongoose
  .connect(
    `mongodb+srv://${process.env.MONGO_USERNAME}:${process.env.MONGO_PASSWORD}@cluster0-bojs0.mongodb.net/${process.env.MONGO_DB}?retryWrites=true&w=majority`,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
      useCreateIndex: true,
    }
  )
  .then(() => {
    console.log('Connected to Mongo Atlas');
    app.listen(process.env.PORT, '', () => {
      console.log('Listening on port:', process.env.PORT);
    });
  })
  .catch((err) => console.log(err));
