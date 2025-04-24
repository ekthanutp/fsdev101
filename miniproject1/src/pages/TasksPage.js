import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function TasksPage() {
  const [tasks, setTasks] = useState([]); // เก็บงานใน state
  const navigate = useNavigate();

  const addTask = () => {
    const newTask = { id: tasks.length + 1, name: `Task ${tasks.length + 1}` };
    setTasks([...tasks, newTask]); // เพิ่มงานใหม่
  };

  const viewTask = (id) => {
    navigate(`/task/${id}`); // เปลี่ยนหน้าไปยังรายละเอียดงาน
  };

  return (
    <div>
      <h1>Tasks</h1>
      <button onClick={addTask}>Add Task</button>
      <ul>
        {tasks.map((task) => (
          <li key={task.id}>
            {task.name}
            <button onClick={() => viewTask(task.id)}>View Details</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TasksPage;
