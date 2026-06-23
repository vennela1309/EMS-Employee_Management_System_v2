const db = require("../config/db");

// Get All Employees
const getAllEmployees = async (req, res) => {
  try {
    const [employees] = await db.query(
      "SELECT * FROM employees"
    );

    res.status(200).json({
      success: true,
      employees,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Add Employee
const addEmployee = async (req, res) => {
  try {
    const { name, email, department, salary } = req.body;

    await db.query(
      `INSERT INTO employees
      (name,email,department,salary)
      VALUES(?,?,?,?)`,
      [name, email, department, salary]
    );

    res.status(201).json({
      success: true,
      message: "Employee Added Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Get Employee By Id
const getEmployeeById = async (req, res) => {
  try {
    const { id } = req.params;

    const [employee] = await db.query(
      "SELECT * FROM employees WHERE id=?",
      [id]
    );

    res.status(200).json({
      success: true,
      employee,
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Update Employee
const updateEmployee = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, email, department, salary } = req.body;

    await db.query(
      `UPDATE employees
       SET name=?, email=?, department=?, salary=?
       WHERE id=?`,
      [name, email, department, salary, id]
    );

    res.status(200).json({
      success: true,
      message: "Employee Updated Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

// Delete Employee
const deleteEmployee = async (req, res) => {
  try {
    const { id } = req.params;

    await db.query(
      "DELETE FROM employees WHERE id=?",
      [id]
    );

    res.status(200).json({
      success: true,
      message: "Employee Deleted Successfully",
    });

  } catch (error) {
    res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};

module.exports = {
  getAllEmployees,
  addEmployee,
  getEmployeeById,
  updateEmployee,
  deleteEmployee,
};