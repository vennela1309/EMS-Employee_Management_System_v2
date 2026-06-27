# 🚀 Employee Management System (EMS)

A full-stack Employee Management System built with **React.js**, **Node.js**, **Express.js**, and **MySQL**. This application provides a secure and efficient platform for managing employee records with JWT-based authentication and complete CRUD operations.

---

## 📌 Features

* 🔐 Secure Admin Login with JWT Authentication
* 👥 Employee Management Dashboard
* ➕ Add New Employees
* ✏️ Edit Employee Details
* 🗑️ Delete Employees
* 🔍 Search Employees by Name, Email, or Department
* 🏢 Filter Employees by Department
* 📄 Pagination for Employee Records
* 🔒 Protected Routes and APIs
* 📱 Responsive User Interface
* 🎨 Modern and Clean Dashboard Design

---

## 🛠️ Tech Stack

### Frontend

* React.js
* React Router DOM
* Axios
* CSS3
* React Icons

### Backend

* Node.js
* Express.js
* JWT Authentication
* bcrypt
* MySQL2

### Database

* MySQL

---

## 📂 Project Structure

```
Employee-Management-System/
│
├── EMSFrontend/
│   ├── src/
│   │   ├── pages/
│   │   ├── services/
│   │   ├── components/
│   │   ├── App.jsx
│   │   └── main.jsx
│   └── package.json
│
├── EMSBackend/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── routes/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## 📸 Application Modules

### 🔑 Login

* Secure authentication using JWT
* Password encryption with bcrypt
* Protected dashboard access

### 📊 Dashboard

* Employee statistics
* Employee table
* Search functionality
* Department filtering
* Pagination

### 👨‍💼 Employee Management

* Add Employee
* Edit Employee
* Delete Employee
* View Employee Details

---

## 🗄️ Database

### Users Table

| Column   | Type                  |
| -------- | --------------------- |
| id       | INT                   |
| name     | VARCHAR               |
| email    | VARCHAR               |
| password | VARCHAR               |
| role     | ENUM(admin, employee) |

### Employees Table

| Column     | Type      |
| ---------- | --------- |
| id         | INT       |
| name       | VARCHAR   |
| email      | VARCHAR   |
| department | VARCHAR   |
| salary     | DECIMAL   |
| created_at | TIMESTAMP |

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/employee-management-system.git
```

### Frontend

```bash
cd EMSFrontend
npm install
npm run dev
```

### Backend

```bash
cd EMSBackend
npm install
npm start
```

---

## 🔐 Environment Variables

Create a `.env` file inside the backend folder.

```
PORT=5000

DB_HOST=localhost
DB_USER=root
DB_PASSWORD=your_password
DB_NAME=employeeDetails

JWT_SECRET=your_secret_key
```

---

## 🌐 API Endpoints

### Authentication

```
POST /api/auth/login
POST /api/auth/register
```

### Employees

```
GET    /api/employees
POST   /api/employees
PUT    /api/employees/:id
DELETE /api/employees/:id
GET    /api/employees/:id
```

---

## 🚀 Deployment

### Frontend

* Vercel

### Backend

* Render

### Database

* Railway / Aiven MySQL

---

## 📈 Future Improvements

* Toast Notifications
* Dashboard Charts
* Employee Profile Page
* Attendance Management
* Leave Management
* Payroll Module
* Role-Based Access Control
* Dark Mode
* Export Employees to Excel/PDF

---

## 👨‍💻 Author

Vennela Nakka

GitHub: https://github.com/vennela1309

LinkedIn: https://www.linkedin.com/in/vennela-nakka/

---

## 📄 License

This project is developed for learning, portfolio, and educational purposes.
