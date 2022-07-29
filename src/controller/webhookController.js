const payment = require('../models/payModel');
const success = 'SUCCESS';

module.exports = async (req, res, next) => {
  try {
    const notification = req.body;

    const paymentsClient = await payment.findOne({ id: notification.id }).populate('client');

    if(notification.status !== success){
      return res.status(200).end();
    }

    if(notification.status === success){
      return res.json(200).end();
    }

    notification.status = success;

    await payment.save();

    paymentsClient.client.credits = paymentsClient.client.credits + paymentsClient.amount;

    paymentsClient.client.save();

    return res.status(200).end();

  }catch (error) {
    next(error);
  }
};


