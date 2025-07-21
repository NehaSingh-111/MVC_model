const express = require("express");
const router = express.Router();
const empController = require("../controller/empController");

// Employee list page
router.get("/", empController.getEmp);

// Form pages for Add and Edit
router.get("/form", empController.getEmpById);         // Add form
router.get("/form/:id", empController.getEmpById);     // Edit form

// Save new or update
router.post("/save", empController.saveEmp);

// Delete employee
router.get("/delete/:id", empController.deleteEmp);

module.exports = router;
