const { debug } = require('console');
const express = require('express');
const logger = require('morgan');
const path = require('path');
const cors = require('cors');
require('dotenv').config();

// Импортируем созданный в отдельный файлах рутеры.
const indexRouter = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3100;

const Traektoria = require('./db/traektoriya');

const traektoria = new Traektoria();
traektoria.init();
app.locals.traektoria = traektoria;

// Разрешаем Cross-origin
app.use(cors());

// Подключаем middleware morgan с режимом логирования "dev", 
// чтобы для каждого HTTP-запроса на сервер в консоль выводилась информация об этом запросе.
app.use(logger('dev'));
// Подключаем middleware, которое сообщает epxress, что в папке "ПапкаПроекта/public" 
// будут находится статические файлы, т.е. файлы доступные для скачивания из других приложений.
app.use(express.static(path.join(__dirname, 'public')));
// Подключаем middleware, которое позволяет читать содержимое body 
// из HTTP-запросов типа POST, PUT и DELETE.
app.use(express.urlencoded({ extended: true }));
// Подключаем middleware, которое позволяет читать переменные JavaScript, 
// сохранённые в формате JSON в body HTTP-запроса.
app.use(express.json());


app.use('/', indexRouter);

app.listen(PORT, () => {
  debug(`server-TAXI started PORT: ${PORT}`);
});
