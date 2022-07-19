const httpClient = require('../helpers/asaasClients');
const users = require('../models/userModel');
const payment = require('../models/payModel');

module.exports = async (req, res, next) => {
  try {
    const {  paymentType, amount } = req.body;

    const { auth } = req;

    const user = await users.findById(auth._id);

    let paymentId;

    // id de usuario registrado no asaass
    if(!user.paymentId)
    {
      const customer =
        {
            'name': user.name,
            'email': user.email,
            'phone': user.phone,
            'notificationDisabled': false,
            'cpfCnpj': user.cpfCnpj
      };

      const { data:{ id } } = await httpClient.post('/api/v3/customers', customer);

      user.paymentId = id;

      paymentId = id;

      await user.save();
    }

    const paymentInfo = {
      'customer': paymentId || user.paymentId,
      'billingType': 'PIX',
      'dueDate': '2022-09-29',
      'value': amount,
      'description': 'Pedido 056984',
      'externalReference': user.id
    };

    const { data } = await httpClient.post('/api/v3/payments', paymentInfo);

    const paymentResult = await payment.create({
      externalPaymentId:data.id,
      client:user._id,
      paymentType,
      amount,
      paymentData:data
    });

    // vinculando com usuário.
    user.payments.push(paymentResult);

    user.save();

    return res.status(200).json({ 'Dados do pagamento': paymentResult });
  } catch (error) {
    console.log(error.response.data.errors);
    next(error);
  }
};
