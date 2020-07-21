// import db
const db = require('../../db');

class TableModel {
  static MethodSample(cb) {
    db.query('SELECT * FROM *', (err, results) => {
      cb(err, results);
    });
  }
  // describe all method you want here
}

module.exports = TableModel;
