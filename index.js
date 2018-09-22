const express = require('express');
const path = require('path');
const app = express();

app.use(express.static(path.join(__dirname, '..', 'public')));
app.set('view engine', 'pug');
app.set('views', './views');

app.get('*', (req, res) => {
  res.sendFile('index.html');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT);
