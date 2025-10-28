import { Order_itemsModel } from '../model/order_items.model.js';

export const order_itemsController = {
  find: async (req, res, next) => {
    try {
      const order_items = await Order_itemsModel.find({});
      res.send(order_items);
    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const order_items = await Order_itemsModel.find({ _id: id });
      res.send(order_items);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const order_items = req.body;
      const newOrder_items = await Order_itemsModel.create(order_items);
      res.send(newOrder_items);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const newOrder_items = await Order_itemsModel.updateOne(
        { _id: id },
        data
      );
      res.send(newOrder_items);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Order_itemsModel.deleteOne({ _id: id });
      res.send(result);
    } catch (err) {
      next(err);
    }
  },
};
