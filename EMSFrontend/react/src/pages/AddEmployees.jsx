import "./EmployeeForm.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../services/api";

const AddEmployee = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Api.post("/employees", formData);

      alert("Employee Added Successfully");
      navigate("/dashboard");

    } catch (error) {
      console.log(error);
      alert("Failed to Add Employee");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">

        <h1>Add Employee</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              onChange={handleChange}
              required
            />
          </div>

          <div className="input-group">
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              onChange={handleChange}
              required
            />
          </div>

          <button className="submit-btn">
            Add Employee
          </button>

        </form>

      </div>
    </div>
  );
};

export default AddEmployee;