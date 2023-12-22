const mongoose = require("mongoose");

const fromSchema = mongoose.Schema({
  formName: { type: String, required: true },
  formConfig: { type: Object, required: true },
});

const Form = mongoose.model("Formss", fromSchema);
module.exports = { Form };
