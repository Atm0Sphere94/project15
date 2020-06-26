const router = require('express').Router({ mergeParams: true });

const {
  getAllCards, postCard, deleteCard,
} = require('../controllers/cards');
const { cardValidator, mongooseObjectIdValidator } = require('../middlewares/valid_celebrate');

router.get('/cards', getAllCards);
router.post('/cards', cardValidator, postCard);
router.delete('/cards/:id', mongooseObjectIdValidator, deleteCard);

module.exports = router;
