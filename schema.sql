DROP DATABASE IF EXISTS bamazon;
CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products(
  id int AUTO_INCREMENT,
  product_name varchar(30) NOT NULL,
  department_name varchar(30) NOT NULL,
  price decimal(10,2) NOT NULL,
  stock_quantity int NOT NULL default 0,
  primary key(id)
);

SELECT * FROM products;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Mortal Engines", "Book", 9.99, 10),
  ("Indestructible Ball", "Toy", 8.99, 20),
  ("From Sand and Ash", "Book", 4.99, 10),
  ("Little Fires Everywhere", "Book", 15.28, 10),
  ("50/50", "Movie", 7.97, 30);