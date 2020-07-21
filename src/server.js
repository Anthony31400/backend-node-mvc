require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');

const PORT = process.env.PORT || (process.env.NODE_ENV === 'test' ? 3001 : 3000);

app.use(express.json());
app.use(cors());
// prettier-ignore
app.use(
  express.urlencoded({
    extended: true,
  }),
);
// import rout files here

// const tableRouter = require('./routes/tableroute');

// add app.use here

// app.use('/tables, tableRouter);

const server = app.listen(PORT, () => {
  console.log(`🌍 Server is running on port ${PORT}`);
});

module.exports = server;
