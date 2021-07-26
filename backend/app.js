const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');
const authJwt = require('./helpers/jwt');
const errorHandler = require('./helpers/error-handler');


app.use(cors());
app.options('*', cors())

//middleware
app.use(express.json());
app.use(morgan('tiny'));
app.use(authJwt());
app.use('/public/uploads', express.static(__dirname + '/public/uploads'));
app.use(errorHandler);

//Routes
const categoriesRoutes = require('./routes/categories');
const productsRoutes = require('./routes/products');
const usersRoutes = require('./routes/users');
const ordersRoutes = require('./routes/orders');

const api = '/api/v1';
const CONNECTION_STRING = 'mongodb+srv://vaibhav:patel123@cluster0.qzlaj.mongodb.net/eazy-shop?retryWrites=true&w=majority';
app.use('/api/v1/categories', categoriesRoutes);
app.use('/api/v1/products', productsRoutes);
app.use('/api/v1/users', usersRoutes);
app.use('/api/v1/orders', ordersRoutes);

//Database
mongoose.connect(CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'eazy-shop'
})
    .then(() => {
        console.log('Database Connection is ready...')
    })
    .catch((err) => {
        console.log(err);
    })
app.get('/', (req, res) => {
    res.send("Welcome to Eazy shop");
})
//Server
const port = process.env.PORT || 3000;
app.listen(port, () => {

    console.log('server is running http://localhost:3000');
})