import "./Dashboard.css";
import { MdDashboard } from "react-icons/md";
import { IoPeopleSharp } from "react-icons/io5";
import { FaPeopleArrows } from "react-icons/fa";
import { TbLogout2 } from "react-icons/tb";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Api from "../services/api";

const Dashboard = () => {
const navigate = useNavigate();

const [employees, setEmployees] = useState([]);
const [search, setSearch] = useState("");
const [department, setDepartment] = useState("");

const [currentPage, setCurrentPage] = useState(1);
const employeesPerPage = 5;

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

// Reset Page when Search or Filter Changes
useEffect(() => {
setCurrentPage(1);
}, [search, department]);

// Search + Filter
const filteredEmployees = employees.filter((emp) => {
const matchesSearch =
emp.name.toLowerCase().includes(search.toLowerCase()) ||
emp.email.toLowerCase().includes(search.toLowerCase()) ||
emp.department.toLowerCase().includes(search.toLowerCase());


const matchesDepartment =
  department === "" ||
  emp.department === department;

return matchesSearch && matchesDepartment;


});

// Pagination
const lastIndex = currentPage * employeesPerPage;
const firstIndex = lastIndex - employeesPerPage;

const currentEmployees = filteredEmployees.slice(
firstIndex,
lastIndex
);

const totalPages = Math.ceil(
filteredEmployees.length / employeesPerPage
);

// Delete Employee
const deleteEmployee = async (id) => {
try {
const confirmDelete = window.confirm(
"Are you sure you want to delete?"
);


  if (!confirmDelete) return;

  await Api.delete(`/employees/${id}`);

 toast.success("Employee Deleted Successfully");

  getEmployees();

} catch (error) {
  console.log(error);
}


};

// Logout
const logout = () => {
localStorage.removeItem("token");

toast.success("Logged Out Successfully");

setTimeout(() => {
  navigate("/");
}, 1000);
};

return ( <div className="dashboard-container">


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

    {/* Search + Filter */}
    <div className="search-filter-container">

      <input
        type="text"
        placeholder="Search Employee..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <select
        value={department}
        onChange={(e) => setDepartment(e.target.value)}
      >
        <option value="">All Departments</option>
        <option value="IT">IT</option>
        <option value="HR">HR</option>
        <option value="Finance">Finance</option>
        <option value="Marketing">Marketing</option>
        <option value="Operations">Operations</option>
      </select>

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

    {/* Table */}
    <div className="table-container">

      <div className="table-header">
        <h2>Employee List</h2>

        <button onClick={() => navigate("/add")}>
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

          {currentEmployees.length > 0 ? (

            currentEmployees.map((emp) => (
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

      {/* Pagination */}

      <div className="pagination">

        <button
          disabled={currentPage === 1}
          onClick={() =>
            setCurrentPage(currentPage - 1)
          }
        >
          Prev
        </button>

        <span>
          Page {currentPage} of {totalPages || 1}
        </span>

        <button
          disabled={
            currentPage === totalPages ||
            totalPages === 0
          }
          onClick={() =>
            setCurrentPage(currentPage + 1)
          }
        >
          Next
        </button>

      </div>

    </div>

  </div>

</div>


);
};

export default Dashboard;
