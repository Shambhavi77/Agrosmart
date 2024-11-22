<?php
header('Content-Type: application/json');
include('db.php');

$userId = $_POST['userId'];
$description = $_POST['description'];
$dueDate = $_POST['due_date'];

// Insert the new task into the database
$query = "INSERT INTO tasks (user_id, description, due_date) VALUES (?, ?, ?)";
$stmt = $pdo->prepare($query);

if ($stmt->execute([$userId, $description, $dueDate])) {
    echo json_encode(['message' => 'Task added successfully']);
} else {
    echo json_encode(['error' => 'Failed to add task']);
}
?>
