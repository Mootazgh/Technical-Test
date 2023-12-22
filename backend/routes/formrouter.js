const express = require("express");
const router = express.Router();
const { Form } = require("../models/FormModel");

router.post("/", async (request, response) => {
  try {
    const { formName, formConfig } = request.body;
    const newForm = await Form.create({ formName, formConfig });

    response
      .status(201)
      .json({ success: true, message: "Form created successfully" });
  } catch (error) {
    console.error("Error creating form:", error);
    response
      .status(500)
      .json({ success: false, error: "There was a problem creating the form" });
  }
});
router.get("/returnallforms", async (request, response) => {
  try {
    const allForms = await Form.find();
    response.status(200).json({ success: true, forms: allForms });
  } catch (error) {
    console.error("Error fetching forms", error);
    response.status(500).json({ success: false, error: "Error fetching" });
  }
});

router.delete("/deleteall", async (request, response) => {
  try {
    const deleteForms = await Form.deleteMany({});
    response.status(200).json({ success: true, forms: deleteForms });
  } catch (error) {
    console.error("Error delating all forms ", error);
    response.status(500).json({ success: false, error: "Error fetching" });
  }
});

module.exports = router;
