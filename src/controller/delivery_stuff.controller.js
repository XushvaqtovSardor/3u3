import { Delivery_stuffModel } from '../model/delivery_stuff.model.js';

export const delivery_stuffController = {
  find: async (req, res, next) => {
    try {
      const delivery_stuff = await Delivery_stuffModel.find({});
      res.send(delivery_stuff);
    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const delivery_stuff = await Delivery_stuffModel.find({ _id: id });
      res.send(delivery_stuff);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const delivery_stuff = req.body;
      const newDelivery_stuf = await Delivery_stuffModel.create(delivery_stuff);
      res.send(newDelivery_stuf);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const newDelivery_stuf = await Delivery_stuffModel.updateOne(
        { _id: id },
        data
      );
      res.send(newDelivery_stuf);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Delivery_stuffModel.deleteOne({ _id: id });
      res.send(result);
    } catch (err) {
      next(err);
    }
  },
};
