const express = require('express');
const cors = require('cors');
const app = express();

const { config } = require('./config');
const usersApi = require('./routes/users');

// body parse
app.use(express.json());
app.use(cors());

usersApi(app);

app.listen(config.port, function() {
  console.log(`Listening http://localhost:${config.port}`);
});
