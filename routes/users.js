const router = require('express').Router({ mergeParams: true });

const {
  getAllUsers, getUser,
} = require('../controllers/users');

const { mongooseObjectIdValidator } = require('../middlewares/valid_celebrate');

router.get('/users/:id', mongooseObjectIdValidator, getUser);
router.get('/users', getAllUsers);


module.exports = router;
