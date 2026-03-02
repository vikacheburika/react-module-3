import Task from "../Task/Task.jsx";
import { v4 as uuidv4 } from "uuid";
import { useState } from "react";
import "./TaskList.css"

function TaskList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");
  const [editTaskId, setEditTaskId] = useState(null);

  function addTask() {
    if (!taskInput.trim()) return;

    const newTask = {
      id: uuidv4(),
      description: taskInput,
      status: false,
    };
    setTasks((prev) => [...prev, newTask]);
    setTaskInput("");
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (editTaskId) {
      updateTask();
    } else {
      addTask();
    }
    console.log(tasks);
  }

  function deleteTask(id) {
    setTasks((prevTask) => prevTask.filter((task) => task.id !== id));
    function startEdit(task) {
      setTaskInput(task.description);
      setEditTaskId(task.id);
    }
  }
  function startEdit(task) {
    setTaskInput(task.description);
    setEditTaskId(task.id);
  }
  function updateTask() {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === editTaskId ? { ...task, description: taskInput } : task,
      ),
    );
    setEditTaskId(null);
    setTaskInput("");
  }
  function toggleTaskStatus(id) {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, status: !task.status } : task,
      ),
    );
    tasks.map((task))
  }

  return (
    <>
      <div>
        <h2>ToDo List</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placheholder="Type your task..."
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button type="submit">{editTaskId ? "Update" : "Add task"}</button>
        </form>
        <ul>
          {tasks.map((item) => (
            <Task
              key={item.id}
              task={item}
              onDelete={deleteTask}
              onEdit={startEdit}
              onToggle={toggleTaskStatus}
            />
          ))}
        </ul>
      </div>
    </>
  );
}

export default TaskList;
