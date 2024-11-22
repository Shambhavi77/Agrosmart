<?php
header('Content-Type: application/json');
include('db.php');

$taskId = $_POST['taskId'];
$status = $_POST['status']; // Completed or Pending

// Update task status
$query = "UPDATE tasks SET status = ? WHERE id = ?";
$stmt = $pdo->prepare($query);

if ($stmt->execute([$status, $taskId])) {
    echo json_encode(['message' => 'Task updated successfully']);
} else {
    echo json_encode(['error' => 'Failed to update task']);
}
?>
