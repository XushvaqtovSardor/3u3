import { model, Schema } from "mongoose";
const customersSchema = new Schema({
  name: {
    type: String,
    trim: true,
    required: true,
  },
  phone: {
    type: String,
    trim: true,
  },
});
export const CustomersModel = model("customers", customersSchema);
