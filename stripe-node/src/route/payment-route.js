const {
  createCustomer,
  createCustomerWithVal,
  updateCustomer,
  deleteCustomer,
  createPaymentIntent,
  confirmPaymentIntent,
  getPaymentIntent
} = require('../controller');
const {
  getCustomers,
  getCustomer
} = require('../controller/payment-controller');

const router = require('express').Router();
router.get('/customer/all', getCustomers);
router.get('/customer', getCustomer);
router.post('/customer', createCustomer);
router.post('/customer/value', createCustomerWithVal);
router.patch('/customer', updateCustomer);
router.delete('/customer', deleteCustomer);
router.post('/create-payment-intent', createPaymentIntent);
router.patch('/confirm-payment-intent', confirmPaymentIntent);
router.get('/payment-intent', getPaymentIntent);
module.exports = router;
