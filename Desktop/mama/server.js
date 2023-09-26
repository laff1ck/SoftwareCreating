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
