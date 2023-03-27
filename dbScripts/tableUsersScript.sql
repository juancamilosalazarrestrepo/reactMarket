CREATE TABLE users (
  id NVARCHAR(50) PRIMARY KEY,
  name VARCHAR(50),
  password NVARCHAR(MAX),
  email VARCHAR(50),
  phone VARCHAR(20),
  role INT,
  createdAt DATETIME DEFAULT CURRENT_TIMESTAMP,
  updatedAt DATETIME DEFAULT CURRENT_TIMESTAMP
);