/* ----------------------- Imports ---------------------- */

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
require('dotenv').config(); // Aryan ask for the .env file if you have read this.


/* ----------------- Basic Server Config ---------------- */

const app = express();
const PORT = process.env.PORT || 3000;
const startTime = new Date();


/* ------------ Client Side Interaction Setup ----------- */

app.use(cors());
app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/views'));
app.set('view engine', 'ejs');


/* ----------------------- Routes ----------------------- */

const apiRouter = require('./routes/api');
const viewsRouter = require('./routes/views');
app.use('/api', apiRouter);
app.use('/', viewsRouter);


/* ------------------ Test Route Setup ------------------ */

app.route('/api').get((req, res) => {
    res.json("Server started successfully on " + startTime);
});

/* --------------------- Run Server --------------------- */

app.listen(PORT, () => {
    console.log(`Server is running on port ${ PORT }`);
});