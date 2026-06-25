-- Create Database
CREATE DATABASE IF NOT EXISTS employeeDetails;
USE employeeDetails;

-- =========================
-- USERS TABLE
-- =========================

DROP TABLE IF EXISTS users;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL,
    role ENUM('admin','employee') DEFAULT 'employee'
);

-- =========================
-- EMPLOYEES TABLE
-- =========================

DROP TABLE IF EXISTS employees;

CREATE TABLE employees (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    department VARCHAR(100),
    salary DECIMAL(10,2),
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- =========================
-- SAMPLE EMPLOYEES
-- =========================

INSERT INTO employees
(name,email,department,salary)
VALUES
(
'John Doe',
'john@test.com',
'IT',
60000
),
(
'Jane Smith',
'jane@test.com',
'HR',
55000
),
(
'Michael Brown',
'michael@test.com',
'Finance',
70000
),
(
'Emily Davis',
'emily@test.com',
'Marketing',
50000
),
(
'David Wilson',
'david@test.com',
'Operations',
65000
);

-- =========================
-- VERIFY
-- =========================

SELECT * FROM employees;
SELECT * FROM users;