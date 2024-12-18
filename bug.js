const express = require('express');
const app = express();
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  // Missing error handling for invalid userId
  db.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) {
      // Throwing a generic error, without details
      throw new Error('Failed to fetch user');
    } 
    if (results.length === 0) {
      // Responding with a 404 but no clear message
      res.status(404).send();
    }
    res.json(results[0]);
  });
});
app.listen(3000, () => console.log('Server listening on port 3000'));