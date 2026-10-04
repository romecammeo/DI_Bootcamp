
CREATE TABLE students (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR(50) NOT NULL,
    last_name VARCHAR(50) NOT NULL,
    age INTEGER,
    country VARCHAR(50)
)

CREATE TABLE courses (
    id SERIAL PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    hours INTEGER,
    cost DECIMAL(10, 2),
    has_certificate BOOLEAN
)

INSERT INTO students (first_name, last_name, age, country)
VALUES
    ('Daniel', 'Cohen', 24, 'Israel'),
    ('Anna', 'Kowalski', 29, 'Poland'),
    ('David', 'Levy', 21, 'Israel'),
    ('Maria', 'Garcia', 32, 'Spain'),
    ('Alex', 'Petrov', 27, 'Bulgaria'),
    ('Sarah', 'Miller', 35, 'USA'),
    ('Noa', 'Ben-David', 22, 'Israel'),
    ('Lucas', 'Martin', 26, 'France'),
    ('Emma', 'Schmidt', 31, 'Germany'),
    ('Yuki', 'Tanaka', 25, 'Japan')

SELECT * FROM students

INSERT INTO courses (title, description, hours, cost, has_certificate)
VALUES
    (
        'Web Development',
        'Introduction to HTML, CSS and JavaScript',
        120,
        5000.00,
        TRUE
    ),
    (
        'Python Fundamentals',
        'Programming fundamentals using Python',
        80,
        3000.00,
        TRUE
    ),
    (
        'SQL and Databases',
        'Introduction to relational databases and SQL',
        40,
        3500.00,
        TRUE
    )

SELECT * FROM courses

SELECT avg(age) FROM students

SELECT count (*) FROM students

SELECT max (age) FROM students

SELECT min (age) FROM students

SELECT sum (age) FROM students

select stddev(age) from students

SELECT variance(age) FROM students

SELECT avg(hours) FROM courses

SELECT sum(cost) FROM courses

SELECT max (age) FROM students

SELECT max(cost) FROM courses


SELECT max(cost) as max_cost FROM courses

SELECT max(age) as oldest FROM students

SELECT country FROM  students WHERE country = 'Israel'


SELECT count(*)  FROM  students WHERE country = 'Israel'

SELECT first_name, last_name, age FROM students GROUP BY age HAVING country = 'israel'



SELECT country, count (*) FROM students GROUP BY country HAVING  count (*) > 1



SELECT country, avg (age) FROM students WHERE age > 22 GROUP BY country

SELECT country, avg (age) FROM students WHERE age > 22 GROUP BY country HAVING avg(age) > 33 




SELECT country, avg (age) AS average_age FROM students 
WHERE age > 22 GROUP BY country HAVING avg(age) > 30 ORDER BY avg (age) ASC



SELECT first_name FROM students 
UNION 
Select title FROM courses 



CREATE TABLE student_courses (
    id_serial PRIMARY KEY,
    student_id INTEGER,
    course_id INTEGER,
)


CREATE TABLE student_courses (
    id_serial PRIMARY KEY,
    student_id INTEGER REFERENCES students(id),
    course_id INTEGER REFERENCES courses(id),
)


INSERT INTO students_courses (student_id, course_id)
VALUES
    (1, 1),
    (1, 3),
    (1, 2),

    (2, 2),
    (2, 3),

    (3, 1),
    (3, 2),

    (4, 2),

    (5, 3),

    (6, 3),

    (7, 1),
    (7, 3),

    (8, 1),

    (9, 2),
    (9, 3),

    (10, 2),
    (10, 3)




SELECT * FROM students_courses 


SELECT students_id FROM students_courses WHERE course_id = 1

SELECT students.first_name , students.id , students_courses.students_id 
FROM studentss.id = students.courses.students_id 
INNER JOIN studenrs.courses
ON students.id = students.courses.students_id 
GROUP BY  students.first_name 
HAVING students_id FROM students_courses WHERE course_id = 1



INSERT INTO courses (title, description, hours, cost, has_certificate)
VALUES
    (
        'AI for Professionals',
        'Lorem Ipsum',
        50,
        1000.00,
        TRUE
    ),
    (
        'Data and AI',
        'Lorem Ipsum',
        50,
        2000.00,
        FALSE
    )

SELECT students.first_name, students.last_name, students_courses.student_id, courses.title
FROM students 
FULL OUTER JOIN students_courses
ON students.id = students_courses.student_id
FULL OUTER JOIN courses
ON courses.id = students_courses.course_id


INSERT INTO students (first_name, last_name, age, country)
VALUES
    ('John', 'Doe', 18, 'Israel'),
    ('Mary', 'Doe', 29, 'China')

SELECT students.first_name, students.last_name, students_courses.student_id, courses.title
FROM students 
LEFT OUTER JOIN students_courses
ON students.id = students_courses.student_id
LEFT OUTER JOIN courses
ON courses.id = students_courses.course_id


SELECT students.first_name, students.last_name, students.id, courses.title
FROM students 
RIGHT OUTER JOIN students_courses
ON students.id = students_courses.student_id
RIGHT OUTER JOIN courses
ON courses.id = students_courses.course_id