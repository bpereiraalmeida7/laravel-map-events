const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');


//iniciando aplicação:
const app = express();
app.use(express.json());
app.use(cors());

//db
mongoose.set('useNewUrlParser', true);
mongoose.set('useUnifiedTopology', true);

mongoose.connect(
    /* "mongodb://192.168.99.100:27017/nodeapi" */
    "mongodb://localhost:27017/nodeapi"
);
requireDir('./src/models');

const Product = mongoose.model('Event');

//rotas:

app.use('/api', require("./src/routes"));

app.listen(3001);