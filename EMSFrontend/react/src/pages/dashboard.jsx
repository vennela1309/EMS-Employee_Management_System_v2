import "./Dashboard.css";
import { MdDashboard } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";

import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../services/api";

const Dashboard = () => {
  const navigate = useNavigate();

  const [employees, setEmployees] = useState([]);

  // Fetch Employees
  const getEmployees = async () => {
    try {
      const res = await Api.get("/employees");

      setEmployees(res.data.employees);

    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getEmployees();
  }, []);

  // Delete Employee
  const deleteEmployee = async (id) => {
    try {
      const confirmDelete = window.confirm(
        "Are you sure you want to delete?"
      );

      if (!confirmDelete) return;

      await Api.delete(`/employees/${id}`);

      alert("Employee Deleted");

      getEmployees();

    } catch (error) {
      console.log(error);
    }
  };

  // Logout
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };

  return (
    <div className="dashboard-container">

      {/* Sidebar */}
      <div className="sidebar">

        <h2 className="logo">EMS</h2>

        <ul>
          <li>
            <p><MdDashboard /></p>
            Dashboard
          </li>

          <li>
            <p><IoPeopleSharp /></p>
            Employees
          </li>

          <li onClick={() => navigate("/add")}>
            <p><FaPeopleArrows /></p>
            Add Employee
          </li>

          <li onClick={logout}>
            <p><TbLogout2 /></p>
            Logout
          </li>
        </ul>

      </div>

      {/* Main Content */}
      <div className="main-content">

        <div className="header">
          <h1>Welcome Admin</h1>
          <p>Manage your workforce efficiently</p>
        </div>

        {/* Cards */}
        <div className="cards">

          <div className="card">
            <h3>Total Employees</h3>
            <h2>{employees.length}</h2>
          </div>

          <div className="card">
            <h3>Departments</h3>
            <h2>5</h2>
          </div>

          <div className="card">
            <h3>Admins</h3>
            <h2>1</h2>
          </div>

          <div className="card">
            <h3>Status</h3>
            <h2>Active</h2>
          </div>

        </div>

        {/* Employee Table */}
        <div className="table-container">

          <div className="table-header">
            <h2>Employee List</h2>

            <button
              onClick={() => navigate("/add")}
            >
              Add Employee
            </button>
          </div>

          <table>

            <thead>
              <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Email</th>
                <th>Department</th>
                <th>Salary</th>
                <th>Action</th>
              </tr>
            </thead>

            <tbody>

              {employees.length > 0 ? (

                employees.map((emp) => (
                  <tr key={emp.id}>
                    <td>{emp.id}</td>
                    <td>{emp.name}</td>
                    <td>{emp.email}</td>
                    <td>{emp.department}</td>
                    <td>₹{emp.salary}</td>

                    <td>

                      <button
                        className="edit-btn"
                        onClick={() =>
                          navigate(`/edit/${emp.id}`)
                        }
                      >
                        Edit
                      </button>

                      <button
                        className="delete-btn"
                        onClick={() =>
                          deleteEmployee(emp.id)
                        }
                      >
                        Delete
                      </button>

                    </td>
                  </tr>
                ))

              ) : (

                <tr>
                  <td colSpan="6">
                    No Employees Found
                  </td>
                </tr>

              )}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;