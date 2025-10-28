import { PaymentsModel } from '../model/payments.model.js';

export const paymentsController = {
  find: async (req, res, next) => {
    try {
      const payments = await PaymentsModel.find({});
      res.send(payments);
    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const payments = await PaymentsModel.find({ _id: id });
      res.send(payments);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const payments = req.body;
      const newPayments = await PaymentsModel.create(payments);
      res.send(newPayments);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const newPayments = await PaymentsModel.updateOne({ _id: id }, data);
      res.send(newPayments);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await PaymentsModel.deleteOne({ _id: id });
      res.send(result);
    } catch (err) {
      next(err);
    }
  },
};
