import "./EmployeeForm.css";

const EditEmployee = () => {
  return (
    <div className="form-container">

      <div className="form-card">

        <h1>Edit Employee</h1>
        <p>Update employee details</p>

        <form>

          <div className="input-group">
            <label>Name</label>
            <input
              type="text"
              value="John Doe"
            />
          </div>

          <div className="input-group">
            <label>Email</label>
            <input
              type="email"
              value="john@test.com"
            />
          </div>

          <div className="input-group">
            <label>Department</label>
            <input
              type="text"
              value="IT"
            />
          </div>

          <div className="input-group">
            <label>Salary</label>
            <input
              type="number"
              value="50000"
            />
          </div>

          <div className="input-group">
            <label>Role</label>

            <select>
              <option>Employee</option>
              <option>Admin</option>
            </select>
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