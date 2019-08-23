const express = require('express');
const cors = require('cors');

const app = express();
const config = require('./config');
const postRoutes = require('./routes/post.routes');
const mongoose = require('mongoose');
const loadTestData = require('./testData');
const helmet = require('helmet');


app.use(cors());
app.use(express.urlencoded({extended: true}));
app.use(express.json());
app.use('/api', postRoutes);
app.use(helmet());


mongoose.connect(config.DB, {useNewUrlParser: true});
let db = mongoose.connection;

db.once('open', () => {
  console.log('Connected to the database');
  loadTestData;
});
db.on('error', (err) => console.log('Error' + err));

app.listen(config.PORT, function() {
  console.log('Server is running on port:', config.PORT);
});
