const express = require('express');
const cors = require('cors');
const mysql = require('mysql2'); // Use mysql2
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MySQL database connection
const db = mysql.createConnection({
  host: 'localhost',    // XAMPP's MySQL host
  user: 'root',         // Default user in XAMPP
  password: '',         // Default password (empty in XAMPP)
  database: 'task_manager'  // Replace with your database name
});

// Connect to MySQL database
db.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database.');
  }
});

// Routes

// Home route
app.get('/', (req, res) => {
  res.send('Welcome to the Task Manager API');
});

// Fetch all tasks with users
app.get('/api/tasks', (req, res) => {
  const query = `
    SELECT tasks.id, tasks.name, tasks.deadline, tasks.status, users.username
    FROM tasks
    JOIN users ON tasks.user_id = users.id
  `;
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching tasks:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
});

// Fetch all users
app.get('/api/users', (req, res) => {
  const query = 'SELECT * FROM users';
  
  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching users:', err);
      return res.status(500).send('Server error');
    }
    res.json(results);
  });
});

// Create a new task
app.post('/api/tasks', (req, res) => {
  const { name, user_id, deadline, status } = req.body;
  const query = `
    INSERT INTO tasks (name, user_id, deadline, status)
    VALUES (?, ?, ?, ?)
  `;
  
  db.query(query, [name, user_id, deadline, status], (err, result) => {
    if (err) {
      console.error('Error creating task:', err);
      return res.status(500).send('Server error');
    }
    res.json({ id: result.insertId, name, user_id, deadline, status });
  });
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
