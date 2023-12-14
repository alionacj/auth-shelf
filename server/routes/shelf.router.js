const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

/**
 * Get all of the items on the shelf
 */
router.get('/', (req, res) => {
  const query = `
    SELECT "item".id, "item".description, "item".image_url, "user".username
    FROM "item"
    JOIN "user"
      ON "user".id = "item".user_id
  `
  pool
    .query(query)
    .then(result => {
      res.send(result.rows)
    })
    .catch((error) => {
      console.error('GET route failed:', error)
      res.sendStatus(500)
    }
)});

/**
 * Add an item for the logged in user to the shelf
 */
router.post('/', (req, res) => {
  const query = `
  INSERT INTO "item" ("description", "image_url", "user_id")
    VALUES ($1, $2, $3);
  `
  const values = [
    req.body.description,
    req.body.image_url,
    req.user.id
  ]
  console.log(req.body.description)
  pool
    .query(query, values)
    .then(result => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.error('POST route failed:', err)
      res.sendStatus(500)
    })
});

/**
 * Delete an item if it's something the logged in user added
 */
router.delete('/:id', (req, res) => {
  const query = `
  DELETE FROM "item"
    WHERE "item".id = ${req.params.id}
    AND "item".user_id = ${req.user.id}
  `
  pool
    .query(query)
    .then(result => {
      res.sendStatus(200)
    })
    .catch((err) => {
      console.error('DELETE route failed:', err)
      res.sendStatus(500)
    })
});

/**
 * Update an item if it's something the logged in user added
 */
router.put('/:id', (req, res) => {
  const query = `
    UPDATE "item"
      SET "description" = ${req.body.description},
          "image_url" = ${req.body.image_url}
  `
  pool
    .query(query)
    .then(result => {
      res.sendStatus(201)
    })
    .catch((err) => {
      console.error('PUT route failed:', err)
      res.sendStatus(500)
    })
});

/**
 * Return all users along with the total number of items
 * they have added to the shelf
 */
router.get('/count', (req, res) => {
  const query = `
  SELECT "user".username, COUNT("item".id)
	  FROM "user"
	  JOIN "item"
		  ON "user".id = "item".user_id
	  GROUP BY "item".id, "user".username;
  `
  pool
    .query(query)
    .then(result => {
      res.send(result.rows)
    })
    .catch((err) => {
      console.error('count GET route failed:', err)
    })
});

/**
 * Return a specific item by id
 */
router.get('/:id', (req, res) => {
  const query = `
  SELECT * FROM "item"
    WHERE "item".id = ${req.params.id}
  `
  pool
  .query(query)
  .then(result => {
    res.send(result.rows)
  })
  .catch((err) => {
    console.error('item GET route failed:', err)
  })
});

module.exports = router;
