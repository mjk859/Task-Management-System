// TaskForm.js
import React, { useState } from "react";

const TaskForm = ({ onClose, onAddTask }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");

  const handleAddTask = () => {
    // Validate input and add the task
    if (taskName.trim() === "") {
      alert("Please enter a task name.");
      return;
    }

    const newTask = {
      name: taskName,
      description,
    };

    onAddTask(newTask);
    onClose();
  };

  return (
    <div className="task-form">
      
      <table>
        <tr>
          <h2 className="taskFormHeading">Add Task</h2>
        </tr>
        <tr>
          <td>
            <label>Task Name:</label>
          </td>
          <td>
            <input
              type="text"
              value={taskName}
              onChange={(e) => setTaskName(e.target.value)}
              className="taskNameInput"
            />
          </td>
        </tr>
        <tr>
          <td>
            <label>Description:</label>
          </td>
          <td>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="textarea"
            />
          </td>
        </tr>
        <tr>
          <td>
            <button
              className="taskFormButton addTaskButton"
              onClick={handleAddTask}
            >
              Add Task
            </button>
          </td>
          <td>
            <button className="taskFormButton cancelButton" onClick={onClose}>
              Cancel
            </button>
          </td>
        </tr>
      </table>
    </div>
  );
};

export default TaskForm;
