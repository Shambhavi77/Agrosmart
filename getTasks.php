<?php
header('Content-Type: application/json');
include('db.php');

$userId = $_GET['userId']; // Get user ID from query params

// Fetch tasks for the logged-in user
$query = "SELECT * FROM tasks WHERE user_id = ?";
$stmt = $pdo->prepare($query);
$stmt->execute([$userId]);
$tasks = $stmt->fetchAll(PDO::FETCH_ASSOC);

echo json_encode($tasks); // Return tasks in JSON format
?>
