import React, { useState } from "react";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import TaskForm from "../components/TaskForm";

const Dashboard = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [tasks, setTasks] = useState([]);

  const openModal = () => {
    setIsModalOpen(true);
  };
  const closeModal = () => {
    setIsModalOpen(false);
  };

  const addTask = (newTask) => {
    setTasks([...tasks, newTask]);
  }
  return (
    <div class="dashNav d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start container-fluid">
      

      <ul class="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
        <li>
          <a href="#" class="nav-link px-2 link-secondary">
            Home
          </a>
        </li>
      </ul>

      <form class="col-12 col-lg-auto mb-3 mb-lg-0 me-lg-3" role="search">
        <input
          type="search"
          class="form-control"
          placeholder="Search..."
          aria-label="Search"
        />
      </form>

      <div class="text-end profile">
      <a
          href="#"
          class="nav-link px-2 link-body-emphasis addIcon"
          onClick={openModal}
        >
          <AddCircleIcon />
        </a>
        <a
          href="#"
          class="d-block link-body-emphasis text-decoration-none dropdown-toggle "
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          <img
            src="download (1).png"
            alt="mdo"
            width="32"
            height="32"
            class="rounded-circle"
          />
        </a>
        <ul class="dropdown-menu text-small">
          <li>
            <a class="dropdown-item" href="#">
              New project...
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Settings
            </a>
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Profile
            </a>
          </li>
          <li>
            <hr class="dropdown-divider" />
          </li>
          <li>
            <a class="dropdown-item" href="#">
              Sign out
            </a>
          </li>
        </ul>
      </div>
      {isModalOpen && (
        <TaskForm onClose={closeModal} onAddTask={addTask} />
      )}
      {/* Display tasks */}
      <div className="task-list">
        <h1>Tasks</h1>
        <ul>
          {tasks.map((task, index) => (
            <li key={index}>
              <strong>{task.name}</strong>:
              {task.description}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Dashboard;