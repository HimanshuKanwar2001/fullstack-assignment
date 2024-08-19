const mongoose = require("mongoose");

const cardSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    link: {
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const Card = mongoose.model("Card", cardSchema);

module.exports = Card;
