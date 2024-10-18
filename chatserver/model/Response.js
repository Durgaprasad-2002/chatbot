const { Schema, model } = require("mongoose");

const responseScheme = new Schema(
  {
    summary: {
      type: String,
      required: true,
    },
    result_text: {
      type: String,
      required: true,
    },
    query: {
      type: String,
      required: true,
    },
    result_table_path: {
      type: String,
    },
    result_visualization_path: {
      type: String,
    },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Response", responseScheme);
