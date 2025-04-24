import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom'; // ใช้ params สำหรับดึงข้อมูล ID จาก URL

function TaskDetail() {
  const { id } = useParams(); // ดึง ID งานจาก URL
  const [task, setTask] = useState(null);

  useEffect(() => {
    // จำลองดึงข้อมูลงานจาก API หรือจาก state
    const fetchedTask = { id, name: `Task ${id}`, description: `Details of Task ${id}` };
    setTask(fetchedTask);
  }, [id]);

  if (!task) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>Task Detail</h1>
      <p><strong>Name:</strong> {task.name}</p>
      <p><strong>Description:</strong> {task.description}</p>
      <button>Edit Task</button>
    </div>
  );
}

export default TaskDetail;
