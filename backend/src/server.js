const cors = require('cors');
const express = require('express');
const mongoose = require('mongoose');
require('dotenv/config');

const routes = require('./routes');

mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const server = express();

server.use(cors());
server.use(express.json());
server.use(routes);

// eslint-disable-next-line no-console
server.listen(process.env.PORT, () => console.log(`🚀 Backend online in port ${process.env.PORT}`));
