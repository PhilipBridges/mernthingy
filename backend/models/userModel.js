const mongoose = require("mongoose");
const { model } = require("mongoose");

const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      req: [true, "Name required."],
    },
    email: {
      type: String,
      req: [true, "Email required."],
      unique: true,
    },
    password: {
      type: String,
      req: [true, "Password required."],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("User", userSchema);
