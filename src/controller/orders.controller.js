import { ordersModel } from "../model/orders.model.js";

export const ordersController = {
  find: async (req, res, next) => {
    try {
      const orders = await ordersModel.find({});
      res.send(orders);
    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const orders = await ordersModel.find({ _id: id });
      res.send(orders);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const orders = req.body;
      const newOrders = await ordersModel.create(orders);
      res.send(newOrders);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const newOrders = await ordersModel.updateOne({ _id: id }, data);
      res.send(newOrders);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await ordersModel.deleteOne({ _id: id });
      res.send(result);
    } catch (err) {
      next(err);
    }
  },
};
