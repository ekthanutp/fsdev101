import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    // จำลองดึงข้อมูลโปรเจกต์
    const fetchedProject = { id, name: `Project ${id}`, description: `Details of Project ${id}` };
    setProject(fetchedProject);

    // จำลองดึง Task ที่เกี่ยวข้องกับโปรเจกต์
    const fetchedTasks = [
      { id: 1, name: 'Task A', projectId: id },
      { id: 2, name: 'Task B', projectId: id },
    ];
    setTasks(fetchedTasks);
  }, [id]);

  const viewTask = (taskId) => {
    navigate(`/task/${taskId}`);
  };

  if (!project) return <div>Loading...</div>;

  return (
    <div>
      <h1>Project Detail</h1>
      <p><strong>ID:</strong> {project.id}</p>
      <p><strong>Name:</strong> {project.name}</p>
      <p><strong>Description:</strong> {project.description}</p>

      <h2>Tasks</h2>
      {tasks.length === 0 ? (
        <p>No tasks in this project.</p>
      ) : (
        <ul>
          {tasks.map(task => (
            <li key={task.id}>
              {task.name}
              <button onClick={() => viewTask(task.id)}>View</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default ProjectDetail;
