import { AddressModel } from '../model/address.model.js';

export const addressController = {
  find: async (req, res, next) => {
    try {
      const adress = await AddressModel.find({}).populate('district_id').exec();
      res.send(adress);
    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const adress = await AddressModel.find({ _id: id });
      res.send(adress);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const address = req.body;
      const newAddress = await AddressModel.create(address);
      res.send(newAddress);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const newAddress = await AddressModel.updateOne({ _id: id }, data);
      res.send(newAddress);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await AddressModel.deleteOne({ _id: id });
      res.send(result);
    } catch (err) {
      next(err);
    }
  },
};
