const mongoose = require("mongoose");
const EventSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please Enter Your event product Name!"],
  },
  discription: {
    type: String,
    require: [true, "Please Enter Your event Product discription!"],
  },
  category: {
    type: String,
    required: [true, "Please Enter Your event Product category!"],
  },
  start_Date: {
    type: Date,
    required: true,
  },
  finish_Date: {
    type: Date,
    required: true,
  },
  status: {
    type: String,
    default: "Running",
  },
  tags: {
    type: String,
    required: [true, "Please Enter Your event Product Tags!"],
  },
  originalPrice: {
    type: Number,
  },
  discountPrice: {
    type: Number,
    required: [true, "Please Enter Your event Discount Price!"],
  },
  stock: {
    type: Number,
    required: [true, "Please Enter Your event Product Stock!"],
  },
  images: [
    {
      type: String,
    },
  ],
  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});
module.exports = mongoose.model("event", EventSchema);
