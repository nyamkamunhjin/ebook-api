const router = require('express').Router();
const moment = require('moment');

const passport = require('passport');
const bookSchema = require('../../models/bookSchema');

router.get('/', async (req, res) => {
  try {
    const books = await bookSchema.find();

    if (books !== undefined) res.status(200).json(books);
    // send error
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    // throw err;
  }
});

router.get('/:id', async (req, res) => {
  try {
    const book = await bookSchema.findById(req.params.id);

    if (book !== undefined) res.status(200).json(book);
    // send error
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
    // throw err;
  }
});

router.post(
  '/add',
  passport.authenticate('jwt', { session: false }),
  async (req, res) => {
    try {
      console.log(req.body);
      const book = new bookSchema(req.body);
      book.save((err) => {
        if (err) throw new Error('book validation failed.');
        else {
          res
            .status(200)
            .json({ success: true, message: 'book added to database.' });
        }
      });
    } catch (err) {
      console.log(err);
      res.status(500).json({ success: false, message: err.message });
    }
  }
);

module.exports = router;
