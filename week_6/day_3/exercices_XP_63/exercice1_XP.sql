--Exercise 1: DVD Rental
--Instructions
--Get a list of all the languages, from the language table.

-- SELECT * FROM language;

--Get a list of all films joined with their languages – select the following details : film title, description, and language name.

--SELECT film.title, film.description, language.name AS language_name FROM film 
--INNER JOIN language ON film.language_id = language.language_id;

--Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.

--SELECT film.title, film.description, language.name AS language_name
--FROM language
--LEFT JOIN film ON film.language_id = language.language_id;

--Create a new table called new_film with the following columns : id, name. Add some new films to the table.

--CREATE TABLE new_film(
--id SERIAL PRIMARY KEY,
--name VARCHAR (100) NOT NULL
--)

--INSERT INTO new_film (name)
--VALUES
--('Inception'),
--('Interstellar'),
--('Shutter Island')

--Create a new table called customer_review, which will contain film reviews that customers will make.
--Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
--It should have the following columns:
--review_id – a primary key, non null, auto-increment.
--film_id – references the new_film table. The film that is being reviewed.
--language_id – references the language table. What language the review is in.
--title – the title of the review.
--score – the rating of the review (1-10).
--review_text – the text of the review. No limit on the length.
--last_update – when the review was last updated.

--CREATE TABLE customer_review (
--review_id SERIAL,
--film_id INTEGER NOT NULL,
--language_id INTEGER NOT NULL,
--title VARCHAR(100) NOT NULL,
--score INTEGER CHECK (score BETWEEN 1 AND 10),
--review_text TEXT NOT NULL,
--last_update TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
--PRIMARY KEY (review_id),
--FOREIGN KEY (film_id) REFERENCES new_film(id) ON DELETE CASCADE,
--FOREIGN KEY (language_id) REFERENCES language(language_id)
--)

--Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
--INSERT INTO customer_review(film_id, language_id, title, score, review_text)
--VALUES
--(
--(SELECT id FROM new_film WHERE name = 'Interstellar'),
--(SELECT language_id FROM language WHERE name = 'English'),
--'Movie review', 10, 'This is the best movie I have ever watched'
--),
--(
--(SELECT id FROM new_film WHERE name = 'Shutter Island'),
--(SELECT language_id FROM language WHERE name = 'English'),
--'Film review', 8, 'It was really good and captivating but a little confusing'
--)

--Delete a film that has a review from the new_film table, what happens to the customer_review table?
-- It will remove the whole review about the film because it won't exist anymore
--DELETE FROM new_film WHERE name = 'Shutter Island'

--SELECT * FROM customer_review