<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Set the header to JSON
header('Content-Type: application/json');

// Get the JSON input
$input = json_decode(file_get_contents("php://input"), true);

if ($input) {
    $task = $input['task'];
    $status = $input['status'];

    // Database connection
    $conn = new mysqli('localhost', 'username', 'password', 'database');

    if ($conn->connect_error) {
        die("Connection failed: " . $conn->connect_error);
    }

    // Insert task into database
    $sql = "INSERT INTO tasks (task, status) VALUES ('$task', '$status')";
    
    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Task added successfully']);
    } else {
        echo json_encode(['error' => 'Failed to add task']);
    }

    $conn->close();
} else {
    echo json_encode(['error' => 'Invalid input']);
}
?>
