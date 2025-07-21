const express = require("express");
const router = express.Router();
const empController = require("../controller/empController");

router.get("/", empController.getEmp);

router.get("/form", empController.getEmpById);         
router.get("/form/:id", empController.getEmpById);     

router.post("/save", empController.saveEmp);

router.get("/delete/:id", empController.deleteEmp);

module.exports = router;
