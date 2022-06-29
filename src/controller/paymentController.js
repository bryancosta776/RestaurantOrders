const payment = require('../models/payModel');

module.exports = async (req, res, next) => {
  try {
    const {  paymentType, amount } = req.body;

    const paymentResult = await payment.create({
      paymentType,
      amount
    });

   return res.status(200).json({ 'Dados do pagamento': paymentResult });
  } catch (error) {
    next(error);
  }
};
