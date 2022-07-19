const payment = require('../models/payModel');
const success = 'SUCCESS';

module.exports = async (req, res, next) => {
  try {
    const notification = req.body;

   const paymentIntent = await payment.findOne({ externalPaymentId:notification.id }).populate('client');

    if(!paymentIntent) {
      // eslint-disable-next-line no-console
      console.error(`Notification for id:${notification.id} not found`);
      return res.status(200);
    }

    if(notification.status !== success) return res.status(200).end();

    if(paymentIntent.status === success) return res.status(200).end();

    paymentIntent.status = success;

    await paymentIntent.save();

    paymentIntent.client.credits = paymentIntent.client.credits + paymentIntent.amount;

    paymentIntent.client.save();

    return res.status(200).end();
  } catch (error) {
    next(error);
  }
};

