CREATE TABLE actors(
 actor_id SERIAL PRIMARY KEY,
 first_name VARCHAR (50) NOT NULL,
 last_name VARCHAR (100) NOT NULL,
 age DATE NOT NULL,
 number_oscars SMALLINT NOT NULL
)


INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES('Matt','Damon','08/10/1970', 5),('Ethan', 'Hawke', '01/08/1970', 0)


SELECT COUNT(*) FROM actors


INSERT INTO actors (first_name, last_name, age, number_oscars)
VALUES(NULL, NULL, NULL, NULL)


-- ERROR:  null value in column "first_name" of relation "actors" violates not-null constraint
-- Failing row contains (3, null, null, null, null). 
