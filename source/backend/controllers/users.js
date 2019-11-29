const db = require('../models')

const { User } = db

const UsersController = {
  index: async function(req, res, next) {
    const users = await User.findAll()
    res.json(users.map(user => user.get({ plain: true })))
  }
};

module.exports = UsersController;
