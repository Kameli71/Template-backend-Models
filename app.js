const { setupRoutes } = require('./routes');
const express = require('express');
const app = express();
const cookieParser = require('cookie-parser')

const port = process.env.PORT || 3000;

app.use(cookieParser());
// const Joi = require('joi');

// connection.connect((err) => {
//   if (err) {
//     console.error('error connecting: ' + err.stack);
//   } else {
//     console.log('connected to database with threadId :  ' + connection.threadId);
//   }
// });

// app.use(express.json())

// connection.query("SELECT * FROM movies", (err, results) => {
//   console.log(err, results)
// });

// app.get('/api/users', (req, res) => {
//   let sql = 'SELECT * FROM users';
//   const sqlValues = [];
//   if (req.query.language) {
//     sql += ' WHERE language = ?';
//     sqlValues.push(req.query.language);
//   } 
//   connection.query(sql, sqlValues, (err, result) => {
//     if (err) {
//       res.status(500).send('Error retrieving data from database');
//     } else {
//       res.status(200).json(result);
//     }
//   });
// });

// app.get('/api/users/:id', (req, res) => {
//   const userId = req.params.id;
//   connection.query(
//     'SELECT * FROM users WHERE id = ?',
//     [userId],
//     (err, results) => {
//       if (err) {
//         res.status(500).send('Error retrieving users from database');
//       } else {
//         if (results.length) res.json(results[0]);
//         else res.status(404).send('user not found');
//       }
//     }
//   );
// });

// app.get('/api/movies', (req, res) => {
//   let sql = 'SELECT * FROM movies';
//   const sqlValues = [];
//   if (req.query.color) {
//     sql += ' WHERE color = ?';
//     sqlValues.push(req.query.color);
//   }
//   if (req.query.max_duration) {
//     if (req.query.color) sql += ' AND duration <= ? ;';
//     else sql += ' WHERE duration <= ?';
 
//     sqlValues.push(req.query.max_duration);
//   }
//   connection.query(sql, sqlValues, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send('Error retrieving movies from database');
//     } else {
//       res.status(200).json(results);
//     }
//   });
// });

// app.get('/api/movies/:id', (req, res) => {
//   const movieId = req.params.id;
//   connection.query(
//     'SELECT * FROM users WHERE id = ?',
//     [movieId],
//     (err, results) => {
//       if (err) {
//         res.status(500).send('Error retrieving users from database');
//       } else {
//         if (results.length) res.json(results[0]);
//         else res.status(404).send('user not found');
//       }
//     }
//   );
// });

// app.post("/api/movies", (req, res) => {
//   const { title, director, year, color, duration } = req.body;
//   const db = connection.promise();
//   let validationErrors = null;
//   db.query(
//     'SELECT * FROM movies WHERE title = ?', [title])
//     .then(([result]) => {
//       if (result[0]) return Promise.reject('DUPLICATE_MOVIE');
//       validationErrors = Joi.object({
//         title: Joi.string().max(255).required(),
//         director: Joi.string().max(255).required(),
//         year: Joi.number().integer().min(1888).required(),
//         color: Joi.boolean().required(),
//         duration: Joi.number().positive().required(),
//       }).validate({ title, director, year, color, duration}, { abortEarly: false }).error;
//       if (validationErrors) return Promise.reject('INVALID_DATA');
//       return db.query(
//         'INSERT INTO movies (title, director, year, color, duration) VALUES (?, ?, ?, ?, ?)',
//         [title, director, year, color, duration]
//       );
//     })
//     .then(([{ insertId }]) => {
//       res.status(201).json({ id: insertId, title, director, year, color, duration });
//     })
//     .catch((err) => {
//       console.error(err);
//       if (err === 'DUPLICATE_MOVIE')
//         res.status(409).json({ message: 'This movie is already used' });
//       else if (err === 'INVALID_DATA')
//         res.status(422).json({ validationErrors });
//       else res.status(500).send('Error saving the movie');
//     });
// });
    
// app.post('/api/users', (req, res) => {
//   const { firstname, lastname, email, city, language } = req.body;
//   const db = connection.promise();
//   let validationErrors = null;
//   db.query('SELECT * FROM users WHERE email = ?', [email])
//     .then(([result]) => {
//       if (result[0]) return Promise.reject('DUPLICATE_EMAIL');
//       validationErrors = Joi.object({
//         email: Joi.string().email().max(255).required(),
//         firstname: Joi.string().max(255).required(),
//         lastname: Joi.string().max(255).required(),
//         city: Joi.string().max(255),
//         language: Joi.string().max(255),
//         // hashedPassword: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required()
//       }).validate({ firstname, lastname, email, city, language}, { abortEarly: false }).error;
//       if (validationErrors) return Promise.reject('INVALID_DATA');
//       return db.query(
//         'INSERT INTO users (firstname, lastname, email, city, language) VALUES (?, ?, ?, ?, ?)',
//         [firstname, lastname, email, city, language]
//       );
//     })
//     .then(([{ insertId }]) => {
//       res.status(201).json({ id: insertId, firstname, lastname, email, city, language });
//     })
//     .catch((err) => {
//       console.error(err);
//       if (err === 'DUPLICATE_EMAIL')
//         res.status(409).json({ message: 'This email is already used' });
//       else if (err === 'INVALID_DATA')
//         res.status(422).json({ validationErrors });
//       else res.status(500).send('Error saving the user');
//     });
// });

// app.put('/api/users/:id', (req, res) => {
//   const { firstname, lastname, email, city, language } = req.body;
//   const userId = req.params.id;
//   const db = connection.promise();
//   let existingUser = null;
//   db.query('SELECT * FROM users WHERE id = ?', [userId])
//     .then(([results]) => {
//       existingUser = results[0];
//       if (!existingUser) return Promise.reject('RECORD_NOT_FOUND');
//       validationErrors = Joi.object({
//         email: Joi.string().email().max(255),
//         firstname: Joi.string().max(255),
//         lastname: Joi.string().max(255),
//         city: Joi.string().max(255),
//         language: Joi.string().max(255),
//       }).validate({ firstname, lastname, email, city, language}, { abortEarly: false }).error;
//       if (validationErrors) return Promise.reject('INVALID_DATA');
//       return db.query('UPDATE users SET ? WHERE id = ?', [req.body, userId]);
//     })
//     .then(() => {
//       res.status(200).json({ ...existingUser, ...req.body });
//     })
//     .catch((err) => {
//       console.error(err);
//       if (err === 'RECORD_NOT_FOUND')
//         res.status(404).send(`User with id ${userId} not found.`);
//       else res.status(500).send('Error updating a user');
//     });
// });

// app.put('/api/movies/:id', (req, res) => {
//   const { title, director, year, color, duration } = req.body;
//   const movieId = req.params.id;
//   const db = connection.promise();
//   let existingMovie = null;
//   db.query('SELECT * FROM movies WHERE id = ?', [movieId])
//     .then(([results]) => {
//       existingMovie = results[0];
//       if (!existingMovie) return Promise.reject('RECORD_NOT_FOUND');
//       validationErrors = Joi.object({
//         title: Joi.string().max(255),
//         director: Joi.string().max(255),
//         year: Joi.number().integer().min(1888),
//         color: Joi.boolean(),
//         duration: Joi.number().positive(),
//       }).validate({ title, director, year, color, duration}, { abortEarly: false }).error;
//       if (validationErrors) return Promise.reject('INVALID_DATA');
//       return db.query('UPDATE movies SET ? WHERE id = ?', [req.body, movieId]);
//     })
//     .then(() => {
//       res.status(200).json({ ...existingMovie, ...req.body });
//     })
//     .catch((err) => {
//       console.error(err);
//       if (err === 'RECORD_NOT_FOUND')
//         res.status(404).send(`User with id ${movieId} not found.`);
//       else if (err === 'INVALID_DATA')
//         res.status(422).json({ validationErrors });
//       else res.status(500).send('Error updating a movie');
//     });
// });

// app.delete('/api/users/:id', (req, res) => {
//   connection.query(
//     'DELETE FROM users WHERE id = ?',
//     [req.params.id],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send('Error deleting an user');
//       } else {
//         if (result.affectedRows) res.status(200).send('🎉 User deleted!');
//         else res.status(404).send('User not found.');
//       }
//     }
//   );
// });

// app.delete('/api/movies/:id', (req, res) => {
//   const movieId = req.params.id;
//   connection.query(
//     'DELETE FROM movies WHERE id = ?',
//     [movieId],
//     (err, result) => {
//       if (err) {
//         console.log(err);
//         res.status(500).send('Error deleting a movie');
//       } else {
//         if (result.affectedRows) res.status(200).send('🎉 Movie deleted!');
//         else res.status(404).send('Movie not found');
//       }
//     }
//   );
// });

app.use(express.json());

setupRoutes(app);

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
