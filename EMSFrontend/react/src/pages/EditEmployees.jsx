import "./EmployeeForm.css";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Api from "../services/api";

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    department: "",
    salary: "",
  });

  useEffect(() => {
    fetchEmployee();
  }, []);

  const fetchEmployee = async () => {
    try {
      const res = await Api.get(`/employees/${id}`);

      setFormData(res.data.employee[0]);
      console.log(res.data)
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await Api.put(
        `/employees/${id}`,
        formData
      );

      alert("Employee Updated");
      navigate("/dashboard");

    } catch (error) {
      console.log(error);
      alert("Update Failed");
    }
  };

  return (
    <div className="form-container">
      <div className="form-card">

        <h1>Edit Employee</h1>

        <form onSubmit={handleSubmit}>

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Department</label>
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </div>

          <div className="input-group">
            <label>Salary</label>
            <input
              type="number"
              name="salary"
              value={formData.salary}
              onChange={handleChange}
            />
          </div>

          <button className="submit-btn">
            Update Employee
          </button>

        </form>

      </div>
    </div>
  );
};

export default EditEmployee;