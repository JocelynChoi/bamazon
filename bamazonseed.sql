DROP DATABASE IF EXISTS bamazon_DB;
CREATE DATABASE bamazon_DB;

USE bamazon_DB;

CREATE TABLE products (
    id INT NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100) NOT NULL,
    department_name VARCHAR(45) NOT NULL,
    price INT DEFAULT 0,
    stock_quantity INT DEFAULT 0,
    PRIMARY KEY (id)
);

USE bamazon_DB;

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("gladiator", "entertainment", 5, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("jaws", "entertainment", 15, 50);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("titanic", "entertainment", 10, 20);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("laptops", "electronics", 550, 100);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("cell phones", "electronics", 560, 2000);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("ipads", "electronics", 255, 750);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("darjeeling tea", "food", 10, 220);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("peppermint tea", "food", 15, 210);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("black tea", "food", 25, 230);
INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("camomile tea", "food", 35, 250);
