-- =========================================
-- WEEK 7 DAY 1
-- EXERCISE 1: ITEMS AND CUSTOMERS
-- =========================================


-- 1. CREATE TABLES

CREATE TABLE items (
    item_id SERIAL PRIMARY KEY,
    item_name VARCHAR(100) NOT NULL,
    price INTEGER NOT NULL
);

CREATE TABLE customers (
    customer_id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL
);


-- 2. INSERT ITEMS

INSERT INTO items (item_name, price)
VALUES
    ('Small Desk', 100),
    ('Large Desk', 300),
    ('Fan', 80);


-- 3. INSERT CUSTOMERS

INSERT INTO customers (first_name, last_name)
VALUES
    ('Greg', 'Jones'),
    ('Sandra', 'Jones'),
    ('Scott', 'Scott'),
    ('Trevor', 'Green'),
    ('Melanie', 'Johnson');


-- =========================================
-- SELECT EXERCISES
-- =========================================


-- 1. All items

SELECT * FROM items;


-- 2. All items with a price above 80
-- 80 is NOT included

SELECT *
FROM items
WHERE price > 80;


-- 3. All items with a price below 300
-- 300 IS included

SELECT *
FROM items
WHERE price <= 300;


-- 4. Customers whose last name is Smith
-- Expected result: 0 rows

SELECT *
FROM customers
WHERE last_name = 'Smith';


-- 5. Customers whose last name is Jones

SELECT *
FROM customers
WHERE last_name = 'Jones';


-- 6. Customers whose first name is NOT Scott

SELECT *
FROM customers
WHERE first_name != 'Scott';