// Import necessary modules
const express = require('express');
const bodyParser = require('body-parser');

// Create an Express app
const app = express();

// Use body-parser middleware to parse incoming request bodies
app.use(bodyParser.urlencoded({ extended: true }));

// Set up a basic route for the registration form
app.get('/registerform', (req, res) => {
  res.sendFile(__dirname + '/registerform.html'); // Create this file next
});

// Handle form submission
app.post('/register', (req, res) => {
  const { username, email, password } = req.body;
  // Here, you can process the registration data (e.g., save it to a database)
  console.log('User registered: ${firstname},${lastname},${email}, ${password},${confirmpassword}');
  res.send('Registration successfully compeleted!');
});

// Start the server
const PORT = process.env.PORT || 3005;
app.listen(PORT, () => {
  console.log('Server is listening on port ${PORT}');
});