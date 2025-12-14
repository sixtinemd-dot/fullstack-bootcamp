-- creating a table

--CREATE TABLE actors(
--actor_id SERIAL PRIMARY KEY,
--first_name VARCHAR (50) NOT NULL,
--last_name VARCHAR (100) NOT NULL,
--age DATE NOT NULL,
--number_oscars SMALLINT NOT NULL
--)

-- seeing the table
-- SELECT * FROM actors

-- add data

-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES ('Matt', 'Damon', '08/10/1970', 5)

-- SELECT * FROM actors
-- SHOW DateStyle

-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES 
-- ('Gal', 'Gadot', '1985-04-30', 0),
-- ('Nathalie', 'Portman', '9/06/1981', 3);

-- SELECT * FROM actors

-- different ways to retrieve and display data

-- SELECT last_name FROM actors
-- SELECT first_name, last_name FROM actors

--conditions

-- SELECT * FROM actors WHERE number_oscars > 1
-- SELECT * FROM actors WHERE first_name = 'Gal' AND last_name = 'Gadot'

-- INSERT INTO actors (first_name,last_name,age,number_oscars)
-- VALUES ('Matt', 'Perry', '1969-8-19', 0)

-- SELECT * FROM actors WHERE first_name = 'Matt'

--LIKE (case sensitive) and ILIKE
-- SELECT * FROM actors WHERE first_name ILIKE 'ga%'

--SELECT * FROM actors WHERE first_name = 'Matt' LIMIT 1

-- UPDATE, DELETE, ALTER

-- UPDATE actors
-- SET age = '1986-4-30' WHERE first_name = 'Gal'
-- RETURNING 
-- *

-- updating a table
-- ALTER TABLE actors RENAME COLUMN number_oscars TO oscars;
-- SELECT * FROM actors

-- delete a role
-- DELETE FROM actors WHERE actor_id = 4
-- RETURNING *

-- SELECT * FROM actors

-- clean (delete data but not table) (TRUNCATE)
-- drop: delete completely

-- ALTER TABLE actors ADD COLUMN is_alive BOOLEAN;
-- SELECT * FROM actors

-- ALTER TABLE actors
-- DROP COLUMN is_alive

--
-- Daily Challenge: Actors --
--

-- 1. Count how many actors are in the table.

-- SELECT COUNT(*) 
-- FROM actors

-- 2. Try to add a new actor with some blank fields. What do you think the outcome will be ?

--INSERT INTO actors (first_name,last_name,age,number_oscars)
--VALUES ('Tom', 'Hanks', '1956-07/9')

-- Give an error

