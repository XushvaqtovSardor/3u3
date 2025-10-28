import { Water_productModel } from '../model/water_products.model.js';

export const water_productsController = {
  find: async (req, res, next) => {
    try {
      const water_products = await Water_productModel.find({});
      res.send(water_products);
    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const water_products = await Water_productModel.find({ _id: id });
      res.send(water_products);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const water_products = req.body;
      const newWater_products = await Water_productModel.create(water_products);
      res.send(newWater_products);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const newWater_products = await Water_productModel.updateOne(
        { _id: id },
        data
      );
      res.send(newWater_products);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await Water_productModel.deleteOne({ _id: id });
      res.send(result);
    } catch (err) {
      next(err);
    }
  },
};
