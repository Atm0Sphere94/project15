const express = require('express');
const bodyParser = require('body-parser');
const cookies = require('cookie-parser');
const { errors } = require('celebrate');
const helmet = require('helmet');

const app = express();

const { PORT } = require('./config');
const { connectDB } = require('./connectdb');
const routeAll = require('./routes/routes');
const { createUser, login } = require('./controllers/users');

const errorHandler = require('./errors/errorHandler');
const auth = require('./middlewares/auth');
const { requestLogger, errorLogger } = require('./middlewares/logger');
const { userValidator, loginValidator } = require('./middlewares/valid_celebrate');


connectDB();
app.use(helmet());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookies());
app.use(requestLogger);

// crash-test проверка работы pm2
app.get('/crash-test', () => {
  setTimeout(() => {
    throw new Error('Сервер сейчас упадёт');
  }, 0);
});

app.post('/signup', userValidator, createUser);
app.post('/signin', loginValidator, login);
app.use(auth);
app.use('/', routeAll);

app.use(errorLogger);
app.use(errors());
app.use(errorHandler);

app.listen(PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server listening on port ${PORT}`);
});
