const express = require('express');
const routes = require('./routes');
const cors = require('cors');
const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  credentials: true
}));
app.use(express.json())
app.use(routes);

app.listen(3030)
