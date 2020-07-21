// import model
const TableModel = require('../models/table-model.sample');

class TableController {
  static MethodSample(req, res) {
    try {
      TableModel.MethodSample((error, results) => {
        if (!results.length) {
          res.status(404).json({
            status: 'error',
            errorMessage: 'Not found',
          });
        } else {
          res.status(200).json({
            status: 'success',
            results,
          });
        }
      });
    } catch (err) {
      res.status(500).json({
        status: 'error',
        errorMessage: 'Our server encountered an error performing the request',
      });
    }
  }
  // describe all method you want here
}

module.exports = TableController;
