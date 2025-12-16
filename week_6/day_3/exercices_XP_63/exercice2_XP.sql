--Exercise 2 : DVD Rental
--Instructions
--Use UPDATE to change the language of some films. Make sure that you use valid languages.

--UPDATE film
--SET language_id = (
--SELECT language_id FROM language WHERE name = 'French'
--)
--WHERE film_id IN (1, 2, 3)

--Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?

--store.id and address.id. To insert a customer the address and store need to have an already existing id

--We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?

--DROP TABLE customer_review
-- Yes it is easy beacause no table depends on customer_review

--Find out how many rentals are still outstanding (ie. have not been returned to the store yet).

--SELECT COUNT(*) FROM rental WHERE return_date IS NULL

--Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)

--SELECT film.title, film.rental_rate FROM film
--JOIN inventory ON film.film_id = inventory.film_id
--JOIN rental ON inventory.inventory_id = rental.inventory_id
--WHERE rental.return_date IS NULL
--ORDER BY film.rental_rate DESC
--LIMIT 30

--Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
--The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.

--SELECT film.title FROM film
--JOIN film_actor ON film.film_id = film_actor.film_id
--JOIN actor ON film_actor.actor_id = actor.actor_id
--WHERE film.description ILIKE '%sumo%'
--AND actor.first_name = 'Penelope'
--AND actor.last_name = 'Monroe'

-- -> "Park Citizen"

--The 2nd film : A short documentary (less than 1 hour long), rated “R”.

--SELECT film.title FROM film
--WHERE rating = 'R'
--AND film.length <= 60
--AND description ILIKE '%documentary%'

-- -> "Crossing Divorce"

--The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.

--SELECT film.title FROM film
--JOIN inventory ON film.film_id = inventory.film_id
--JOIN rental ON inventory.inventory_id = rental.inventory_id
--JOIN payment ON rental.rental_id = payment.rental_id
--JOIN customer ON rental.customer_id = customer.customer_id
--WHERE payment.amount > 4.00
--AND customer.first_name = 'Matthew'
--AND customer.last_name = 'Mahan'
--AND rental.return_date BETWEEN '2005-07-28' AND '2005-08-01'

-- -> "Sugar Wonka"

--The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.

--SELECT film.title, film.replacement_cost FROM film
--JOIN inventory ON film.film_id = inventory.film_id
--JOIN rental ON inventory.inventory_id = rental.inventory_id
--JOIN customer ON rental.customer_id = customer.customer_id
--WHERE customer.first_name = 'Matthew'
--AND customer.last_name = 'Mahan'
--AND (
--film.title ILIKE '%boat%' 
--OR film.description ILIKE '%boat%'
--)
--ORDER BY film.replacement_cost DESC

-- -> "Stone Fire"	19.99
"Money Harold"	17.99
"Masked Bubble"	12.99
"Talented Homicide"	9.99