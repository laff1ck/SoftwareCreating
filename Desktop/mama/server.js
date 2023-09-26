// const http = require('http');
// const fs = require('fs');
// const hostname = '127.0.0.1'; // Локальный хост
// const port = 3000; // Порт, который будет прослушивать сервер

// const server = http.createServer((req, res) => {
//   const stream = fs.createReadStream('index.html');
//   stream.pipe(res)
//   // Обработка запросов здесь
//   res.statusCode = 200; // Код успешного ответа
//   res.setHeader('Content-Type', 'text/plain');
//   res.end('Hello mama\n');
// });

// server.listen(port, hostname, () => {
//   console.log(`Сервер запущен по адресу http://${hostname}:${port}/`);
// });

// const express = require('express');
// const app = express();


// // Указываем Express использовать статические файлы
// app.use(express.static('mama'));

// // Обработчик маршрута для вашего сайта
// app.get('/mama', (req, res) => {
//   res.sendFile(__dirname + '/mama/index.html');
// });

// app.listen(port, () => {
//   console.log('Сервер запущен на порту ${port}');
// });
const express = require('express');
const app = express();
const port = 3000;

// Настроим Express для обработки статических файлов из папки public
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.listen(port, () => {
  console.log('Сервер запущен на порту ${port}');
});