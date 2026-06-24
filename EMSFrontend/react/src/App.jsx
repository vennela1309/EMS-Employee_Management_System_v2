
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import AddEmployees from "./pages/AddEmployees";
import EditEmployees from "./pages/EditEmployees";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/add" element={<AddEmployees />} />
        <Route path="/edit/:id" element={<EditEmployees />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;