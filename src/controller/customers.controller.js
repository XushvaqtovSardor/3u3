import { CustomersModel } from "../model/customers.model.js";

export const customersController = {
  find: async (req, res, next) => {
    try {
      const customer = await CustomersModel.find({});
      res.send(customer);
    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const customer = await CustomersModel.find({ _id: id });
      res.send(customer);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const customer = req.body;
      const newCustomer = await CustomersModel.create(customer);
      res.send(newCustomer);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const newCustomer = await CustomersModel.updateOne({ _id: id }, data);
      res.send(newCustomer);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await CustomersModel.deleteOne({ _id: id });
      res.send(result);
    } catch (err) {
      next(err);
    }
  },
};
