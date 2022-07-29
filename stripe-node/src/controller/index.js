const paymentController = require('./payment-controller');
module.exports = Object.freeze({
  createCustomer: paymentController.createCustomer,
  customers: paymentController.getCustomers,
  retrieveCustomer: paymentController.getCustomer,
  createPaymentIntent: paymentController.createPaymentIntent,
  retrievePaymentIntent: paymentController.retrievePaymentIntent,
  createCustomerWithVal: paymentController.createCustomerWithValue,
  updateCustomer: paymentController.updateCustomer,
  deleteCustomer: paymentController.deleteCustomer,
  confirmPaymentIntent: paymentController.confirmPaymentIntent,
  getPaymentIntent: paymentController.getPaymentIntent
});
