import "./EmployeeForm.css";

const AddEmployee = () => {
  return (
    <div className="form-container">

      <div className="form-card">

        <h1>Add Employee</h1>
        <p>Fill employee information below</p>

        <form>

          <div className="input-group">
            <label>Name</label>
            <input type="text" placeholder="Enter employee name" />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input type="email" placeholder="Enter employee email" />
          </div>

          <div className="input-group">
            <label>Password</label>
            <input type="password" placeholder="Enter password" />
          </div>

          <div className="input-group">
            <label>Department</label>
            <input type="text" placeholder="IT / HR / Finance" />
          </div>

          <div className="input-group">
            <label>Salary</label>
            <input type="number" placeholder="Enter salary" />
          </div>

          <div className="input-group">
            <label>Role</label>

            <select>
              <option>Employee</option>
              <option>Admin</option>
            </select>
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