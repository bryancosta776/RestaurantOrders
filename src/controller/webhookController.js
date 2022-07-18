const httpClient = require('../helpers/asaasClients');
const users = require('../models/userModel');
const payment = require('../models/payModel');


module.exports = async (req, res, next) => {
  try {
    const payments = await payment.find();

    if(!payments.client){
      return res.status(400).json('Not authorized');
    }









  }catch(error) {
    next(error);
  }
};

