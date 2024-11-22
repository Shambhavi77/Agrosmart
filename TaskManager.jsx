          import React, { useEffect, useState } from 'react';
          import axios from 'axios';
          import './TaskManager.css'; // Import the updated CSS

          const TaskManager = () => {
            const [tasks, setTasks] = useState([]);
            const [newTask, setNewTask] = useState("");

            useEffect(() => {
              axios
                .get("http://localhost:5000/get_tasks")
                .then((response) => setTasks(response.data))
                .catch((error) => console.error("Error fetching tasks:", error));
            }, []);

            const addTask = () => {
              if (!newTask.trim()) return;

              axios
                .post("http://localhost:5000/add_task", { task_name: newTask })
                .then((response) => {
                  setTasks([...tasks, response.data]);
                  setNewTask("");
                })
                .catch((error) => console.error("Error adding task:", error));
            };

            return (
              <div className="task-manager">
                <h1 className="task-manager-title">Farm Management</h1>
                <p className="task-manager-description">
                  Track farm activities, manage tasks efficiently, and assign roles easily. Stay organized and improve productivity on the go.
                </p>
                
                <div className="task-list">
                  <ul>
                    {tasks.map((task) => (
                      <li key={task.id} className="task-item">
                        {task.task_name}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="task-input">
                  <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="Add a new task"
                  />
                  <button onClick={addTask}>Add Task</button>
                </div>
              </div>
            );
          };

          export default TaskManager;
