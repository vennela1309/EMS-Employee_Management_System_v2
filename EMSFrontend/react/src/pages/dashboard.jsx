import "./Dashboard.css";
import { MdDashboard } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
const Dashboard = () => {
  return (
    <div className="dashboard-container">
      
      {/* Sidebar */}
      <div className="sidebar">
        <h2 className="logo">EMS</h2>

        <ul>
          <li> <p><MdDashboard /></p>Dashboard</li>
          <li> <p><IoPeopleSharp /></p>Employees</li>
          <li> <p><FaPeopleArrows /></p>Add Employee</li>
          <li><p><TbLogout2 /></p>Logout</li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="main-content">

        <div className="header">
          <h1>Welcome Admin </h1>
          <p>Manage your workforce efficiently</p>
        </div>

        {/* Stats Cards */}
        <div className="cards">

          <div className="card">
            <h3>Total Employees</h3>
            <h2>120</h2>
          </div>

          <div className="card">
            <h3>Departments</h3>
            <h2>8</h2>
          </div>

          <div className="card">
            <h3>Admins</h3>
            <h2>3</h2>
          </div>

          <div className="card">
            <h3>Payroll</h3>
            <h2>$250K</h2>
          </div>

        </div>

        {/* Employee Table */}
        <div className="table-container">

          <div className="table-header">
            <h2>Employee List</h2>
            <button>Add Employee</button>
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
              <tr>
                <td>1</td>
                <td>John Doe</td>
                <td>john@test.com</td>
                <td>IT</td>
                <td>$5000</td>
                <td>
                  <button className="edit-btn">Edit</button>
                  <button className="delete-btn">Delete</button>
                </td>
              </tr>
            </tbody>
          </table>

        </div>

      </div>

    </div>
  );
};

export default Dashboard;