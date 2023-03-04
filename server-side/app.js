const express = require('express');
const app = express();
const port = 4002;
const cors = require('cors');
const router = require('./routers');

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
  res.send('Hello to my projects');
});

app.use(router);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
