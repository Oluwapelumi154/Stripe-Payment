const dotenv = require('dotenv');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.getCustomers = async (req, res) => {
  try {
    const customers = await stripe.customers.list({ limit: 2 });
    res.status(200).json({
      status: 'success',
      message: 'Successfully fetched all customers',
      count: customers.data.length,
      customers
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.createCustomer = async (req, res) => {
  try {
    const customers = await stripe.customers.create();
    res.status(200).json({
      status: 'success',
      message: 'Successfully Created a Customer',
      customers
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: 'Internal server Error',
      message: err.message
    });
  }
};

exports.getCustomer = async (req, res) => {
  const { query } = req;
  try {
    const customers = await stripe.customers.retrieve(query.customerId);
    res.status(200).json({
      status: 'success',
      message: 'Successfully fetched a customer',
      customers
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.updateCustomer = async (req, res) => {
  const { query } = req;
  try {
    const customers = await stripe.customers.update(query.customerId, {
      name: 'Oluwapelumi Orebayo'
    });
    res.status(200).json({
      status: 'success',
      message: 'Successfully fetched a customer',
      customers
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.createCustomerWithValue = async (req, res) => {
  try {
    const customer = await stripe.customers.create({
      email: 'orebayopelumi@gmail.com',
      name: 'Orebayo Oluwapelumi',
      payment_method: 'pm_card_visa',
      preferred_locales: ['en', 'es'],
      tax_exempt: 'none',
      invoice_settings: {
        default_payment_method: 'pm_card_visa'
      }
    });
    res.status(200).json({
      status: 'success',
      message: 'Successfully Created a customer',
      customer
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.deleteCustomer = async (req, res) => {
  const { query } = req;
  try {
    const customer = await stripe.customers.del(query.customerId);
    res.status(200).json({
      status: 'success',
      message: 'Successfully Deleted a customer',
      customer
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};
exports.createPaymentIntent = async (req, res) => {
  try {
    const intent = await stripe.paymentIntents.create({
      amount: 2000,
      currency: 'usd'
    });
    res.status(200).json({
      status: 'success',
      message: 'Successfully Created a PaymentIntent',
      intent_id: intent
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.confirmPaymentIntent = async (req, res) => {
  const { query } = req;
  try {
    const intent = await stripe.paymentIntents.confirm(query.paymentIntent, {
      payment_method: 'pm_card_visa'
    });
    res.status(200).json({
      status: 'success',
      message: 'Successfully Confirmed a paymentIntent',
      intent_id: intent.id,
      intent_status: intent.status
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};

exports.getPaymentIntent = async (req, res) => {
  const { query } = req;
  try {
    const intent = await stripe.paymentIntents.retrieve(query.paymentIntent);
    res.status(200).json({
      status: 'success',
      message: 'Successfully fetched a paymentIntent',
      intent
    });
  } catch (err) {
    res.status(500).json({
      status: 'fail',
      message: err.message
    });
  }
};
