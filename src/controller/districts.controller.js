import { DistrictsModel } from '../model/districts.model.js';

export const districtsController = {
  find: async (req, res, next) => {
    try {
      const districts = await DistrictsModel.find({});
      res.send(districts);
    } catch (err) {
      next(err);
    }
  },
  findOne: async (req, res, next) => {
    try {
      const { id } = req.params;
      const districts = await DistrictsModel.find({ _id: id });
      res.send(districts);
    } catch (err) {
      next(err);
    }
  },
  create: async (req, res, next) => {
    try {
      const districts = req.body;
      const newDistricts = await DistrictsModel.create(districts);
      res.send(newDistricts);
    } catch (err) {
      next(err);
    }
  },
  update: async (req, res, next) => {
    try {
      const { id } = req.params;
      const data = req.body;
      const newDistricts = await DistrictsModel.updateOne({ _id: id }, data);
      res.send(newDistricts);
    } catch (err) {
      next(err);
    }
  },
  delete: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await DistrictsModel.deleteOne({ _id: id });
      res.send(result);
    } catch (err) {
      next(err);
    }
  },
};
