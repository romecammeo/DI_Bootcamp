---exercise 1---


SELECT *
FROM items
ORDER BY price ASC;

SELECT *
FROM items
WHERE price >= 80
ORDER BY price DESC;


SELECT first_name, last_name
FROM customers
ORDER BY first_name ASC
LIMIT 3;



SELECT last_name
FROM customers
ORDER BY last_name DESC;


---exercise 2---

SELECT
    film.title,
    film.description,
    language.name
FROM language
LEFT JOIN film
ON language.language_id = film.language_id;


SELECT *
FROM customer;

SELECT (first_name || ' ' || last_name) AS full_name
FROM customer;

SELECT DISTINCT create_date FROM  customer 




SELECT *
FROM customer
ORDER BY first_name DESC;
SELECT
    film_id,
    title,
    description,
    release_year,
    rental_rate
FROM film
ORDER BY rental_rate ASC;

SELECT address.address, address.phone
FROM address
INNER JOIN customer
ON customer.address_id = address.address_id
WHERE address.district = 'Texas';

SELECT *
FROM film
WHERE film_id = 15
   OR film_id = 150;

SELECT film_id, title, description, length, rental_rate
FROM film
WHERE film.title = 'Gatacca';


SELECT film_id, title, description, length, rental_rate
FROM film
WHERE title LIKE 'Ga%';

SELECT film_id, title, rental_rate
FROM film
ORDER BY rental_rate ASC
LIMIT 10;

CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

SELECT current_database();

SELECT table_name
FROM information_schema.tables
WHERE table_schema = 'public'
  AND table_name = 'new_film';


SELECT city.city, country.country
FROM city
JOIN country
ON city.country_id = country.country_id;


SELECT
    customer.customer_id,
    customer.first_name,
    customer.last_name,
    payment.amount,
    payment.payment_date
FROM customer
INNER JOIN payment
ON customer.customer_id = payment.customer_id
ORDER BY customer.customer_id ASC;


SELECT film.film_id, film.title
FROM film
LEFT JOIN inventory
ON film.film_id = inventory.film_id
WHERE inventory.inventory_id IS NULL;


SELECT city.city, country.country
FROM city
INNER JOIN country
ON city.country_id = country.country_id;
  
CREATE TABLE new_film (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL
);

INSERT INTO new_film (name)
VALUES
    ('Gatacca'),
    ('Stars war');

SELECT *
FROM new_film;

SELECT *
FROM language;

INSERT INTO new_film (name)
VALUES
    ('Database Wars'),
    ('The SQL Awakens');

CREATE TABLE customer_review (
    review_id SERIAL PRIMARY KEY,
    film_id INTEGER REFERENCES new_film(id) ON DELETE CASCADE,
    language_id INTEGER REFERENCES language(language_id),
    title VARCHAR(255),
    score SMALLINT CHECK (score BETWEEN 1 AND 10),
    review_text TEXT,
    last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

SELECT *
FROM language;

----DAILY challenge ---

-- Q1 prediction: 0

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NULL
);


-- Q2 prediction: 2

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id = 5
);


-- Q3 prediction: 0

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
);


-- Q4 prediction: 2

SELECT COUNT(*)
FROM FirstTab AS ft
WHERE ft.id NOT IN (
    SELECT id
    FROM SecondTab
    WHERE id IS NOT NULL
);


INSERT INTO customer_review (
    film_id,
    language_id,
    title,
    score,
    review_text
)
VALUES
    (1, 1, 'Great movie', 9, 'I really enjoyed Gatacca.'),
    (2, 1, 'Fun movie', 8, 'Stars war was entertaining.');


	DELETE FROM new_film
WHERE id = 1;


SELECT *
FROM customer_review;

INSERT INTO new_film (name)
VALUES ('Gatacca');


SELECT *
FROM new_film;


INSERT INTO customer_review ( 
    film_id,
    language_id,
    title,
    score,
    review_text
)
VALUES
    (3, 1, 'Great movie', 9, 'test review reinstation; powerful movie btw.'),
    (2, 1, 'no Bueno', 1, 'Stars war was mild this year.');
