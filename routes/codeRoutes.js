const _ = require('lodash');
const mongoose = require('mongoose');
const requireLogin = require('../middlewares/requireLogin');

const Code = mongoose.model('code');

module.exports = app => {
  app.get('/api/code', requireLogin, async (req, res) => {
    const usersCode = await Code.find({ _user: req.user.id });
    res.send(usersCode);
  });

  app.post('/api/code', requireLogin, async (req, res) => {
    const codeInDB = await Code.findOne({ _user: req.user.id });
    if (!codeInDB) {
      const code = new Code({
        code: req.body.code,
        current: req.body.current,
        _user: req.user.id,
        dateSent: Date.now()
      });
      try {
        await code.save();
        res.send('item created');
      } catch (err) {
        res.status(422).send(err);
      }
    }
  });

  app.put('/api/code', requireLogin, async (req, res) => {
    try {
      const codeInDB = await Code.findOneAndUpdate(
        { _user: req.user.id },
        {
          code: req.body.code,
          current: req.body.current,
          _user: req.user.id,
          dateSent: Date.now()
        },
        { upsert: true }
      );
      res.send('item created');
    } catch (err) {
      res.status(422).send(err);
    }
  });
};
