const empModel = require("../model/empModel");

// List all employees
const getEmp = async (req, res) => {
  try {
    const result = await empModel.find();
    res.render("index", { result });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error fetching employees");
  }
};

// Render Add/Edit form
const getEmpById = async (req, res) => {
  try {
    const employee = req.params.id ? await empModel.findById(req.params.id) : null;
    res.render("form", { employee });
  } catch (error) {
    console.error(error);
    res.status(500).send("Error loading form");
  }
};

// Save new or update existing employee
const saveEmp = async (req, res) => {
  try {
    if (req.body.id) {
      await empModel.findByIdAndUpdate(req.body.id, {
        name: req.body.name,
        salary: req.body.salary,
      });
    } else {
      const data = new empModel({
        name: req.body.name,
        salary: req.body.salary,
      });
      await data.save();
    }
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error saving employee");
  }
};

// Delete employee
const deleteEmp = async (req, res) => {
  try {
    await empModel.findByIdAndDelete(req.params.id);
    res.redirect("/");
  } catch (error) {
    console.error(error);
    res.status(500).send("Error deleting employee");
  }
};

module.exports = { getEmp, getEmpById, saveEmp, deleteEmp};
