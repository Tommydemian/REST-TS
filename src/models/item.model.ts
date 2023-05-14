import { Schema, Types, model, Model } from "mongoose";
import { Car } from "../types/car.interface";

const itemSchema = new Schema<Car>(
  {
    name: {
      type: String,
      required: true,
    },
    color: {
      type: String,
      required: true,
    },
    gas: {
      type: String,
      required: true,
      enum: ["gasoline", "electric"],
    },
    year: {
      type: Number,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true, versionKey: false }
);

const itemModel = model("Item", itemSchema);
export default itemModel;
