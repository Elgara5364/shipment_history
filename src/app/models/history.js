const { Schema, models, model } = require("mongoose");

const historySchema = new Schema({
  date: { type: Date, required: true },
  location: { type: String, required: true },
  status: { type: String, required: true },
  notes: { type: String, required: true },
});

const LacakBarangSchema = new Schema({
  tracking_number: { type: Number, required: true },
  item_name: { type: String, required: true },
  sender: { type: String, required: true },
  recipient: { type: String, required: true },
  send_date: { type: Date, required: true },
  status: { type: String, required: true },
  history: [historySchema],
});

export const History = models.history || model("history", LacakBarangSchema);
