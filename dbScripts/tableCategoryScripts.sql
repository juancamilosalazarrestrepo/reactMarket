CREATE TABLE category (
  id INT IDENTITY(1,1) NOT NULL,
  nameCategory VARCHAR(255) NOT NULL,
  CONSTRAINT PK_category PRIMARY KEY (id)
);