const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

const postRoutes = require('./routes/posts');
const userRoutes = require('./routes/user');

dotenv.config({ path: './config.env' });
require('./dbConn/dbConn');

const PORT = process.env.PORT;

app.use(bodyParser.json({ limit: '30mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '30mb', extended: true }));
app.use(cors());

app.use('/api', postRoutes);
app.use('/api', userRoutes);

app.listen(PORT, () => {
  console.log(`Server Running On PORT ${PORT}`);
});
